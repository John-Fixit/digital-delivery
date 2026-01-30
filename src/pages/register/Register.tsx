import RegisterForm from "../../components/core/register/RegisterForm";
import SocialAuth from "../../components/shared/social-auth/SocialAuth";

const Register = () => {
  return (
    <>
      <RegisterForm />
      <div className="relative my-8">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#ebe7f3] dark:border-[#2d2540]"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background-light dark:bg-background-dark px-2 text-[#654d99] dark:text-[#a394c8]">
            Or sign up with
          </span>
        </div>
      </div>
      <SocialAuth />
    </>
  );
};

export default Register;
