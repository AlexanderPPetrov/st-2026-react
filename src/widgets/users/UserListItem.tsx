import type { User } from "../../api/services/user/types"

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

            first:rounded-t-md
            last:rounded-b-md
            -mb-px

            hover:bg-gray-100

            transition-colors duration-150
        ">
            {user.name} : {user.email}
        </div>
    )
}


