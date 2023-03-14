import './Card.css'
import { Link } from 'react-router-dom';

export default function Card({ id, name, species, image, gender, onClose }) {
   return (
      <div className='card'>
            <button className='close-button' onClick={onClose}>X</button>
            <Link to={`/detail/${id}`}><img className='img' src={image} alt="Img not found" /></Link>
            <h3 className='h3'>{name}</h3>
            <h2 className='p'>{species}</h2>
            <h2 className='p1'>{gender}</h2>
      </div>
     
   );
}
