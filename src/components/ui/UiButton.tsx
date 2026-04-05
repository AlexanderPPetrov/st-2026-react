type Props = {
    title: string,
    onClick: () => void
}

export function UiButton({ title, onClick } : Props) {
    return <button onClick={onClick}>
        { title }
    </button>
}