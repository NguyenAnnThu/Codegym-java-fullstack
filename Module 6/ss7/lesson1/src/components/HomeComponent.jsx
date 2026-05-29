import {useEffect, useState} from "react";
import axios from "axios";
import {getAllClass} from "../service/classService.jsx";
import {getAllStudents} from "../service/studentService.jsx";

const HomeComponent = () => {
    const [classes, setClasses] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try{
            let classRes=await getAllClass();
            let students = await getAllStudents();
            setClasses(classRes);
            setStudents(students);
        }
        catch(error){
            console.log(error);
            return []
        }
    }
    useEffect(() =>{
        fetchData();
    },[loading]);
    const countStudents =  (classId) => {
        return students.filter((student) => student.class.id == classId).length;
    }
    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Quản lý lớp học</h2>
                <div className="row">
                    {
                        classes.map((item) =>(
                            <div
                        className="col-md-4 mb-4"
                        key={item.id}
                        >

                    <div className="card shadow p-3">

                        <div className="card-body">

                            <h4 className="card-title">
                                {item.name}
                            </h4>

                            <p>
                                <b>ID:</b> {item.id}
                            </p>

                            <p>
                                <b>Số lượng sinh viên:</b>
                                {" "}
                                {countStudents(item.id)}
                            </p>

                        </div>

                    </div>

                </div>
                        ))}
                </div>
            </div>
        </>
    )
}
export default HomeComponent;