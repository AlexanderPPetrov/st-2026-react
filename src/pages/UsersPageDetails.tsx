
import { useParams } from "react-router"


function UsersPageDetails () {
    const { id } = useParams()
    //TODO you can now fetch data for a specific user from his ID
    return (
        <>
            User Details {id}
        </>
    )
}

export default UsersPageDetails