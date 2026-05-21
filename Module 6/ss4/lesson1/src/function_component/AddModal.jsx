import { Modal, Button } from "react-bootstrap";
import {addNewStudent} from "../service/data.js";
import React, {useState} from "react";

const AddModal = ({
                      isAddModal,
                      closeModal,
                      setReloading
                  }) => {
    const [inforStudent, setInforStudent] = useState({
        id:"",
        name: "",
        age:"",
        className:""
    });

    const handleAdd = () => {
        addNewStudent(inforStudent);

        closeModal();
        setInforStudent({
            id:"",
            name: "",
            age: "",
            className:""
        })
        setReloading(prev => !prev);

    };


    return (
        <Modal show={isAddModal} onHide={closeModal}>

            <Modal.Header closeButton>
                <Modal.Title>Add New Student</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="mb-3">
                    <label>ID</label>
                    <input
                        className="form-control"
                        value={inforStudent.id}
                        onChange={(e) =>
                            setInforStudent({
                                ...inforStudent,
                                id: e.target.value
                            })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Name</label>
                    <input
                        className="form-control"
                        value={inforStudent.name}
                        onChange={(e) =>
                            setInforStudent({
                                ...inforStudent,
                                name: e.target.value
                            })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Age</label>
                    <input
                        className="form-control"
                        value={inforStudent.age}
                        onChange={(e) =>
                            setInforStudent({
                                ...inforStudent,
                                age: e.target.value
                            })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label>Class Name</label>
                    <input
                        className="form-control"
                        value={inforStudent.className}
                        onChange={(e) =>
                            setInforStudent({
                                ...inforStudent,
                                className: e.target.value
                            })
                        }
                    />
                </div>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>

                <Button variant="primary" onClick={handleAdd}>
                    Add Student
                </Button>
            </Modal.Footer>

        </Modal>
    );
};

export default AddModal;