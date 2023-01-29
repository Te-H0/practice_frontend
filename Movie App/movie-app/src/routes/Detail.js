import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../componentes/MovieDetail";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieDetail);
  return (
    <div>
      {loading ? (
        <h2>Loading Movie Detail ...</h2>
      ) : (
        <MovieDetail
          coverImage={movieDetail.medium_cover_image}
          title={movieDetail.title}
          genres={movieDetail.genres}
          summary={movieDetail.description_full}
        />
      )}
    </div>
  );
}
export default Detail;
