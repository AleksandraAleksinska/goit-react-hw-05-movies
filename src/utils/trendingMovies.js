import axios from "axios";

export const getTrendingMovies = async() => {

    try {
        const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=' + key);
        const trendingMovies = response.data.results;
        return trendingMovies;
    }

    catch (error){
        console.log(error.message)
    }
    
}

// export const getMovieById = async(movieID = '455476') => {
//     try {
//         const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=` + key);
//         console.log(response.data.id)
//         return response;
        
//     }

//     catch (error){
//         console.log(error.message)
//     }
//   };

// getMovieById()