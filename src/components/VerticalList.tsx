import { ReactNode } from "react";

export const VerticalList = ({children}: {children: ReactNode}) => {
    return (
        <div className={"flex flex-col gap-4 items-center justify-center"}>
            {children}
        </div>
    )
}