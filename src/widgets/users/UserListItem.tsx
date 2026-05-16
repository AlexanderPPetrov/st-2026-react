import type { User } from "../../api/services/user/types"
import { Link } from "react-router"
import UserFavoriteIcon from "./UserFavoriteIcon"

type Props = {
    user: User
}

export default function UserListItem({ user }: Props) {
    return (
        <div className="
            px-4 py-2
            border border-gray-300
            bg-white
            text-sm text-gray-800
            flex
            justify-between
            first:rounded-t-md
            last:rounded-b-md
            -mb-px
            hover:bg-gray-100

            transition-colors duration-150
        ">
            <div>
                {user.name} : {user.email}
            </div>
            <div className="flex gap-3">
                <UserFavoriteIcon user={user}/>
                <Link to={`/users/${user.id}`}>View Profile</Link>
            </div>
        </div>
    )
}


