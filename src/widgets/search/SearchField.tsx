import { useState } from "react"
import { UiButton, UiInput } from "../../components/ui"

export default function SearchField() {

    const [searchValue, setSearchValue] = useState<string>("")

    function clearButton() {
        setSearchValue("")
    }
    return (
        <div className="search-field">
            <UiInput 
                placeholder="Find by name" 
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />

            <UiButton onClick={clearButton} 
                      title={"Изчисти ме"}/>

        </div>
         
    )
}