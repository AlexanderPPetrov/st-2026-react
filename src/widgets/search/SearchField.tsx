import { UiButton, UiInput } from "../../components/ui"

type Props = {
    searchValue: string
    placeholder?: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchField(
    { 
        searchValue,
        setSearchValue,
        placeholder = "Search..."
    } : Props) {

    function clearButton() {
        setSearchValue("")
    }
    return (
        <div className="search-field flex gap-2 p-2 items-center">
            <UiInput 
                placeholder={placeholder} 
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />

            <UiButton onClick={clearButton} 
                      title={"Изчисти ме"}/>

        </div>
         
    )
}