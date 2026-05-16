import { NavLink } from "react-router"

type Props = {
    to: string,
    title: string,
}

function HeaderNavigationLink( { to, title } : Props ) {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
            isActive 
                ? "text-black px-2 py-2 rounded-lg font-medium mx-1" 
                : "text-black px-2 py-2 rounded-lg mx-1"
        }>
            {title}
        </NavLink>

    )
}

export default HeaderNavigationLink