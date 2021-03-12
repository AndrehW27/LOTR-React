const apiToken = 'jb6Y_Y0cOZ9J6dUm6P7y';
const apiUrl = 'https://the-one-api.dev/v2';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${apiUrl}${endpoint}`,
        {
            headers:
                { 'Authorization': `Bearer ${apiToken}` }
        }
    );
    const json = await req.json();
    return json;
}

// const basicFetch = async (endpoint) => {
//     const req = await fetch(`${apiUrl}${endpoint}`);
//     const json = await req.json();
//     return json;    
// }

export default {
    getAllData: async () => {
        return [
            {
                slug: 'livros',
                items: await basicFetch('/book')
            },
            {
                slug: 'personagens',
                items: await basicFetch('/character')
            }
            ,
            {
                slug: 'citações',
                items: await basicFetch('/quote')
            }
            ,
            {
                slug: 'filmes',
                items: await basicFetch('/movie')
            }
        ]
    }
}

// export default {
//     getAllBooks: async () => {
//         return (
//             basicFetch('/book')
//         );
//     }
// }


