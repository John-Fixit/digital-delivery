import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialAuth = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="flex items-center justify-center gap-2 rounded-lg border border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-sm font-semibold text-[#120e1b] dark:text-[#f9f8fc] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
          <FcGoogle size={20} />
          Google
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg border border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-sm font-semibold text-[#120e1b] dark:text-[#f9f8fc] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
          <FaApple size={20} />
          Apple
        </button>
      </div>
    </>
  );
};

export default SocialAuth;
