const SocialAuth = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="flex items-center justify-center gap-2 rounded-lg border border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-sm font-semibold text-[#120e1b] dark:text-[#f9f8fc] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <img
            alt="Google"
            className="size-4"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfQPajakxBZWAdHbS3HrN5hJMdjLbl-4QjFM472smbhFjEPPrY-3-XtYdCYqfAvO0hl0ADSPCYCyvBDXYUAv-XQEXdFVc5nCorITZfOq_dhyY_7GfPkTDgMHf-NNc9m_f7PqteTM1Bu__lRYRLwr3AGm4zfHq1YV1gGjIk8izDvLnPl68ScrGNYV_cysvlcKpXBE6By12Il2bF1BLorOyaWoGkOaqMD1Ll0f0skNRoyoJWlzBnL8v5IZ1bHy5sjnb-p_xv2ps5cUI"
          />
          Google
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg border border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-sm font-semibold text-[#120e1b] dark:text-[#f9f8fc] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-base">ios</span>
          Apple
        </button>
      </div>
    </>
  );
};

export default SocialAuth;
