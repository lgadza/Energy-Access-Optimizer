import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-500",
    secondary:
      "bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-500",
    outline:
      "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 focus:ring-cyan-500",
    ghost: "text-cyan-500 hover:bg-cyan-500/10 focus:ring-cyan-500",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-6 py-3",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        isLoading && "relative !text-transparent hover:!text-transparent",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 transition-transform duration-200",
          !isLoading && "group-hover:translate-x-1"
        )}
      >
        {leftIcon && (
          <span className="animate-in slide-in-from-left-1">{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className="animate-in slide-in-from-right-1">{rightIcon}</span>
        )}
      </span>

      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        </span>
      )}

      {variant === "primary" && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </button>
  );
};

export default Button;
