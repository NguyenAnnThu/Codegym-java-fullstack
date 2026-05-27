import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../service/studentService.jsx";
import { getAllClass } from "../service/classService.jsx";
import { toast } from "react-toastify";

const UpdateComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [classes, setClasses] = useState([]);

    const [student, setStudent] = useState({
        id: "",
        name: "",
        gender: true,
        class: {
            id: "",
            name: ""
        }
    });

    // LOAD STUDENT
    useEffect(() => {
        const fetchData = async () => {
            const data = await getStudentById(id);

            setStudent({
                id: data.id,
                name: data.name || "",
                gender: data.gender,
                class: {
                    id: data.class?.id || "",
                    name: data.class?.name || ""
                }
            });
        };

        fetchData();
    }, [id]);

    // LOAD CLASS
    useEffect(() => {
        const fetchClass = async () => {
            const res = await getAllClass();
            setClasses(res);
        };

        fetchClass();
    }, []);

    // HANDLE CHANGE
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "classId") {
            const selectedClass = classes.find(c => c.id == value);

            setStudent((prev) => ({
                ...prev,
                class: {
                    id: value,
                    name: selectedClass?.name || ""
                }
            }));
        } else if (name === "gender") {
            setStudent((prev) => ({
                ...prev,
                gender: value === "true"
            }));
        } else {
            setStudent((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await updateStudent(student);

        if (result) {
            toast.success("Cập nhật thành công");

            setTimeout(() => {
                navigate("/student");
            }, 500);
        } else {
            toast.error("Cập nhật thất bại");
        }
    };

    return (
        <div className="container mt-3">
            <h2>Cập nhật sinh viên</h2>

            <form onSubmit={handleSubmit}>
                {/* NAME */}
                <div className="mb-3">
                    <label>Tên</label>
                    <input
                        className="form-control"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                    />
                </div>

                {/* GENDER */}
                <div className="mb-3">
                    <label>Giới tính</label>
                    <select
                        className="form-control"
                        name="gender"
                        value={student.gender}
                        onChange={handleChange}
                    >
                        <option value="true">Nam</option>
                        <option value="false">Nữ</option>
                    </select>
                </div>

                {/* CLASS */}
                <div className="mb-3">
                    <label>Lớp</label>
                    <select
                        className="form-control"
                        name="classId"
                        value={student.class.id}
                        onChange={handleChange}
                    >
                        <option value="">-- Chọn lớp --</option>
                        {classes.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button className="btn btn-primary">
                    Cập nhật
                </button>
            </form>
        </div>
    );
};

export default UpdateComponent;