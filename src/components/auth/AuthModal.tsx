"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Eye, EyeOff, Phone, Lock, User } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks";
import { setCredentials } from "@/lib/features/auth/authSlice";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/lib/features/auth/authApi";
import toast from "react-hot-toast";

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

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const isLoading = isLoginLoading || isRegisterLoading;

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (mode === "login") {
        const res = await login({ phone, password }).unwrap();
        dispatch(
          setCredentials({
            user: res.data.user,
            accessToken: res.data.accessToken,
          })
        );
        toast.success("Login successful!");
        resetForm();
        onClose();
        router.push("/dashboard");
      } else {
        await register({
          name,
          phone,
          password,
          ...(email && { email }),
        }).unwrap();
        toast.success("Registration successful! Please login.");
        resetForm();
        setMode("login");
      }
    } catch (err: unknown) {
      const error = err as { data?: { message?: string } };
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

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
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="তোমার নাম"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                  />
                </div>
              </div>
            )}

            {/* Phone */}
            <div>
              <label
                htmlFor="auth-phone"
                className="block font-sans text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Phone Number
              </label>
              <div className="relative mt-1.5">
                <Phone
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="auth-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                />
              </div>
            </div>

            {/* Email — signup only, optional */}
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="auth-email"
                  className="block font-sans text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Email{" "}
                  <span className="normal-case tracking-normal text-gray-400">
                    (optional)
                  </span>
                </label>
                <div className="relative mt-1.5">
                  <svg
                    className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <input
                    id="auth-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                  />
                </div>
              </div>
            )}

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-11 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-[#dc2626] py-3.5 font-sans text-sm font-bold text-white shadow-lg shadow-[#dc2626]/25 transition hover:bg-[#b91c1c] hover:shadow-xl hover:shadow-[#dc2626]/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading
                ? "Please wait..."
                : mode === "login"
                ? "Login"
                : "Sign Up"}
            </button>
          </form>

          {/* Toggle mode */}
          <p className="mt-6 text-center font-sans text-sm text-gray-500">
            {mode === "login" ? (
              <>
                Account নেই?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("signup");
                    resetForm();
                  }}
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
                  onClick={() => {
                    setMode("login");
                    resetForm();
                  }}
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
