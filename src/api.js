import axios from 'axios';

// 2b5ddb7b349a0a14050a55daa13e1ea4
const apiKey = '2b5ddb7b349a0a14050a55daa13e1ea4';




axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMoovies = async () => {
    try {
        const response = await axios.get('trending/all/day', {
            params: {
                api_key: apiKey,
                language: 'en-US',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
};


export const getMoovieByID = async mooveId => {


    try {
        const response = await axios.get(`movie/${mooveId}`, {
            params: {
                api_key: apiKey,

            },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
}




export const getCast = async moovieId => {


    try {
        const response = await axios.get(`movie/${moovieId}/credits`, {
            params: {
                api_key: apiKey,
                page: 1,

            },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
}


export const getReviews = async moovieId => {


    try {
        const response = await axios.get(`movie/${moovieId}/reviews`, {
            params: {
                api_key: apiKey,

            },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
}



export const getMoovieByName = async moovieName => {


    try {
        const response = await axios.get(`search/movie?query=${moovieName}`, {
            params: {
                api_key: apiKey,

            },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
}









