import { useState, useEffect } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import type { Maybe, Users } from "../types"

type Props = {
    name: Maybe<string>
    count: Maybe<number>
    setName: React.Dispatch<React.SetStateAction<string>>;
}

function HomePage ({ name, count, setName }: Props) {
    
    const [users, setUsers] = useState<Users>([])
    const [searchValue, setSearchValue] = useState<string>("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setUsers(json))
    },[])


    function getUsersList() {
        return getFilteredList().map(({id, name}) => {
            return <div key={id}>{ name }</div>
        })
    }

    function getFilteredList() {
        return users.filter(({name}) => {
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