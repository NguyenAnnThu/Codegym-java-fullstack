import React from "react";
import { addTodo } from "../service/data.js";

class AddComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todo: ""
        }
    }

    handleChange = (event) => {

        this.setState({
            todo: event.target.value
        })
    }

    handleAdd = () => {

        if (this.state.todo.trim() === "") {
            return;
        }

        addTodo(this.state.todo);

        this.props.reloadList();

        this.setState({
            todo: ""
        })
    }

    render() {

        return (
            <>
                <h5 className='text-start mb-3 ms-3'>Your event:</h5>

                <input
                    className="form-control mb-3 ms-4"
                    type="text"
                    placeholder="Please enter your event"
                    value={this.state.todo}
                    onChange={this.handleChange}
                />
                <br/>

                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>

            </>
        )
    }
}

export default AddComponent;