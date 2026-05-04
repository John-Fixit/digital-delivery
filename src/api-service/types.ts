/** Matches backend `ApiResponse.success` shape */
export type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
  errors?: { field: string; message: string }[];
};

export type AuthUser = {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  role: string;
  verification_status: string;
  created_at?: string;
};

export type LoginResponse = {
  token: string;
  user: AuthUser;
};

export type RegisterResponse = {
  user: AuthUser;
};

export type RegisterPayload = {
  full_name: string;
  email: string;
  phone: string;
  role: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};
