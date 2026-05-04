const LoadingState = ({
  title = "Loading...",
  description = "Please wait while we fetch your data.",
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark-elevated p-10 text-center">
      <div className="mx-auto mb-4 size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
      <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        {description}
      </p>
    </div>
  );
};

export default LoadingState;
