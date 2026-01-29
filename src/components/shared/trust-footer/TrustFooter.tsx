const TrustFooter = () => {
  return (
    <>
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0ecf9] dark:bg-primary/10 border border-primary/10">
          <span className="material-symbols-outlined text-[16px] text-primary">
            shield
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            AES-256 Encrypted &amp; Secure Escrow
          </span>
        </div>
        <p className="mt-6 text-xs text-[#654d99] dark:text-[#a394c8] max-w-xs mx-auto">
          Your transactions are protected by our Escrow-Shield technology. By
          continuing, you agree to our Terms of Service.
        </p>
      </div>
    </>
  );
};

export default TrustFooter;
