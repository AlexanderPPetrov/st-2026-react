import { useState } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import type { Maybe } from "../types"
import { useUsersQuery } from "../api/queries/useUsersQuery"

type Props = {
    name: Maybe<string>
    count: Maybe<number>
    setName: React.Dispatch<React.SetStateAction<string>>;
}

function HomePage ({ name, count, setName }: Props) {
    
    const { data, isLoading, error } = useUsersQuery()

    const [searchValue, setSearchValue] = useState<string>("")

    function getUsersList() {
        if(isLoading || error) {
            return null
        }
        
        return getFilteredList().map(({id, name}) => {
            return <div key={id}>{ name }</div>
        })
    }

    function getFilteredList() {
        if(!data) {
            return []
        }
        return data.filter(({name}) => {
            return name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })

    }

    function clearButton() {
        setSearchValue("")
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="Find by name"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />

            <button onClick={clearButton}>Изчисти ме</button>

            {getUsersList()}
            <div>{name}</div>
            <button onClick={() => setName("Peter")}>Change Name</button>
            <div>{count}</div>
            <DefaultLayout></DefaultLayout>
        </>
    )
}

export default HomePage