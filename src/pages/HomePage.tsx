import { useState } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import type { Maybe } from "../types"
import { useUsersQuery } from "../api/queries/useUsersQuery"
import UiButton from "../components/ui/UiButton"
import UiInput from "../components/ui/UiInput"
import UserList from "../widgets/users/UserList"

type Props = {
    name: Maybe<string>
    count: Maybe<number>
    setName: React.Dispatch<React.SetStateAction<string>>;
}

function HomePage ({ name, count, setName }: Props) {
    
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
           
            {getUsersList()}
            <div>{name}</div>
            <UiButton onClick={() => setName("Peter")} 
                      title={"Change Name"}/>

            <div>{count}</div>
            <DefaultLayout></DefaultLayout>
        </>
    )
}

export default HomePage