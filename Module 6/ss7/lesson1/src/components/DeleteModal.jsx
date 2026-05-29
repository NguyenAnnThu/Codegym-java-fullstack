import {Modal,Button} from "react-bootstrap";
import {toast} from "react-toastify";
import {deleteById} from "../service/studentService.jsx";

const DeleteModal=({deleteStudent,isShow,closeModal,setReloading}) => {
    const handleClose =()=>{
        closeModal();
    }

    const handleDelete =()=>{
        const fetchData=async ()=>{
            let isSuccess=await deleteById(deleteStudent.id)
            if(isSuccess){
                setReloading(pre => !pre);
                toast.success("Xóa thành công")
            }else{
                toast.error("Xóa thất bại")
            }
            closeModal();
        };
        fetchData();
    }
    return (
        <>
            <Modal show={isShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa sinh viên </Modal.Title>
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