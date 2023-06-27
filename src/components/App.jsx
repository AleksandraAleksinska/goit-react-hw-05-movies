import { Routes, Route, Link } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import NotFound from "pages/NotFound/NotFound";

export const App = () => {

  const KEY = 'dce0b8b37fbd78cdab3203c47fa0e91b'
  return (
   <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movieDetails' element={<MovieDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
   </div> 
  );
};
