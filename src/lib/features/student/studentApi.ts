import { apiSlice } from "../../api/apiSlice";

interface Batch {
  id: number;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

interface Enrollment {
  id: number;
  enrolledAt: string;
  batch: Batch;
}

interface DashboardResponse {
  statusCode: number;
  data: {
    user: {
      id: number;
      name: string;
      phone: string;
      email: string | null;
      role: string;
      createdAt: string;
    };
    enrolledBatches: Enrollment[];
    totalEnrolled: number;
  };
  message: string;
}

interface BatchWithCounts {
  id: number;
  title: string;
  description: string | null;
  price: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  _count: {
    liveClasses: number;
    recordings: number;
    exams: number;
  };
}

interface MyBatchesResponse {
  statusCode: number;
  data: {
    id: number;
    enrolledAt: string;
    batch: BatchWithCounts;
  }[];
  message: string;
}

interface LiveClass {
  id: number;
  title: string;
  scheduledAt: string;
  durationMinutes: number;
  status: string;
  streamUrl: string | null;
  batch: { id: number; title: string };
}

interface UpcomingClassesResponse {
  statusCode: number;
  data: LiveClass[];
  message: string;
}

interface PendingExam {
  id: number;
  title: string;
  examDate: string;
  durationMinutes: number;
  hasOMRSheet: boolean;
  isSubmitted: boolean;
  submission: {
    examId: number;
    status: string;
    marksObtained: number | null;
  } | null;
  batch: { id: number; title: string };
}

interface PendingExamsResponse {
  statusCode: number;
  data: PendingExam[];
  message: string;
}

interface ExamResult {
  id: number;
  submittedAt: string;
  marksObtained: number | null;
  status: string;
  exam: {
    id: number;
    title: string;
    examDate: string;
    batch: { id: number; title: string };
  };
}

interface MyResultsResponse {
  statusCode: number;
  data: ExamResult[];
  message: string;
}

interface ProfileResponse {
  statusCode: number;
  data: {
    id: number;
    name: string;
    phone: string;
    email: string | null;
    createdAt: string;
  };
  message: string;
}

interface UpdateProfileRequest {
  name?: string;
  email?: string;
}

interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export const studentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentDashboard: builder.query<DashboardResponse, void>({
      query: () => "/students/dashboard",
    }),

    getMyBatches: builder.query<MyBatchesResponse, void>({
      query: () => "/students/my-batches",
    }),

    getMyUpcomingClasses: builder.query<UpcomingClassesResponse, void>({
      query: () => "/students/my-live-classes",
    }),

    getMyPendingExams: builder.query<PendingExamsResponse, void>({
      query: () => "/students/my-exams",
    }),

    getMyResults: builder.query<MyResultsResponse, void>({
      query: () => "/students/my-results",
    }),

    getStudentProfile: builder.query<ProfileResponse, void>({
      query: () => "/students/profile",
      providesTags: ["User"],
    }),

    updateStudentProfile: builder.mutation<ProfileResponse, UpdateProfileRequest>({
      query: (body) => ({
        url: "/students/profile",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    changePassword: builder.mutation<{ statusCode: number; data: { message: string }; message: string }, ChangePasswordRequest>({
      query: (body) => ({
        url: "/students/change-password",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useGetStudentDashboardQuery,
  useGetMyBatchesQuery,
  useGetMyUpcomingClassesQuery,
  useGetMyPendingExamsQuery,
  useGetMyResultsQuery,
  useGetStudentProfileQuery,
  useUpdateStudentProfileMutation,
  useChangePasswordMutation,
} = studentApi;
