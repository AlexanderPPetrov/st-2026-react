import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/user/users.service";

export function useUsersQuery() {
    return useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })
}
