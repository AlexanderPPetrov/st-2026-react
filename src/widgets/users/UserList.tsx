import type { Users } from "../../api/services/user/types"
import UserListItem from "./UserListItem"

type Props = {
    users: Users
}

export default function UserList({ users } : Props) {
    return (
        <div className="users-list">
            {
                users.map((user) => {
                    return <UserListItem key={user.id} user={user} />
                })
            }
        </div>
    )
}