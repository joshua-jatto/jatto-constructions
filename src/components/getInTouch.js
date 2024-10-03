import { jsx as _jsx } from "react/jsx-runtime";
export const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;
export default function GetInTouch() {
    return (_jsx("button", { onClick: () => window.open(whatsappUrl, "_blank"), className: "mt-10 ring ring-white p-4 my-1/2 h-15 w-fit relative bottom-0 text-md font-semibold text-white  hover:text-green-400 hover:ring-green-600 hover:rounded transition duration-300", style: { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }, children: "| Open to work |" }));
}
;
