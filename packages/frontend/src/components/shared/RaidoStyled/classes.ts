import variables from "./variables";

const { titleColor, borderColors, bgColor } = variables;

const formatClasses = (className: string): string =>
  className.replace(/\s+/g, " ").trim();

const getClasses = (
  target: "title" | "label" | "input" | "error",
  {
    tagSize,
    disabled,
    error,
  }: {
    tagSize?: "xs" | "sm" | "md" | "lg" | "xl" | "custom";
    disabled?: boolean;
    error?: string;
  }
) => {
  const classes = {
    title: `mb-5
            block 
            w-full
            ${tagSize === "xs" ? "text-sm" : ""}
            ${tagSize === "sm" ? "text-md" : ""}
            ${tagSize === "md" ? "text-md" : ""}
            ${tagSize === "lg" ? "text-xl" : ""}
            ${tagSize === "xl" ? "text-2xl" : ""}
            ${error ? "text-rose-500" : titleColor}`,

    label: `${error ? "text-rose-500" : "text-body-primary"}
            ${tagSize === "xs" ? "text-xs" : ""}
            ${tagSize === "sm" ? "text-sm" : ""}
            ${tagSize === "md" ? "text-sm" : ""}
            ${tagSize === "lg" ? "text-lg" : ""}
            ${tagSize === "xl" ? "text-xl" : ""}`,

    input: `appearance-none
            relative
            rounded-full
            border
            checked:ring-1
            before:content-[''] 
            before:absolute 
            before:w-[calc(100%-6px)] 
            before:h-[calc(100%-6px)] 
            before:inset-0 
            before:rounded-full 
            before:m-auto 
            before:transition-colors
            before:duration-300
            before:ease-in-out
            ${tagSize === "xs" ? "w-1 h-1" : ""}
            ${tagSize === "sm" ? "w-3 h-3" : ""}
            ${tagSize === "md" ? "w-5 h-5" : ""}
            ${tagSize === "lg" ? "w-8 h-8" : ""}
            ${tagSize === "xl" ? "w-10 h-10" : ""}
            ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
            ${error ? "border-red-500  checked:ring-red-500" : borderColors}
            ${error ? "checked:before:bg-red-500" : bgColor}`,

    error: `text-rose-500 
            font-semibold
            ${tagSize === "xs" ? "text-xs" : ""}
            ${tagSize === "sm" ? "text-sm" : ""}
            ${tagSize === "md" ? "text-md" : ""}
            ${tagSize === "lg" ? "text-lg" : ""}
            ${tagSize === "xl" ? "text-xl" : ""}`,
  };
  return classes[target];
};

export default getClasses;
export { formatClasses };
