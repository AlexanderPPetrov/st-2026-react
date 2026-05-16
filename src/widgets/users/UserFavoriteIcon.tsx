import { UserStar } from 'lucide-react';
import type { User } from '../../api/services/user/types';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { toggleFavoriteUser } from '../../store/slices/UsersSlice';

type Props = {
    user: User
}

export default function UserFavoriteIcon({ user }: Props) {

    const dispatch = useDispatch()
    const favoriteUsers = useSelector((state: RootState) => state.users.favoriteUsers)


    function isInFavorites() {
        return favoriteUsers.some(({ id }) => id === user.id) 
    }

    function onStarClick () {
        dispatch(toggleFavoriteUser(user))
    }

    return (
        <UserStar 
            size="18" 
            className="cursor-pointer"
            onClick={onStarClick} 
            color={isInFavorites() ? "#ee9700ff" : "#000000" }></UserStar>
    )
}

