"use client";

import { useState } from "react";
import { X, Eye, EyeOff, Phone, Lock, User, Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setCredentials } from "@/lib/features/auth/authSlice";
import { useLoginMutation } from "@/lib/features/auth/authApi";
import {
  useInitiatePaymentMutation,
  useCheckoutRegisterMutation,
} from "@/lib/features/payment/paymentApi";
import toast from "react-hot-toast";

type Step = "signup" | "login";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  batchId: number;
  batchTitle?: string;
  price?: number;
}

export default function EnrollModal({
  isOpen,
  onClose,
  batchId,
  batchTitle = "Cadet HSC Biology Crash Course",
  price = 3500,
}: EnrollModalProps) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  const [step, setStep] = useState<Step>("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [checkoutRegister, { isLoading: checkoutLoading }] =
    useCheckoutRegisterMutation();
  const [initiatePayment, { isLoading: paymentLoading }] =
    useInitiatePaymentMutation();

  const isLoading = loginLoading || checkoutLoading || paymentLoading || redirecting;

  const resetForm = () => {
    setName("");
    setPhone("");
    setPassword("");
    setShowPassword(false);
  };

  // For new users: single API call — register + initiate payment
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await checkoutRegister({
        name,
        phone,
        password,
        batchId,
      }).unwrap();

      // Store credentials
      dispatch(
        setCredentials({
          user: res.data.user,
          accessToken: res.data.accessToken,
        })
      );

      toast.success("Account created! Redirecting to payment...");
      setRedirecting(true);

      // Redirect to SSLCommerz
      window.location.href = res.data.paymentUrl;
    } catch (err: unknown) {
      const error = err as { data?: { message?: string }; status?: number };
      if (error?.status === 409) {
        toast.error("This phone is already registered. Please login.");
        setStep("login");
      } else {
        toast.error(error?.data?.message || "Something went wrong");
      }
    }
  };

  // For existing users: login → initiate payment
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Login first
      const loginRes = await login({ phone, password }).unwrap();
      dispatch(
        setCredentials({
          user: loginRes.data.user,
          accessToken: loginRes.data.accessToken,
        })
      );

      // Then initiate payment
      const paymentRes = await initiatePayment({ batchId }).unwrap();

      toast.success("Logged in! Redirecting to payment...");
      setRedirecting(true);

      // Redirect to SSLCommerz
      window.location.href = paymentRes.data.paymentUrl;
    } catch (err: unknown) {
      const error = err as { data?: { message?: string }; status?: number };
      if (error?.status === 409) {
        toast.success("You are already enrolled!");
        onClose();
      } else {
        toast.error(error?.data?.message || "Something went wrong");
      }
    }
  };

  // For already logged-in users: just initiate payment
  const handleDirectPayment = async () => {
    try {
      const res = await initiatePayment({ batchId }).unwrap();
      toast.success("Redirecting to payment...");
      setRedirecting(true);
      window.location.href = res.data.paymentUrl;
    } catch (err: unknown) {
      const error = err as { data?: { message?: string }; status?: number };
      if (error?.status === 409) {
        toast.success("You are already enrolled!");
        onClose();
      } else {
        toast.error(error?.data?.message || "Payment initiation failed");
      }
    }
  };

  if (!isOpen) return null;

  // If already logged in, skip to payment directly
  if (isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <div
          className="absolute inset-0 bg-[#050d1c]/70 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30">
          <div className="relative h-2 bg-gradient-to-r from-[#0d2240] via-[#15355a] to-[#dc2626]" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={16} strokeWidth={2.5} />
          </button>

          <div className="px-8 pb-8 pt-8">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
                Enrolling in
              </p>
              <p className="mt-1 font-sans text-base font-bold text-gray-900">
                {batchTitle}
              </p>
              <p className="mt-1 font-sans text-lg font-black text-[#dc2626]">
                ৳{price.toLocaleString()}
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                You&apos;ll be redirected to SSLCommerz for secure payment.
              </p>
            </div>

            <button
              type="button"
              onClick={handleDirectPayment}
              disabled={isLoading}
              className="mt-6 w-full rounded-xl bg-[#dc2626] py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#dc2626]/25 transition hover:bg-[#b91c1c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={18} className="animate-spin" />
                  Redirecting...
                </span>
              ) : (
                `Pay ৳${price.toLocaleString()} — Proceed`
              )}
            </button>

            <p className="mt-4 text-center font-sans text-xs text-gray-400">
              Secure payment powered by SSLCommerz
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050d1c]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30">
        <div className="relative h-2 bg-gradient-to-r from-[#0d2240] via-[#15355a] to-[#dc2626]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        <div className="px-8 pb-8 pt-8">
          {/* Course info */}
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
              Enrolling in
            </p>
            <p className="mt-1 font-sans text-base font-bold text-gray-900">
              {batchTitle}
            </p>
            <p className="mt-1 font-sans text-lg font-black text-[#dc2626]">
              ৳{price.toLocaleString()}
            </p>
          </div>

          {/* Step: Signup */}
          {step === "signup" && (
            <>
              <div className="mt-6 text-center">
                <h2 className="font-sans text-xl font-bold text-gray-900">
                  Create account & pay
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  One step — then you&apos;ll be redirected to payment
                </p>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSignup}>
                <div>
                  <label
                    htmlFor="enroll-name"
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
                      id="enroll-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enroll-phone"
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
                      id="enroll-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enroll-password"
                    className="block font-sans text-xs font-semibold uppercase tracking-wider text-gray-500"
                  >
                    Create Password
                  </label>
                  <div className="relative mt-1.5">
                    <Lock
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      id="enroll-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min 6 characters"
                      required
                      minLength={6}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-11 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-[#dc2626] py-3.5 font-sans text-sm font-bold text-white shadow-lg shadow-[#dc2626]/25 transition hover:bg-[#b91c1c] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      {redirecting ? "Redirecting..." : "Processing..."}
                    </span>
                  ) : (
                    `Sign Up & Pay ৳${price.toLocaleString()}`
                  )}
                </button>
              </form>

              <p className="mt-4 text-center font-sans text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setStep("login");
                    resetForm();
                  }}
                  className="font-semibold text-[#0d2240] hover:text-[#dc2626]"
                >
                  Login
                </button>
              </p>
            </>
          )}

          {/* Step: Login */}
          {step === "login" && (
            <>
              <div className="mt-6 text-center">
                <h2 className="font-sans text-xl font-bold text-gray-900">
                  Login to enroll
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Login and you&apos;ll be redirected to payment
                </p>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="enroll-login-phone"
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
                      id="enroll-login-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enroll-login-password"
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
                      id="enroll-login-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-11 font-sans text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#0d2240] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0d2240]/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-[#dc2626] py-3.5 font-sans text-sm font-bold text-white shadow-lg shadow-[#dc2626]/25 transition hover:bg-[#b91c1c] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      {redirecting ? "Redirecting..." : "Logging in..."}
                    </span>
                  ) : (
                    `Login & Pay ৳${price.toLocaleString()}`
                  )}
                </button>
              </form>

              <p className="mt-4 text-center font-sans text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setStep("signup");
                    resetForm();
                  }}
                  className="font-semibold text-[#0d2240] hover:text-[#dc2626]"
                >
                  Sign Up
                </button>
              </p>
            </>
          )}

          <p className="mt-4 text-center font-sans text-xs text-gray-400">
            Secure payment powered by SSLCommerz
          </p>
        </div>
      </div>
    </div>
  );
}
