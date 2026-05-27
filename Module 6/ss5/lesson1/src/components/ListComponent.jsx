import {useEffect, useState} from "react";
import {getAllStudents, searchStudent} from "../service/studentService.jsx";
import {Link} from "react-router-dom";
import DeleteModal from "./DeleteModal.jsx";

const ListComponent = ({keyword}) => {
    const [students, setStudents] = useState([]);
    const [reloading, setReloading] = useState(false);

    const fetchStudents = async () => {
        let result;

        if (keyword && keyword.trim() !== "") {
            result = await searchStudent(keyword, null);
        } else {
            result = await getAllStudents();
        }
        setStudents(result);
    }

    useEffect(() => {
        fetchStudents();
    },[keyword,reloading]);

    const [deleteStudents, setDeleteStudents] = useState({
        id:"",
        name:"",
        gender:"",
        class:""
    });
    const [isDeleteModal, setIsDeleteModal] = useState(false);

    const closeModal = () => {
        setIsDeleteModal(false);
    }

    const handleDelete = (student) => {
        setIsDeleteModal(true);
        setDeleteStudents(student);
    }
    return (
        <>
            <h2>Danh sách sinh viên</h2>
            <Link to ={"/student/add"} className="add text-end me-3">Thêm mới </Link>
            <table className="table table-striped table-ligth  " >
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Lớp</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {students.map((student,i) =>
                <tr key={student.id}>
                    <td>{i+1}</td>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.gender ? "Nam" : "Nữ"}</td>
                    <td>{student.class.name}</td>
                    <td>
                        <div className="d-flex justify-content-end gap-2">
                            <div>
                                <button onClick={() => {
                                    handleDelete(student);
                                }} className="btn btn-sm btn-danger ">Xóa
                                </button>
                            </div>
                            <div>
                                <Link to={`/student/update/${student.id}`} className="btn btn-sm btn-primary me-4">Sửa</Link>
                            </div>
                        </div>
                    </td>
                </tr>)}
                </tbody>
            </table>
            <DeleteModal
                deleteStudent={deleteStudents}
                isShow={isDeleteModal}
                closeModal={closeModal}
                setReloading={setReloading}
            />
        </>
    )
}
export default ListComponent;