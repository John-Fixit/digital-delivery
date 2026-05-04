import Button from "../ui/button/Button";

const ErrorState = ({
  title = "Something went wrong",
  description = "We could not load this section. Try again.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) => {
  return (
    <div className="rounded-xl border border-danger/20 bg-danger-bg p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-danger">{title}</h3>
          <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            {description}
          </p>
        </div>
        {onRetry ? (
          <Button size="sm" variant="flat" color="primary" onPress={onRetry}>
            Retry
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default ErrorState;
