"use client";

import { useState } from "react";
import { Video, Play, Clock, Loader2, AlertCircle } from "lucide-react";
import {
  useGetRecordingsByBatchQuery,
  useLazyGetStreamUrlQuery,
} from "@/lib/features/recordings/recordingApi";
import { useGetMyBatchesQuery } from "@/lib/features/student/studentApi";

export default function RecordingsPage() {
  const { data: batchesData, isLoading: batchesLoading } =
    useGetMyBatchesQuery();
  const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);

  // Use first enrolled batch as default
  const batches = batchesData?.data || [];
  const activeBatchId =
    selectedBatchId || (batches.length > 0 ? String(batches[0].batch.id) : "");

  const {
    data: recordingsData,
    isLoading: recordingsLoading,
    error,
  } = useGetRecordingsByBatchQuery(activeBatchId, {
    skip: !activeBatchId,
  });

  const [getStreamUrl] = useLazyGetStreamUrlQuery();
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [streamUrl, setStreamUrl] = useState<string | null>(null);
  const [streamLoading, setStreamLoading] = useState(false);

  const recordings = recordingsData?.data || [];

  // Check if the error is a 403 (enrollment/payment issue)
  const is403 =
    error && "status" in error && error.status === 403;

  const handlePlay = async (recordingId: number) => {
    setStreamLoading(true);
    try {
      const res = await getStreamUrl(String(recordingId)).unwrap();
      setStreamUrl(res.data.streamUrl);
      setPlayingId(recordingId);
    } catch {
      setStreamUrl(null);
      setPlayingId(null);
    } finally {
      setStreamLoading(false);
    }
  };

  const handleClosePlayer = () => {
    setPlayingId(null);
    setStreamUrl(null);
  };

  const isLoading = batchesLoading || recordingsLoading;

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 size={24} className="animate-spin text-[#0d2240]" />
      </div>
    );
  }

  // No batches at all — not enrolled
  if (batches.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="font-sans text-2xl font-bold text-gray-900">
            Recorded Lectures
          </h1>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">
          <Video size={40} className="mx-auto text-gray-300" />
          <p className="mt-4 font-sans text-sm text-gray-500">
            You are not enrolled in any batch yet. Enroll to access recordings.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-sans text-2xl font-bold text-gray-900">
            Recorded Lectures
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            All class recordings — watch anytime, unlimited replays
          </p>
        </div>

        {/* Batch selector */}
        {batches.length > 1 && (
          <select
            value={activeBatchId}
            onChange={(e) => setSelectedBatchId(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 font-sans text-sm text-gray-900 focus:border-[#0d2240] focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
          >
            {batches.map((enrollment) => (
              <option
                key={enrollment.batch.id}
                value={String(enrollment.batch.id)}
              >
                {enrollment.batch.title}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Payment pending / 403 error state */}
      {is403 ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <AlertCircle size={20} />
            </div>
            <div>
              <h3 className="font-sans text-base font-bold text-amber-900">
                Payment Under Review
              </h3>
              <p className="mt-1 text-sm text-amber-800">
                Your payment is being processed. Once confirmed, you&apos;ll get
                instant access to all recordings. This usually takes a few
                minutes.
              </p>
              <p className="mt-3 font-sans text-xs text-amber-600">
                If this persists for more than 30 minutes, please contact
                support.
              </p>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="font-sans text-sm text-red-700">
            Failed to load recordings. Please try again later.
          </p>
        </div>
      ) : null}

      {/* Video player overlay */}
      {playingId && streamUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={handleClosePlayer}
              className="absolute -top-10 right-0 font-sans text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Close ✕
            </button>
            <div className="overflow-hidden rounded-2xl bg-black">
              <video
                src={streamUrl}
                controls
                autoPlay
                className="h-auto w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Recordings grid */}
      {!is403 && !error && recordings.length === 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">
          <Video size={40} className="mx-auto text-gray-300" />
          <p className="mt-4 font-sans text-sm text-gray-500">
            No recordings available yet. Check back after your first class.
          </p>
        </div>
      )}

      {!is403 && !error && recordings.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recordings.map((rec) => (
            <div
              key={rec.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Thumbnail */}
              <button
                type="button"
                onClick={() => handlePlay(rec.id)}
                disabled={streamLoading}
                className="relative flex h-40 w-full items-center justify-center bg-gradient-to-br from-[#0d2240] to-[#15355a]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-white/30">
                  {streamLoading ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <Play size={24} fill="currentColor" />
                  )}
                </div>
              </button>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-sans text-sm font-bold text-gray-900 line-clamp-2">
                  {rec.title}
                </h3>
                {rec.description && (
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                    {rec.description}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <Clock size={12} />
                  <span>
                    {new Date(rec.uploadedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
