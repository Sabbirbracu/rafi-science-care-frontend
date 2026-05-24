import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

// Load persisted state from localStorage
function loadPersistedState(): AuthState {
  if (typeof window === "undefined") {
    return { user: null, accessToken: null, isAuthenticated: false };
  }
  try {
    const stored = localStorage.getItem("auth");
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        user: parsed.user || null,
        accessToken: parsed.accessToken || null,
        isAuthenticated: !!parsed.accessToken,
      };
    }
  } catch {
    // ignore parse errors
  }
  return { user: null, accessToken: null, isAuthenticated: false };
}

const initialState: AuthState = loadPersistedState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; accessToken: string }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      // Persist to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            user: action.payload.user,
            accessToken: action.payload.accessToken,
          })
        );
      }
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth");
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
