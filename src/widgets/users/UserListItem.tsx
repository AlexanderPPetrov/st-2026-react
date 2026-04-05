import type { User } from "../../api/services/user/types"

type Props = {
    user: User
}

export default function UserListItem({ user }: Props) {
    return (
        <div>
            {user.name} : {user.email}
        </div>
    )
}


