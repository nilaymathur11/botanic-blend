import Logo from '../images/Logo.svg'
import Search from '../images/search-normal.svg'
import User from '../images/user.svg'
import Bag from '../images/bag.svg'

export function Navbar() {
    return (
        <>
            <div className='top_nav d-none d-lg-block'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between px-5 align-items-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">blog</a>
                                </li>
                            </ul>
                            <a className="navbar-brand m-0" href="#"><img src={Logo} alt="" /></a>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#"><img src={Search} alt="" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><img src={User} alt="" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><img src={Bag} alt="" /></a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" href="#">Log In</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='mob_nav top_nav d-flex justify-content-between align-items-center d-lg-none px-3'>
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-absolute bg-white mob_navbar" id="navbarNav">
                        <ul className="navbar-nav py-4">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">about</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">blog</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <img src={Bag} alt="" />
                </div>
            </div>
        </>
    )
}