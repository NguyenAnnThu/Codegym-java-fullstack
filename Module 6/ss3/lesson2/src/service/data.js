const todoList = [];

export const getAll = () => {
    return todoList;
}

export const addTodo = (todo) => {
    todoList.push(todo);
}