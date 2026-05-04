import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-6">
      <div className="max-w-lg w-full rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark-elevated p-8 text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
          The page you are looking for does not exist yet. Return to your
          dashboard to continue.
        </p>
        <Link
          to="/home"
          className="mt-6 inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
