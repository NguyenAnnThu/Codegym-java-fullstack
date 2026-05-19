import React from "react";
import {getAll} from "../service/data.js";


class ListComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }
    componentDidMount() {
        console.log("--------didMount------");
        this.setState({
            students: [...getAll()]
        })
    }

    render(){
        return (

            <>
                <div className="container mt-5">
                    <h2 className="mb-4">List of students</h2>
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
                        {this.state.students.map((student, index) => (
                            <tr key={student.id}>
                                <td>{index+1}</td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.className}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default ListComponent;