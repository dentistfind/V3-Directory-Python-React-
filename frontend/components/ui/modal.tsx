import React from "react"
import { IoMdClose } from "react-icons/io"

interface ModalProps {
    title: string,
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode,
    width?: number,
}

export default function Modal({ title, isOpen, onClose, children, width=720 }: ModalProps){
    if (!isOpen) return null

    return(
        <div
            className="z-20"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div style={{ width: `${width}px` }} className="w-180 max-h-screen rounded-xl m-auto bg-white space-y-5 flex flex-col">
                <div className="flex items-center justify-between border-b border-gray-300 p-5">
                    <h2 className="font-semibold">{title}</h2>
                    <div onClick={onClose} className="cursor-pointer text-xl"><IoMdClose /></div>
                </div>
                {children}
            </div>
        </div>
    )
}