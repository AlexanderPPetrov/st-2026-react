import HeaderNavigationLink from "./HeaderNavigationLink"

function HeaderNavigation() {
    return (
        <header className="bg-white p-4">
            <HeaderNavigationLink to="/" title="Home Page" />
            <HeaderNavigationLink to="/users" title="Users" />
        </header>
    )
}

export default HeaderNavigation