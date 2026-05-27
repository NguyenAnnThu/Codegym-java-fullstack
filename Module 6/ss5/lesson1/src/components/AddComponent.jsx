import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {addStudent, getAllStudents} from "../service/studentService.jsx";
import {getAllClass} from "../service/classService.jsx";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Card, Container} from "react-bootstrap";
import * as Yup from "yup";

const AddComponent = () => {

    const [classList, setClassList] = React.useState([]);

    const navigate = useNavigate();

    const [newStudent] = React.useState({
        id:"",
        name: "",
        gender: "",
        class: ""
    });

    useEffect(() => {

        const fetchData = async () => {

            let list = await getAllClass();

            setClassList(list);
        };

        fetchData();

    }, []);

    const handleAdd = async (value) => {

        // lấy danh sách sinh viên
        let students = await getAllStudents();

        // tìm id lớn nhất
        let maxId = 0;

        if (students.length > 0) {

            const numberIds = students
                .map(s => Number(s.id))
                .filter(id => !isNaN(id));

            maxId = Math.max(...numberIds, 0);
        }

        // tạo object mới
        value = {

            id: maxId + 1,

            name: value.name,

            gender: value.gender === "true",

            class: JSON.parse(value.class)
        }

        let isSuccess = await addStudent(value);

        if (isSuccess) {

            toast.success("Thêm mới thành công");

            navigate("/student");

        } else {

            toast.error("Thất bại");
        }
    }

    const validate = Yup.object({

        name: Yup.string()
            .required("Nhập tên")
            .matches(
                /^([A-ZÀ-Ỹ][a-zà-ỹ]*\s?)+$/,
                "Phải viết hoa chữ cái đầu"
            ),

        class: Yup.string()
            .required("Yêu cầu chọn lớp")
    })

    return (
        <>
            <Container className="mt-5">

                <div className="d-flex justify-content-center">

                    <Card
                        className="shadow p-4"
                        style={{width: "500px"}}
                    >

                        <h2 className="text-center mb-4 text-primary">
                            Thêm mới sinh viên
                        </h2>

                        <Formik
                            initialValues={newStudent}
                            onSubmit={handleAdd}
                            validationSchema={validate}
                        >

                            <Form>

                                {/* Name */}
                                <div className="mb-3">

                                    <label className="form-label fw-bold">
                                        Name
                                    </label>

                                    <Field
                                        type="text"
                                        name="name"
                                        className="form-control"
                                    />

                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-danger mt-1"
                                    />

                                </div>

                                {/* Gender */}
                                <div className="mb-3">

                                    <label className="form-label fw-bold d-block">
                                        Gender
                                    </label>

                                    <div className="form-check form-check-inline">

                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="false"
                                            className="form-check-input"
                                        />

                                        <label className="form-check-label">
                                            Nữ
                                        </label>

                                    </div>

                                    <div className="form-check form-check-inline">

                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="true"
                                            className="form-check-input"
                                        />

                                        <label className="form-check-label">
                                            Nam
                                        </label>

                                    </div>

                                </div>

                                {/* Class */}
                                <div className="mb-4">

                                    <label className="form-label fw-bold">
                                        Class
                                    </label>

                                    <Field
                                        as="select"
                                        name="class"
                                        className="form-select"
                                    >

                                        <option value="">
                                            ----Chọn lớp----
                                        </option>

                                        {
                                            classList.map((cls) => (

                                                <option
                                                    key={cls.id}
                                                    value={JSON.stringify(cls)}
                                                >
                                                    {cls.name}
                                                </option>

                                            ))
                                        }

                                    </Field>

                                    <ErrorMessage
                                        name="class"
                                        component="div"
                                        className="text-danger mt-1"
                                    />

                                </div>

                                {/* Button */}
                                <div className="d-grid">

                                    <Button
                                        type="submit"
                                        variant="primary"
                                    >
                                        Lưu sinh viên
                                    </Button>

                                </div>

                            </Form>

                        </Formik>

                    </Card>

                </div>

            </Container>
        </>
    )
}

export default AddComponent;