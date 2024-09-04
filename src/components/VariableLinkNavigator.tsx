import {Card} from "./Card";
import {Input} from "./Input";
import React, {useState} from "react";
import {VerticalList} from "./VerticalList";

interface VariableLinkNavigatorProps {
    label: string;
    prefix: string;
    baseUrl: string;
    className: string;
}

export const VariableLinkNavigator = ({label, prefix, className, baseUrl}: VariableLinkNavigatorProps) => {
    const [value, setValue] = useState(prefix);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handleSubmit = () => {
        window.location.href = (baseUrl + value);
    }

    const setCursorToEnd = (input: HTMLInputElement) => {
        input.selectionStart = input.selectionEnd = input.value.length;
    }
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setCursorToEnd(event.target);
    }
    const id = label+"-input";
    return (<Card className={`${className} transition-all duration-300 hover:translate-x-0.5 hover:-translate-y-0.5 has-[:focus]:translate-x-0.5 has-[:focus]:-translate-y-0.5`}>
            <VerticalList className={"m-0 gap-0 text-xl"}>
                <label className={"text-2xl"} htmlFor={id}>{label}</label>
                <Input id={id} placeholder={""} value={value} onChange={handleInputChange} autoComplete={label} onSubmit={handleSubmit} onFocus={handleFocus}/>
            </VerticalList>
        </Card>
    );
}