import SearchField from "../widgets/search/SearchField";
import UserList from "../widgets/users/UserList";
import { useUsersQuery } from "../api/queries/useUsersQuery";
import { useState } from "react";

export default function SearchUsers() {

    const [searchValue, setSearchValue] = useState("")
    const { data, isLoading, error } = useUsersQuery()

    function getUsersList() {
        if(isLoading || error) {
            return null
        }
        
        return <UserList users={getFilteredList()}/>
    }

    function getFilteredList() {
        if(!data) {
            return []
        }
        return data.filter(({name}) => {
            return name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })
    }

    return (
        <>
            <SearchField searchValue={searchValue} 
                         setSearchValue={setSearchValue}/>
            { getUsersList() }
        </>
    )
}