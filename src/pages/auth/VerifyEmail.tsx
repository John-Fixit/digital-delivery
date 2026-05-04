import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useVerifyEmail } from "../../api-service/auth/verify-email";
import { getApiErrorMessage } from "../../api-service/utils/error";
import { errorToast } from "../../lib/notification-toast";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { mutate, isPending, isSuccess, isError } = useVerifyEmail();
  const [message, setMessage] = useState("");
  const ran = useRef(false);

  useEffect(() => {
    if (!token) {
      errorToast("Missing verification token in the link.");
      return;
    }
    if (ran.current) return;
    ran.current = true;
    mutate(
      { token },
      {
        onSuccess: () =>
          setMessage("Your email is verified. You can sign in now."),
        onError: (err) => setMessage(getApiErrorMessage(err)),
      },
    );
  }, [token, mutate]);

  return (
    <div className="mx-auto max-w-md space-y-4 px-4 py-10 text-center">
      <h1 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
        Email verification
      </h1>
      {isPending ? (
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          Verifying…
        </p>
      ) : (
        <p
          className={`text-sm ${
            isSuccess
              ? "text-green-600 dark:text-green-400"
              : isError || !token
                ? "text-red-600 dark:text-red-400"
                : "text-text-secondary-light dark:text-text-secondary-dark"
          }`}
        >
          {message}
        </p>
      )}
      <Link
        to="/auth/login"
        className="inline-block text-sm font-semibold text-primary hover:underline"
      >
        Go to login
      </Link>
    </div>
  );
};

export default VerifyEmail;
