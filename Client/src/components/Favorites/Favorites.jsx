import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites({ myFavorites }) {
  return (
    <div className="cardsDiv">
      {myFavorites?.map(({ id, name, species, image, gender }) => (
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          image={image}
          gender={gender}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

