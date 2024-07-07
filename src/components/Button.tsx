import { twMerge } from "tailwind-merge";

export default function Button({children, className, ...rest}: {children: React.ReactNode, className?: string} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={
      twMerge(
        "bg-purple-500 text-white rounded-md px-4 py-2 w-fit hover:bg-purple-600 cursor-pointer", className)}
      {...rest}
      >
      {children}
    </button>
  );
}