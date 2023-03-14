import React,{useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Detail.css'

const Detail = () => {
  const navigate = useNavigate();

  const [character, setCharacter] = useState({})

  const {detailId} = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          console.log(char)
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className='detailDiv'>
       <button className='back'onClick={() => navigate(-1)}>Volver</button>
      <div className='detail'>
          <h1>Name: {character.name}</h1>
          <h1>Gender: {character.gender}</h1>
          <h1>Specie: {character.species}</h1>
          <h1>Status: {character.status}</h1>
          <img className='imgs' src={character.image} alt='Img not found'/>
        </div>
    </div>
  )
}

export default Detail
