import { Link } from "react-router"

function HeaderNavigation() {
    return (
        <header className="bg-white p-4">
            <Link to="/" className="text-black px-2 py-2 rounded-lg font-medium mx-1">Home page</Link>
            <Link to="/users" className="text-black px-4 py-2 rounded-lg font-medium mx-1">Users</Link>
        </header>
    )
}

export default HeaderNavigation