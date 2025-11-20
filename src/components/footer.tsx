import { Info } from "lucide-react";
import A from "./better-elements/anchor";

export default function Footer() {
    return (
        <footer className="p-4 mt-8 flex flex-col justify-center items-center w-full gap-3">
            <div className="flex gap-6">
                <p>You can contact me on my <A href="mailto:vojtarazima@gmail.com" name="Email" /> or <A href="https://github.com/vojtiikxdd" name="GitHub" /></p>
            </div>
            <i className="text-xs flex items-center gap-2"> <Info size={18}/> this page is only a prototype and will be updated soon</i>
        </footer>
    );
}