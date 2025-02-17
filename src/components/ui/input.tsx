import * as React from "react";

import { cn } from "~/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <input
              id="username"
              name="username"
              type={type}
              {...props}
              ref={ref}
              className={cn("border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit", className)}
            />
            <label htmlFor="username" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">
              Name
            </label>
          </div>
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
