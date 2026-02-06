const ContactSupportSection = () => {
  return (
    <>
      <div className="mt-12 p-8 rounded-xl bg-linear-to-r from-primary/10 to-transparent border border-primary/10 flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 bg-white dark:bg-white/10 rounded-full shadow-sm">
          <span className="material-symbols-outlined text-primary text-4xl">
            contact_support
          </span>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-bold text-[#120e1b] dark:text-primary">
            Need help with a transaction?
          </h4>
          <p className="text-[#654d99] text-sm">
            Our 24/7 support team is here to assist you with any disputes or
            payment delays.
          </p>
        </div>
        <button className="bg-white dark:bg-card-dark border border-[#d7d0e7] dark:border-border-dark text-[#120e1b] dark:text-default-500 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-background-light dark:hover:bg-background-dark transition-all whitespace-nowrap cursor-pointer">
          Contact Support
        </button>
      </div>
    </>
  );
};

export default ContactSupportSection;
