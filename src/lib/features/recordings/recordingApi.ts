import { apiSlice } from "../../api/apiSlice";

export interface Recording {
  id: number;
  title: string;
  description: string | null;
  isPublished: boolean;
  uploadedAt: string;
  liveClassId: number | null;
}

interface RecordingsResponse {
  statusCode: number;
  data: Recording[];
  message: string;
}

interface StreamResponse {
  statusCode: number;
  data: {
    id: number;
    title: string;
    description: string | null;
    streamUrl: string;
    expiresIn: string;
  };
  message: string;
}

export const recordingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecordingsByBatch: builder.query<RecordingsResponse, string>({
      query: (batchId) => `/recordings/batch/${batchId}`,
      providesTags: ["Recordings"],
    }),

    getStreamUrl: builder.query<StreamResponse, string>({
      query: (recordingId) => `/recordings/${recordingId}/stream`,
      // Don't cache stream URLs — they expire
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetRecordingsByBatchQuery, useLazyGetStreamUrlQuery } =
  recordingApi;
