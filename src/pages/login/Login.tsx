import LoginForm from "../../components/core/login/LoginForm";
import SocialAuth from "../../components/shared/social-auth/SocialAuth";
import TrustFooter from "../../components/shared/trust-footer/TrustFooter";

const Login = () => {
  return (
    <>
      {/* <!-- Social Auth --> */}
      <SocialAuth />
      <div className="relative mb-8">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#ebe7f3] dark:border-[#2d2540]"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background-light dark:bg-background-dark px-2 text-[#654d99] dark:text-[#a394c8]">
            Or continue with email
          </span>
        </div>
      </div>
      {/* <!-- Form --> */}
      <LoginForm />
      {/* <!-- Trust Footer --> */}
      <TrustFooter />
    </>
  );
};

export default Login;
