import { ReactNode } from "react";

export const VerticalList = ({children, className}: {children: ReactNode, className?: string}) => {
    return (
        <div className={"flex flex-col gap-4 items-center justify-center " + className}>
            {children}
        </div>
    )
}