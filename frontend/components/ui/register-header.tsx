export default function RegisterHeader({ secondPage }: { secondPage?: boolean }){
    return(
        <div className="space-y-3 flex flex-col items-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 44V8C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4H32C33.0609 4 34.0783 4.42143 34.8284 5.17157C35.5786 5.92172 36 6.93913 36 8V44H12Z" stroke="#00C4B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 24H8C6.93913 24 5.92172 24.4214 5.17157 25.1716C4.42143 25.9217 4 26.9391 4 28V40C4 41.0609 4.42143 42.0783 5.17157 42.8284C5.92172 43.5786 6.93913 44 8 44H12" stroke="#00C4B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36 18H40C41.0609 18 42.0783 18.4214 42.8284 19.1716C43.5786 19.9217 44 20.9391 44 22V40C44 41.0609 43.5786 42.0783 42.8284 42.8284C42.0783 43.5786 41.0609 44 40 44H36" stroke="#00C4B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 12H28" stroke="#00C4B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 20H28" stroke="#00C4B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 28H28" stroke="#00C4B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 36H28" stroke="#00C4B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-2xl font-semibold">Join as an Office</h2>
            <p className="font-light text-gray-400">Complete your profile to get verified and start receiving patients</p>
            <div className="w-200 space-y-3">
                <div className="bg-theme-light rounded-full">
                    <div className={`${secondPage ? "w-full rounded-full" : "w-1/2 rounded-l-full"} bg-theme h-2`}></div>
                </div>
                <div className="flex items-center justify-between font-light text-sm">
                    <div className={`${secondPage ? "text-gray-400" : "text-theme"} flex items-center gap-1`}>
                        <span className={`h-5 w-5 flex items-center justify-center rounded-full border ${secondPage? "border-gray-300" : "border-theme"}`}>1</span>
                        Profile Completion
                    </div>
                    <div className={`${secondPage ? "text-theme" : "text-gray-400"} flex items-center gap-1`}>
                        <span className={`h-5 w-5 flex items-center justify-center rounded-full border ${secondPage ? "border-theme" : "border-gray-300"}`}>2</span>
                        Office Verification
                    </div>
                </div>
            </div>
        </div>
    )
}