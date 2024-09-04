import React from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onSubmit"> {
    width?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
export const Input = ({width, onSubmit, className, ...props}: InputProps) => {
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit?.(e);
    }

    className = (className) + ` p-1 bg-gray-900 rounded-md ${width ?? ""}`;
    return (
        <form onSubmit={onFormSubmit}>
            <input
                {...props}
                className={className}
            />
        </form>
    )
}