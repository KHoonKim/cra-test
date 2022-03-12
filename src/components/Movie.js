import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Movie({id, medium_cover_image, title, rating, year, genres}) {
  return (
    <div key={id}>
      <img src={medium_cover_image} />
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>
      <h3>score : {rating}</h3>
      <h3>year : {year}</h3>
      <h3>genres</h3>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line react/no-typos
Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, 
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
