import { addFavorite, removeFavorite } from "../redux/MovesSlice";
import { useAppDispatch, useAppSelector, MovieItem } from "./models";

type Props = {
  movie: MovieItem;
};

export default function Movie({ movie }: Props) {
  const favoriteId = useAppSelector((state) => state.data.favoriteId);

  const isFavorite = favoriteId.indexOf(movie.imdbID) != -1;
  const dispatch = useAppDispatch();

  return (
    <div className="movie">
      <img src={movie.Poster} alt="" />
      <h2>{movie.Title}</h2>
      <span>Год : {movie.Year}</span>
      <span>Тип : {movie.Type}</span>
      <button
        className={
          isFavorite
            ? "movie__favorite-active movie__favorite"
            : "movie__favorite"
        }
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          dispatch(isFavorite ? removeFavorite(movie) : addFavorite(movie));
        }}
      >
        ★
      </button>
    </div>
  );
}