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

