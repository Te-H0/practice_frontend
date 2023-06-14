import PropTypes from "prop-types";

function MovieDetail({ coverImage, title, genres, summary }) {
  return (
    <div>
      <div>
        <span>
          <img src={coverImage} alt={title}></img>
        </span>
        <h2>{title}</h2>
        <span>
          <b>Genre</b>:{" "}
        </span>
        {genres.map((genre) => genre + ` `)}
        <h2>Summary!</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
}
MovieDetail.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};
export default MovieDetail;
