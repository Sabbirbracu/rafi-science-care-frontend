"use client";

import { useState } from "react";
import { X, Eye, EyeOff, Mail, Lock, User } from "lucide-react";

type AuthMode = "login" | "signup";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050d1c]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30">
        {/* Top decorative strip */}
        <div className="relative h-2 bg-gradient-to-r from-[#0d2240] via-[#15355a] to-[#dc2626]" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        {/* Content */}
        <div className="px-8 pb-8 pt-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-sans text-2xl font-bold text-gray-900">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {mode === "login"
                ? "তোমার Dashboard-এ Login করো"
                : "নতুন Account তৈরি করো"}
            </p>
          </div>

          {/* Form */}
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name field — signup only */}
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="auth-name"
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
                    id="auth-name"
                    type="text"
                    placeholder="তোমার নাম"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="auth-email"
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
                  id="auth-email"
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="auth-password"
                className="block font-sans text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Password
              </label>
              <div className="relative mt-1.5">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="auth-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-11 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password — login only */}
            {mode === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  className="font-sans text-xs font-semibold text-[#dc2626] transition hover:text-[#b91c1c]"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#dc2626] py-3.5 font-sans text-sm font-bold text-white shadow-lg shadow-[#dc2626]/25 transition hover:bg-[#b91c1c] hover:shadow-xl hover:shadow-[#dc2626]/30"
            >
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 font-sans text-xs text-gray-400">
                অথবা
              </span>
            </div>
          </div>

          {/* Google login */}
          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 font-sans text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {/* Toggle mode */}
          <p className="mt-6 text-center font-sans text-sm text-gray-500">
            {mode === "login" ? (
              <>
                Account নেই?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="font-semibold text-[#0d2240] transition hover:text-[#dc2626]"
                >
                  Sign Up করো
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="font-semibold text-[#0d2240] transition hover:text-[#dc2626]"
                >
                  Login করো
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
