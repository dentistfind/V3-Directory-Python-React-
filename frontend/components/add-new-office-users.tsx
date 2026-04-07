import { useState } from "react";
import Button from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";
import { DFPortalUser } from "@/lib/interface";
import { dummyPortalUserAdmins, dummyPortalUsers } from "@/lib/temp-data";
    
const UserTable = ({ title, users, onToggleCall, onToggleEmail, onDelete, onAdd }: { title: string; users: DFPortalUser[]; onToggleCall: (id: string) => void; onToggleEmail: (id: string) => void; onDelete: (id: string) => void; onAdd: () => void }) => (
  <div className="rounded-lg border border-gray-300 bg-card p-6 ">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div onClick={onAdd}>
        <div className="flex items-center gap-2 border border-theme cursor-pointer text-white bg-theme px-3 py-2 rounded-md text-sm">
            <Plus className="h-4 w-4" />
            <div>Add {title.split(" ")[1]}</div>
        </div>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-2 text-xs font-medium uppercase">Name</th>
            <th className="text-left py-3 px-2 text-xs font-medium uppercase">Receive/Make Call</th>
            <th className="text-left py-3 px-2 text-xs font-medium uppercase">Receive/Stop Email Notification</th>
            <th className="text-left py-3 px-2 text-xs font-medium uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-border last:border-0">
              <td className="py-3 px-2 text-sm">{user.name}</td>
              <td className="py-3 px-2">
                <Switch checked={user.receiveCall} onCheckedChange={() => onToggleCall(user.id)} />
              </td>
              <td className="py-3 px-2">
                <Switch checked={user.emailNotification} onCheckedChange={() => onToggleEmail(user.id)} />
              </td>
              <td className="py-3 px-2">
                <button onClick={() => onDelete(user.id)} className="text-red-500 hover:text-destructive/80 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const AddNewDFPortalOfficeUsers = () => {
  const [admins, setAdmins] = useState<DFPortalUser[]>(dummyPortalUserAdmins);
  const [users, setUsers] = useState<DFPortalUser[]>(dummyPortalUsers);

  const toggleField = (
    list: DFPortalUser[],
    setList: React.Dispatch<React.SetStateAction<DFPortalUser[]>>,
    id: string,
    field: "receiveCall" | "emailNotification"
  ) => {
    setList(list.map((u) => (u.id === id ? { ...u, [field]: !u[field] } : u)));
  };

  const deleteUser = (list: DFPortalUser[], setList: React.Dispatch<React.SetStateAction<DFPortalUser[]>>, id: string) => {
    setList(list.filter((u) => u.id !== id));
  };

  return (
    <div className="space-y-6">
      <UserTable
        title="Office Admin"
        users={admins}
        onToggleCall={(id) => toggleField(admins, setAdmins, id, "receiveCall")}
        onToggleEmail={(id) => toggleField(admins, setAdmins, id, "emailNotification")}
        onDelete={(id) => deleteUser(admins, setAdmins, id)}
        onAdd={() => {}}
      />
      <UserTable
        title="Office User"
        users={users}
        onToggleCall={(id) => toggleField(users, setUsers, id, "receiveCall")}
        onToggleEmail={(id) => toggleField(users, setUsers, id, "emailNotification")}
        onDelete={(id) => deleteUser(users, setUsers, id)}
        onAdd={() => {}}
      />
    </div>
  );
};

export default AddNewDFPortalOfficeUsers;