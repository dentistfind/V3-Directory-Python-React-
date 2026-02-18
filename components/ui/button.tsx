export default function Button({ fill, text }: { fill?: boolean, text: React.ReactNode }){
    return(
        <div className={`border border-theme cursor-pointer ${fill ? "bg-theme text-white hover:bg-white hover:text-theme" : "text-theme hover:bg-theme hover:text-white"} px-3 py-2 rounded-full`}>
            {text}
        </div>
    )
}