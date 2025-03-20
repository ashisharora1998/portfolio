import { Button } from "@/components/ui/button";
import { Moon, Home } from "lucide-react";
import windows from "../windows.png";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { useNavigate } from "react-router-dom";

export default function TerminalBar({page}:{page:string}) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 px-3 py-2 rounded-2xl shadow-md border w-full overflow-hidden relative">
      <BorderBeam duration={8} size={1000} />

      <div className="flex items-center space-x-2 ">
        <WindowsIcon />
        <ChevronRight />
        <Home onClick={() => navigate("/")} className="w-5 h-5 text-gray-900 dark:text-gray-900 cursor-pointer" />
        <ChevronRight />
        <span className="text-gray-900 dark:text-gray-900">~/</span>
       <TypingAnimation className="text-gray-900 text-sm font-bold">{page}</TypingAnimation>
        <span className="blink text-gray-900 font-bold text-sm">|</span>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
        <Button variant="ghost" className="!bg-inherit" size="sm" onClick={() => navigate("/about")}>
          About
        </Button>
        <Button variant="ghost" className="!bg-inherit" size="sm" onClick={() => navigate("/uses")}>
          Uses
        </Button>
        {/* <Button variant="ghost" className="!bg-inherit" size="icon">
          <Moon className="w-5 h-5" />
        </Button> */}
      </div>
     

    </div>
  );
}

// Additional icons
function WindowsIcon() {
  return (
    <div className="w-5 h-5 rounded-sm flex items-center justify-center">
      <span className="text-white text-xs font-bold"><img src={windows} alt="windows" className="w-5 h-5" /></span>
    </div>
  );
}

function ChevronRight() {
  return <span className="text-gray-900 dark:text-gray-900">&gt;</span>;
}
