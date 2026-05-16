import { useSelector } from "react-redux"
import type { RootState } from "../store"
import UserFavoriteIcon from "../widgets/users/UserFavoriteIcon"


function HomePage () {

    const favoriteUsers = useSelector((state: RootState) => state.users.favoriteUsers)
    
    return (
        <>
            {
                favoriteUsers.map((user) => {
                    return <div key={user.id} className="flex gap-3">
                        <UserFavoriteIcon user={user}/>
                         { user.email }
                    </div>
                })
            }
        </>
    )
}

export default HomePage