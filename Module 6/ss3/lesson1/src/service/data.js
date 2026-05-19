const students = [
    { id: 1, name: "An", age: 20, className: "C06" },
    { id: 2, name: "Bình", age: 21, className: "C06" },
    { id: 3, name: "Chi", age: 19, className: "C06" },
    { id: 4, name: "Dũng", age: 22, className: "C06" }
];
export function getAll(){
    return [...students];
}