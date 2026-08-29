import { Link } from "react-router-dom";
import type { RiderProfileType } from "../../../api-service/riders/riders";

/**
 * Renders a blocking message on Jobs/Active/Earnings pages when the caller
 * hasn't applied yet or isn't approved. Returns null once approved, so
 * callers can render their real content right after this.
 */
const RiderVerificationGate = ({
  rider,
  isLoading,
}: {
  rider: RiderProfileType | null | undefined;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <div className="p-8 text-slate-500 text-sm">Loading…</div>;
  }

  if (!rider) {
    return (
      <div className="p-8 max-w-xl mx-auto text-center space-y-3">
        <p className="text-lg font-bold">You haven't applied as a rider yet</p>
        <p className="text-slate-500 text-sm">
          Head to your dashboard to submit a rider application first.
        </p>
        <Link to="/rider" className="text-primary font-bold text-sm hover:underline">
          Go to Dashboard
        </Link>
      </div>
    );
  }

  if (rider.verificationStatus !== "approved") {
    return (
      <div className="p-8 max-w-xl mx-auto text-center space-y-3">
        <p className="text-lg font-bold">
          {rider.verificationStatus === "rejected"
            ? "Your rider application was not approved"
            : "Your rider application is pending verification"}
        </p>
        <p className="text-slate-500 text-sm">
          {rider.verificationStatus === "rejected"
            ? "Contact support if you think this was a mistake."
            : "This usually takes a short while. Check back soon."}
        </p>
      </div>
    );
  }

  return null;
};

export default RiderVerificationGate;
