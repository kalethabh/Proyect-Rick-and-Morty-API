import './Card.css'
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../reducer/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, species, image, gender, onClose, deleteFavorite, addFavorite, myFavorites  }) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         deleteFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({ id, name, species, image, gender, onClose})
      }
   }

   useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className='card'>
            <button className='close-button' onClick={onClose}>X</button>
               {
               isFav ?(<button className='favorites' onClick={handleFavorite}>❤️</button>) : (<button className='favorites' onClick={handleFavorite}>🖤</button>)  
               }
            <Link to={`/detail/${id}`}><img className='img' src={image} alt="Img not found" /></Link>
            <h3 className='h3'>{name}</h3>
            <h2 className='p'>{species}</h2>
            <h2 className='p1'>{gender}</h2>
      </div>
     
   );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

