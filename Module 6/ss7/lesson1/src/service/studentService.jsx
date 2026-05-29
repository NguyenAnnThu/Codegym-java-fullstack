import axios from "axios";
import {chai} from "globals";

const api= import.meta.env.VITE_API_URL;
export async function getAllStudents() {
    try{
        const res= await  axios.get(`${api}/students`);
        return res.data;
    }catch(err){
        console.error(err);
        return [];
    }
}
export async function getStudentById(id) {
    try{
        const res= await  axios.get(`${api}/students/${id}`);
        return res.data;
    }catch(err){
        console.error(err);
        return [];
    }
}
export async function addStudent(student) {
    try{
        const res= await  axios.post(`${api}/students`, student);
        return res.status===201;
    }catch(err){
        console.error(err);
        return false;
    }
}
export async function updateStudent(student) {
    try{
        const res= await  axios.put(`${api}/students/${student.id}`, student);
        return res.status===200;
    }catch(err){
        console.error(err);
        return false;
    }
}
export async function deleteById(studentId) {
    try{
        const res= await  axios.delete(`${api}/students/${studentId}`);
        return res.status===200;
    }catch(err){
        console.error(err);
        return false;
    }
}
export async function searchStudent(keyword,classId) {
    try{
        let url=`${api}/students?name_like=${keyword}`;
        if(classId){
            url+=`&class_id=${classId}`;
        }
        const res= await  axios.get(url);
        return res.data;
    }catch (err){
        console.error(err);
        return [];
    }
}