import {useEffect, useState} from "react";
import DeleteModal from "./DeleteModal.jsx"
import AddModal from "./AddModal.jsx"
import {getAll} from "../service/data.js";

const ListComponent = () => {
    const [deleteStudent, setDeleteStudent] = useState({
        id: "",
        name: "",
        age: "",
        className: ""
    });
    // const [addStudent, setAddStudent] = useState({
    //     id: "",
    //     name: "",
    //     age: "",
    //     className: ""
    // })
    const [students, setStudents] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [reloading, setReloading] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false);
    useEffect(() => {
        setStudents([...getAll()]);
    },[reloading]);

    //Modal Delete
    const closeModal = () => {
        setIsShowModal(false);
    }

    const handleOpenModal = (student) => {
        setIsShowModal(true);
        setDeleteStudent(student)
    }

    //Modal Add
    const handleOpenAdd = () => {
        setIsAddModal(true);
    }
    const CloseModalAdd = () => {
        setIsAddModal(false);
    }
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>List of students</h2>
                    <button className="btn btn-primary"
                            onClick={()=>{
                                handleOpenAdd();
                            }}
                            >Add new student</button>
                </div>
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Class Name</th>
                        <th>Button</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.className}</td>
                            <td>
                                <button onClick={()=>{
                                    handleOpenModal(student);
                                }} className={"btn btn-sm btn-danger"}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteModal deleteStudent={deleteStudent}
                            isShowModal={isShowModal}
                            closeModal={closeModal}
                            setReloading={setReloading}
                />
                <AddModal
                          isAddModal={isAddModal}
                          closeModal={CloseModalAdd}
                          setReloading={setReloading}
                />
            </div>
        </>
    );
}
export default ListComponent;