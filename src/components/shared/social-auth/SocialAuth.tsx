import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInButton, SignUpButton } from "@clerk/react";

/**
 * Clerk session (cookies + Clerk Frontend API) decides signed-in vs signed-out.
 * That is separate from the app JWT in localStorage — you can be signed in to
 * Clerk (userId set) while on the login page if a Clerk session still exists.
 */
const SocialAuth = () => {
  return (
    <>
      <div className="mb-8 grid grid-cols-2 gap-4">
        <SignInButton
          mode="modal"
          forceRedirectUrl="/auth/clerk-google-callback"
        >
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-[#ebe7f3] bg-white py-2.5 text-sm font-semibold text-[#120e1b] transition-colors hover:bg-gray-50 dark:border-[#2d2540] dark:bg-transparent dark:text-[rgb(249,248,252)] dark:hover:bg-white/5 cursor-pointer"
          >
            <FcGoogle size={20} />
            Google
          </button>
        </SignInButton>
        <button
          type="button"
          disabled
          className="flex items-center justify-center gap-2 rounded-lg border border-[#ebe7f3] bg-white py-2.5 text-sm font-semibold text-[#120e1b] opacity-60 transition-colors dark:border-[#2d2540] dark:bg-transparent dark:text-[#f9f8fc] cursor-pointer"
        >
          <FaApple size={20} />
          Apple (soon)
        </button>
      </div>
      <div className="mb-6 flex items-center justify-center gap-3 text-xs text-[#654d99] dark:text-[#a394c8]">
        <span>Need an account?</span>
        <SignUpButton mode="modal">
          <button
            type="button"
            className="font-semibold text-primary hover:underline"
          >
            Sign up
          </button>
        </SignUpButton>
      </div>
    </>
  );
};

export default SocialAuth;
