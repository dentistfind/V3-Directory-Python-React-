
interface AvailableItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: "Software" | "Add-on" | "Premium";
}

interface Package {
  id: string;
  name: string;
  price: number;
  savings: number;
  includes: string[];
}

const typeColors: Record<AvailableItem["type"], string> = {
  Software: "bg-teal text-teal-foreground",
  "Add-on": "bg-teal text-teal-foreground",
  Premium: "bg-amber-500 text-white",
};

const availableItems: AvailableItem[] = [
  { id: "i1", name: "EHR Basic Lines", description: "Basic EHR system access", price: 299, type: "Software" },
  { id: "i2", name: "Patient Portal", description: "Patient portal integration", price: 150, type: "Add-on" },
  { id: "i3", name: "Telehealth Module", description: "Video consultation feature", price: 200, type: "Add-on" },
  { id: "i4", name: "Analytics Dashboard", description: "Advanced reporting tools", price: 100, type: "Premium" },
  { id: "i5", name: "Mobile App Access", description: "Mobile application access", price: 75, type: "Add-on" },
];

const packages: Package[] = [
  { id: "pk1", name: "Starter Package", price: 299, savings: 50, includes: ["EHR Basic License", "Patient Portal"] },
  { id: "pk2", name: "Professional Package", price: 599, savings: 100, includes: ["EHR Basic License", "Patient Portal", "Telehealth Module"] },
  { id: "pk3", name: "Enterprise Package", price: 799, savings: 225, includes: ["EHR Basic License", "Patient Portal", "Telehealth Module", "Analytics Dashboard", "Mobile App Access"] },
];

const DFPortalBillingsItems = () => {
  return (
<div className="space-y-6">

  <h2 className="text-lg sm:text-xl font-semibold">Items</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    {/* Available Items */}
    <div className="rounded-lg border border-gray-300 bg-card p-4 sm:p-5">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        <span>🛒</span> Available Items
      </h3>

      <div className="space-y-3">
        {availableItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-gray-100 p-3 rounded"
          >
            {/* Left */}
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">
                  {item.name}
                </span>

                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold ${typeColors[item.type]}`}
                >
                  {item.type}
                </span>
              </div>

              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>

            {/* Right */}
            <div className="text-sm font-semibold sm:text-right">
              ${item.price}
              <span className="block sm:inline text-xs text-muted-foreground font-normal sm:ml-1">
                per month
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Package Details */}
    <div className="rounded-lg border border-gray-300 bg-card p-4 sm:p-5">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        <span>📦</span> Package Details
      </h3>

      <div className="space-y-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-lg p-4 bg-theme-light space-y-2"
          >
            {/* Top */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="text-sm font-semibold">
                {pkg.name}
              </span>

              <div className="sm:text-right">
                <span className="text-base font-bold">
                  ${pkg.price}
                </span>
                <p className="text-[10px] text-theme font-medium">
                  Save ${pkg.savings}
                </p>
              </div>
            </div>

            {/* Includes */}
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Includes:
              </p>

              <ul className="space-y-1">
                {pkg.includes.map((inc) => (
                  <li
                    key={inc}
                    className="text-xs text-muted-foreground"
                  >
                    › {inc}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  );
};

export default DFPortalBillingsItems;
