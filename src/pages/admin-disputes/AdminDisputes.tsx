import { useState } from "react";
import PageHeader from "../../components/shared/page-header/PageHeader";
import Button from "../../components/shared/ui/button/Button";
import Textarea from "../../components/shared/ui/textarea/Textarea";
import { useAdminDisputes, useResolveDispute } from "../../api-service/admin/admin";
import { successToast, errorToast } from "../../lib/notification-toast";
import { getApiErrorMessage } from "../../api-service/utils/error";

const statusColor: Record<string, string> = {
  open: "bg-warning/10 text-warning",
  under_review: "bg-info/10 text-info",
  resolved: "bg-success/10 text-success",
  rejected: "bg-danger/10 text-danger",
};

const AdminDisputes = () => {
  const { data, isLoading } = useAdminDisputes();
  const resolve = useResolveDispute();
  const [notes, setNotes] = useState<Record<string, string>>({});

  const act = async (disputeId: string, status: "under_review" | "resolved" | "rejected") => {
    try {
      await resolve.mutateAsync({ disputeId, status, adminNote: notes[disputeId] });
      successToast("Dispute updated.");
    } catch (err) {
      errorToast(getApiErrorMessage(err, "Could not update this dispute."));
    }
  };

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader title="Disputes" description="Review and resolve reported issues." />

      {isLoading ? (
        <p className="text-slate-500 text-sm">Loading…</p>
      ) : data && data.length > 0 ? (
        <div className="space-y-4">
          {data.map((d) => (
            <div
              key={d.id}
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                  {d.trackingCode}
                </span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full capitalize ${statusColor[d.status]}`}
                >
                  {d.status.replace("_", " ")}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{d.reason}</p>
              {d.adminNote ? (
                <p className="text-xs text-slate-500 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                  Admin note: {d.adminNote}
                </p>
              ) : null}

              {d.status !== "resolved" && d.status !== "rejected" ? (
                <div className="space-y-3 pt-2 border-t border-border-light dark:border-border-dark">
                  <Textarea
                    label="Resolution note (optional)"
                    value={notes[d.id] || ""}
                    onChange={(e) => setNotes((n) => ({ ...n, [d.id]: e.target.value }))}
                  />
                  <div className="flex flex-wrap gap-2">
                    {d.status === "open" ? (
                      <Button
                        size="sm"
                        variant="bordered"
                        onPress={() => act(d.id, "under_review")}
                        isLoading={resolve.isPending}
                      >
                        Move to under review
                      </Button>
                    ) : null}
                    <Button
                      size="sm"
                      onPress={() => act(d.id, "resolved")}
                      isLoading={resolve.isPending}
                    >
                      Mark resolved
                    </Button>
                    <Button
                      size="sm"
                      variant="bordered"
                      color="danger"
                      onPress={() => act(d.id, "rejected")}
                      isLoading={resolve.isPending}
                    >
                      Reject
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 text-sm">No disputes reported.</p>
      )}
    </div>
  );
};

export default AdminDisputes;
