const students = [
    { id: 1, name: "An", age: 20, className: "C06" },
    { id: 2, name: "Bình", age: 21, className: "C06" },
    { id: 3, name: "Chi", age: 19, className: "C06" },
    { id: 4, name: "Dũng", age: 22, className: "C06" }
];

export function getAll(){
    return [...students];
}
export function deleteById (id){
    for(let i = 0; i < students.length; i++){
        if(students[i].id == id){
            students.splice(i, 1);
            break;
        }
    }
}

export function addNewStudent (student){
    students.push(student);
}