import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <>
            <nav className="navbar bg-dark border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand m-5" to={'/reservations'}>Home <i className="fa-solid fa-hotel"></i></Link>
                    <Link className="navbar-brand" to={'/reservation-form'}>Create Reservation <i className="fa-solid fa-plus"></i></Link>
                </div>
            </nav>
        </>
    )
}
