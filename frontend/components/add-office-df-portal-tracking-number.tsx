import { useState } from "react";
import Button from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { dummyPortalTrackingNumberData } from "@/lib/temp-data"
import { TrackingNumber } from "@/lib/interface";
import AddTrackingNumberModal from "./add-tracking-number-modal";


const AddOfficeDFPortalTrackingNumber = () => {
    const [trackingNumbers, setTrackingNumbers] = useState<TrackingNumber[]>(dummyPortalTrackingNumberData);
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    const handleDelete = (id: string) => {
        setTrackingNumbers((prev) => prev.filter((t) => t.id !== id));
    };

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Office Admin</h3>
        <div onClick={() => setModalIsOpen(true)} className="border border-theme cursor-pointer text-white bg-theme px-3 py-2 rounded-md text-sm flex items-center gap-2">
            <Plus className="h-4 w-4" /><div>Add Tracking Number</div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border *:text-gray-500">
              <th className="text-left py-3 px-2 text-xs font-medium uppercase tracking-wider">S.No</th>
              <th className="text-left py-3 px-2 text-xs font-medium uppercase tracking-wider">Tracking Number</th>
              <th className="text-left py-3 px-2 text-xs font-medium uppercase tracking-wider">Title</th>
              <th className="text-left py-3 px-2 text-xs font-medium uppercase tracking-wider">Destination Number</th>
              <th className="text-left py-3 px-2 text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trackingNumbers.map((tn) => (
              <tr key={tn.id} className="border-b border-border last:border-0">
                <td className="py-3 px-2 text-sm">{tn.sno}</td>
                <td className="py-3 px-2 text-sm">{tn.trackingNumber}</td>
                <td className="py-3 px-2 text-sm">{tn.title}</td>
                <td className="py-3 px-2 text-sm">{tn.destinationNumber}</td>
                <td className="py-3 px-2 flex gap-2">
                  <button className="text-gray-500 hover:text-black transition-colors">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleDelete(tn.id)} className="text-red-400 hover:text-destructive/80 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <AddTrackingNumberModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </div>
  );
};

export default AddOfficeDFPortalTrackingNumber;
