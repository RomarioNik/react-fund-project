import { toast } from "react-toastify";

export const SingleColor = ({ color }) => {
  const { hex, weight } = color;

  const handleClick = () => {
    console.log("copied!");
    copyToClipboard(`#${hex}`);
  };

  const copyToClipboard = async (text) => {
    if (!navigator.clipboard) {
      toast.error("Clipboard access not available!");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      toast.success("Color copied!");
    } catch (error) {
      toast.error(`Fail to copy. The error is: ${error}`);
    }
  };

  return (
    <div
      className={`${color.type === "shade" ? "color color-light" : "color"}`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </div>
  );
};
