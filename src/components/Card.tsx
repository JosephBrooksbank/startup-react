import {ReactNode} from "react";

export const Card = ({children}: {children: ReactNode}) => {
    return (
        <div className={"bg-gray-700 p-4 rounded-md shadow-md"}>
            {children}
        </div>
    )
}