"use client";

import { User, Mail, Phone, School, Save } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-sans text-2xl font-bold text-gray-900">Profile</h1>
        <p className="mt-1 text-sm text-gray-500">
          তোমার Profile Information
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0d2240] to-[#15355a] text-3xl font-bold text-white">
              S
            </div>
            <button
              type="button"
              className="mt-3 font-sans text-xs font-semibold text-[#dc2626] transition hover:text-[#b91c1c]"
            >
              Change Photo
            </button>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="profile-name"
                  className="block font-sans text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Full Name
                </label>
                <div className="relative mt-1.5">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="profile-name"
                    type="text"
                    defaultValue="Student Name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="profile-email"
                  className="block font-sans text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Email
                </label>
                <div className="relative mt-1.5">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="profile-email"
                    type="email"
                    defaultValue="student@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="profile-phone"
                  className="block font-sans text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Phone
                </label>
                <div className="relative mt-1.5">
                  <Phone
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="profile-phone"
                    type="tel"
                    defaultValue="+880 1XXXXXXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="profile-college"
                  className="block font-sans text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Cadet College
                </label>
                <div className="relative mt-1.5">
                  <School
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="profile-college"
                    type="text"
                    defaultValue="Bogura Cadet College"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0d2240] px-6 py-3 font-sans text-sm font-semibold text-white transition hover:bg-[#15355a]"
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
