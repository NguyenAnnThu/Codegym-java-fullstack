import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action.js";
import { toast } from "react-toastify";

function LoginComponent() {
    const userInfo = useSelector(state => state.user);

    const navigate = useNavigate();
    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const dispatch = useDispatch();

    const handleLogin = async () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        let isSuccess = dispatch(login(username, password));

        if (isSuccess) {
            navigate("/student");
            toast.success("Đăng nhập thành công");
        } else {
            toast.error("Đăng nhập không thành công");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-5">

                            <h2 className="text-center mb-4 text-primary">
                                Login
                            </h2>

                            {
                                userInfo != null && (
                                    <div className="alert alert-success text-center">
                                        Xin chào {userInfo.username}
                                    </div>
                                )
                            }

                            <form>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Username
                                    </label>

                                    <input
                                        ref={usernameRef}
                                        name="username"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập username"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        ref={passwordRef}
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Nhập password"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={handleLogin}
                                    className="btn btn-primary w-100"
                                >
                                    Đăng nhập
                                </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;