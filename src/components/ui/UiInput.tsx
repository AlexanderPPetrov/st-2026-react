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
            className="
                w-full
                px-3 py-2
                text-sm
                text-gray-900
                bg-white
                border border-gray-300
                rounded-md
                shadow-sm
                placeholder-gray-400

                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500

                disabled:bg-gray-100
                disabled:text-gray-500
                disabled:cursor-not-allowed
            "
        />
    )
}