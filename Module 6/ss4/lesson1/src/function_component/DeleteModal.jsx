import {Button,Modal} from "react-bootstrap";
import React from "react";
import {deleteById} from "../service/data.js";

const DeleteModal = ({isShowModal,deleteStudent,closeModal,setReloading}) => {
    const handleClose =()=>{
        closeModal();
    }
    const handleDelete=()=>{
        deleteById(deleteStudent.id);
        closeModal();
        setReloading(pre => !pre);
    }
    return (
        <>
            <Modal show={isShowModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên {deleteStudent.name} </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default DeleteModal;