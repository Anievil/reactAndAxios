import axios from 'axios';

const http = axios.create({
    baseURL: 'https://randomuser.me/api',
    responseType: 'json',
});

export const getData = async () => {
    try{
        const info = await http.get();
        console.log(info)
        return info;
    }
    catch(err){
        console.log(err);
    }
};
