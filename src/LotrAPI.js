const API_KEY = 'jb6Y_Y0cOZ9J6dUm6P7y';
const API_BASE = 'https://the-one-api.dev/v2';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
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



