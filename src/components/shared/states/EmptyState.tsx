import Button from "../ui/button/Button";

const EmptyState = ({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) => {
  return (
    <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark-elevated p-10 text-center">
      <span className="material-symbols-outlined text-5xl text-primary/70">
        inventory_2
      </span>
      <h3 className="mt-4 text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-text-secondary-light dark:text-text-secondary-dark">
        {description}
      </p>
      {actionLabel && onAction ? (
        <div className="mt-6">
          <Button onPress={onAction}>{actionLabel}</Button>
        </div>
      ) : null}
    </div>
  );
};

export default EmptyState;
