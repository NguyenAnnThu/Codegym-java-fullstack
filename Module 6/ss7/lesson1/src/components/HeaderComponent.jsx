

import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/action.js";
import { Link, NavLink } from "react-router-dom";

const HeaderComponent = ({ keyword, setKeyword })=>{
    const account=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const handleLogout =()=>{
        dispatch(logout());
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" >StudyBase</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/student">Danh sách sinh viên</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control w-100 me-3"
                                type="search"
                                placeholder="Tìm sinh viên..."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </form>
                        <div>
                            <div className="nav-item ms-3">
                                {(account==null)?(<NavLink className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`}
                                                           to="/login">Login</NavLink>):('') }
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active-link" : ""}`
                                    }
                                    to="/info"
                                >
                                    {account ? account.username : ""}
                                </NavLink>

                                {(account !== null) && (
                                    <NavLink
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active-link" : ""}`
                                        }
                                        to="/"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </NavLink>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default HeaderComponent;

