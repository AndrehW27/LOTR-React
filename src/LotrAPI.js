const apiToken = 'jb6Y_Y0cOZ9J6dUm6P7y';
const apiUrl = 'https://the-one-api.dev/v2';
// import axios from 'axios';

// axios.interceptors.request.use(
//     config =>{
//         config.headers.authorization - `Bearer ${apiToken}`
//         return config;
//     },
//     error =>{
//         return Promise.reject(error);
//     }
// );
 
const basicFetch = async (endpoint) => {
    const req = await fetch(`${apiUrl}${endpoint}`);
    const json = await req.json();
    return json;    
}

export default {
    getAllBooks: async () => {
        return (
            basicFetch('/book')
        );
    }
}

// export default {
//     getAllCharactors: async () => {
//         return (
//             basicFetch('/character')
//         );
//     }
// }



