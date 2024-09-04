import {ReactNode} from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}
export const Card = ({children, className}: CardProps) => {
    console.log( className)
    return (
        <div className={"bg-gray-600 rounded-md"}>
            <div className={"p-4 rounded-md shadow-lg " + className ?? " bg-gray-600"}>
                {children}
            </div>
        </div>
    )
}