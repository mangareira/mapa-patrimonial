import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export type InputFieldProps =
  | ({
      as?: "input";
      label: string;
      error?: string;
      observation?: string;
    } & InputHTMLAttributes<HTMLInputElement>)
  | ({
      as: "textarea";
      label: string;
      error?: string;
      observation?: string;
    } & TextareaHTMLAttributes<HTMLTextAreaElement>);
