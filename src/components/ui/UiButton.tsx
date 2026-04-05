type Props = {
    title: string,
    onClick: () => void
}

export function UiButton({ title, onClick } : Props) {
    return <button onClick={onClick} 
        className="
            inline-flex items-center justify-center
            px-4 py-2
            text-sm font-medium text-white

            bg-green-500
            border border-green-500
            rounded-md
            shadow-sm

            hover:bg-green-600
            hover:border-green-600

            focus:outline-none
            focus:ring-2
            focus:ring-offset-1
            focus:ring-green-400

            active:bg-green-700

            disabled:opacity-50
            disabled:cursor-not-allowed

            transition-colors duration-150
            whitespace-nowrap
            cursor-pointer
        
        "
    
    >
        { title }
    </button>
}