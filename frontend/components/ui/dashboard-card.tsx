import { DashboardCardProp } from "@/lib/interface";

export default function DashboardCard({ title, content, icon }: DashboardCardProp){
    return(
        <div className="rounded-lg w-72 h-32 border border-theme p-5 flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="font-medium">{title}</div>
                <div className="text-theme text-xl">{icon}</div>
            </div>
            <h2 className="font-semibold text-xl">{content}</h2>
        </div>
    )
}