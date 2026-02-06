import React from "react";

interface Step {
  title: string;
  icon: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  return (
    <div className="w-full py-6 px-4 sm:px-8 bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between relative">
          {/* Progress Line */}
          <div className="absolute left-0 right-0 top-6 h-0.5 bg-border-light dark:bg-border-dark hidden sm:block">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isClickable = onStepClick && index <= currentStep;

            return (
              <div
                key={index}
                className={`flex flex-col items-center z-10 flex-1 ${
                  isClickable ? "cursor-pointer" : ""
                }`}
                onClick={() => isClickable && onStepClick(index)}
              >
                {/* Step Circle */}
                <div
                  className={`size-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted || isCurrent
                      ? "bg-primary text-white"
                      : "bg-card-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark"
                  }`}
                >
                  {isCompleted ? (
                    <span className="material-symbols-outlined text-xl">
                      check
                    </span>
                  ) : (
                    <span className="material-symbols-outlined text-xl">
                      {step.icon}
                    </span>
                  )}
                </div>

                {/* Step Title */}
                <div className="mt-2 text-center">
                  <p
                    className={`text-xs sm:text-sm font-semibold transition-colors ${
                      isCurrent
                        ? "text-primary"
                        : isCompleted
                          ? "text-text-primary-light dark:text-text-primary-dark"
                          : "text-text-secondary-light dark:text-text-secondary-dark"
                    }`}
                  >
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mt-0.5 hidden sm:block">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
