import React from "react";
import { getAll } from "../service/data.js";

class ListComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps) {

        if (prevProps.reload !== this.props.reload) {
            this.loadData();
        }
    }

    loadData = () => {

        this.setState({
            todoList: [...getAll()]
        })
    }

    render() {

        return (
            <ul>
                {
                    this.state.todoList.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default ListComponent;