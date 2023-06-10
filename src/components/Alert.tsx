import cn from "classnames";

type AlertProps = {
  type: "info" | "error" | "success" | "warning";
  message: string;
  className?: string;
};

const Alert: React.FC<AlertProps> = ({ type, message, className }) => {
  const classNames = {
    info: "relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-blue-500 text-white flex",
    error:
      "relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-red-500 text-white flex",
    success:
      "relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-green-500 text-white flex",
    warning:
      "relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-amber-500 text-black flex",
  };

  return <div className={cn(classNames[type], className)}>{message}</div>;
};

export default Alert;
