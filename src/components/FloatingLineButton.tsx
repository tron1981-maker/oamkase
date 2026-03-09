import { MessageCircle } from "lucide-react";

const FloatingLineButton = () => {
  return (
    <a
      href="https://line.me/R/"
      target="_blank"
      rel="noopener noreferrer"
      className="line-float-btn"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Reserve via LINE OA</span>
      <span className="sm:hidden">LINE</span>
    </a>
  );
};

export default FloatingLineButton;
