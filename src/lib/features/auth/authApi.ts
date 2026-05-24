import { apiSlice } from "../../api/apiSlice";
import type { User } from "./authSlice";

interface RegisterRequest {
  name: string;
  phone: string;
  email?: string;
  password: string;
}

interface LoginRequest {
  phone: string;
  password: string;
}

interface LoginResponse {
  statusCode: number;
  data: {
    user: User;
    accessToken: string;
  };
  message: string;
}

interface RegisterResponse {
  statusCode: number;
  data: User;
  message: string;
}

interface RefreshResponse {
  statusCode: number;
  data: {
    accessToken: string;
  };
  message: string;
}

interface MeResponse {
  statusCode: number;
  data: User;
  message: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    refreshToken: builder.mutation<RefreshResponse, void>({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
      }),
    }),

    getMe: builder.query<MeResponse, void>({
      query: () => "/auth/me",
      providesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useGetMeQuery,
} = authApi;
