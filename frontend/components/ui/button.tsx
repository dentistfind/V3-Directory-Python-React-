export default function Button({ fill, text, className }: { fill?: boolean, text: React.ReactNode, className?: string }){
    return(
        <div className={`border border-theme cursor-pointer ${fill ? "bg-theme text-white hover:bg-white hover:text-theme" : "text-theme hover:bg-theme hover:text-white"} px-3 py-2 rounded-full ${className}`}>
            {text}
        </div>
    )
}