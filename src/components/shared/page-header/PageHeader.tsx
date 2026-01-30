import type { FC } from "react";
import type React from "react";

type PropTypes = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
};
const PageHeader: FC<PropTypes> = ({ title = "", description = "" }) => {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-slate-500 text-sm mt-1">{description}</p>
      </div>
    </>
  );
};

export default PageHeader;
