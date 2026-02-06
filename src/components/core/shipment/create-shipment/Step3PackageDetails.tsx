import React from "react";
import Select from "../../../shared/ui/select/Select";
import { SelectItem } from "@heroui/react";
import Input from "../../../shared/ui/input/Input";
import Textarea from "../../../shared/ui/textarea/Textarea";

interface Step3PackageDetailsProps {
  formData: {
    category: string;
    weight: string;
    value: string;
    description: string;
    photo: File | null;
  };
  onChange: (field: string, value: string | File | null) => void;
}

const Step3PackageDetails: React.FC<Step3PackageDetailsProps> = ({
  formData,
  onChange,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange("photo", file);
  };

  return (
    <section className="form-card bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-primary">
          inventory_2
        </span>
        <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
          Package Details
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Select
          label="Category"
          value={formData.category}
          onChange={(e) => onChange("category", e.target.value)}
          required
        >
          {[
            "Electronics",
            "Documents",
            "Clothing",
            "Fragile Items",
            "Other",
          ].map((item) => (
            <SelectItem key={item} textValue={item}>
              {item}
            </SelectItem>
          ))}
        </Select>
        <Input
          label="Weight (kg)"
          type="number"
          placeholder="0.00"
          value={formData.weight}
          onChange={(e) => onChange("weight", e.target.value)}
          required
        />
        <Input
          label="Value (₦)"
          type="number"
          placeholder="Declared value"
          value={formData.value}
          onChange={(e) => onChange("value", e.target.value)}
          required
        />
      </div>
      <div className="space-y-4">
        <Textarea
          label="Package Description"
          placeholder="Provide any special handling instructions or item details..."
          value={formData.description}
          onChange={(e) => onChange("description", e.target.value)}
        />
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
            Package Photo
          </label>
          <label className="border-2 border-dashed border-border-light dark:border-border-dark rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-card-dark-hover transition-colors cursor-pointer group">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="size-12 rounded-full bg-card-light dark:bg-card-dark shadow-sm flex items-center justify-center mb-3 text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-3xl">
                add_a_photo
              </span>
            </div>
            <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
              {formData.photo
                ? formData.photo.name
                : "Click to upload package photo"}
            </p>
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
              PNG, JPG up to 10MB
            </p>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Step3PackageDetails;
