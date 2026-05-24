import { apiSlice } from "../../api/apiSlice";

interface InitiatePaymentRequest {
  batchId: number;
}

interface InitiatePaymentResponse {
  statusCode: number;
  data: {
    paymentUrl: string;
    transactionId: string;
    amount: number;
  };
  message: string;
}

interface CheckoutRegisterRequest {
  name: string;
  phone: string;
  password: string;
  email?: string;
  batchId: number;
}

interface CheckoutRegisterResponse {
  statusCode: number;
  data: {
    user: {
      id: string;
      name: string;
      phone: string;
      email: string | null;
      role: string;
    };
    accessToken: string;
    paymentUrl: string;
    transactionId: string;
  };
  message: string;
}

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    initiatePayment: builder.mutation<
      InitiatePaymentResponse,
      InitiatePaymentRequest
    >({
      query: (body) => ({
        url: "/payments/initiate",
        method: "POST",
        body,
      }),
    }),

    checkoutRegister: builder.mutation<
      CheckoutRegisterResponse,
      CheckoutRegisterRequest
    >({
      query: (body) => ({
        url: "/payments/checkout-register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useInitiatePaymentMutation, useCheckoutRegisterMutation } =
  paymentApi;
