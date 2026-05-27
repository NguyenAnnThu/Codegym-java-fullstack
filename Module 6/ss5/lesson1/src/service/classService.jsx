import axios from "axios";

const api = import.meta.env.VITE_API_URL;
export async function getAllClass(){
    const res= await  axios.get(`${api}/classes`);
    return res.data;
}
export async function getClassById(id){
    try{
        const res= await  axios.get(`${api}/classes/${id}`);
        return res.data;
    }catch (err){
        console.log(err);
        return [];
    }
}
export async function addClass(className){
    try{
        const res= await  axios.post(`${api}/classes`, className);
        return res.data;
    }catch (err){
        console.log(err);
        return false;
    }
}