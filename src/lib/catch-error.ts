import { AxiosError } from "axios";
import { errorToast } from "./notification-toast";

const catchErrFunc = (err: unknown) => {
  const error = err as AxiosError<{ message: string }>;
  const errMsg = error?.response?.data?.message || error?.message;
  errorToast(errMsg);
};
export default catchErrFunc;
