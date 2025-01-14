import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function IndexMoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movie";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container pt-4">
        <h1>Lista Movie</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={"/movies/" + movie.id}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
