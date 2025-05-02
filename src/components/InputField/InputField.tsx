// components/InputField.tsx
"use client";

import { forwardRef } from "react";
import clsx from "clsx";
import type { InputFieldProps } from "@/utils/interfaces/input-field-props";

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
  (props, ref) => {
    const {
      label,
      error,
      observation,
      as = "input",
      className,
      id,
      name,
      ...rest
    } = props;

    const inputId = id || name;

    return (
      <div className="flex flex-col gap-2 mb-5">
        <div className="flex items-end">
          <label htmlFor={inputId} className="text-white font-semibold text-[16px]">
            {label}
          </label>
          {observation && (
            <p className="text-[14px] ml-5 text-white font-normal">{observation}</p>
          )}
        </div>

        {as === "textarea" ? (
          <textarea
            id={inputId}
            name={name}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={clsx(
              "px-7 py-3 rounded-[20px] border border-[#D3E2E5] bg-[#F5F8FA] text-[18px] text-black focus:outline-none focus:ring-1 focus:ring-blue-400  resize-y",
              error && "border-red-500",
              className
            )}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={inputId}
            name={name}
            ref={ref as React.Ref<HTMLInputElement>}
            className={clsx(
              "px-7 rounded-[20px] border border-[#D3E2E5] bg-[#F5F8FA] h-16 text-[18px] text-black focus:outline-none focus:ring-1 focus:ring-blue-400",
              error && "border-red-500",
              className
            )}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
