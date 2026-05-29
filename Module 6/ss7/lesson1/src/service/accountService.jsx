import axios from "axios";

const API_URL= import.meta.env.VITE_API_URL;
export async function getAccounts(username, password) {
    try{
        const response = await axios.get(`${API_URL}/users`);
        const account= response.data.find(e => e.username === username && e.password === password);
        return account;
    }catch(err){
        console.log(err);
        return null;
    }
}