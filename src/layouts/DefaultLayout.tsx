
import { Outlet } from "react-router"
import HeaderNavigation from "../components/app/HeaderNavigation"
type Props = {
    header?: React.ReactNode
    sidebar?: React.ReactNode
}

function DefaultLayout({ header, sidebar }: Props) {
    
    return (
         <div className="min-h-screen p-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
            <div className="mb-4">{
             header ? header : <HeaderNavigation/>
            }</div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
                <Outlet></Outlet>
            </div>
            <div className="md:col-span-1">{sidebar}</div>
            </div>
        </div>
        </div>
    )
}

export default DefaultLayout