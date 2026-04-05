import type { Maybe } from "../../types"
type Props = {
    type?: Maybe<string>
    placeholder?: Maybe<string>
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export function UiInput(
    {
        type = "text",
        placeholder = "", 
        value, 
        onChange
    } : Props) {
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}