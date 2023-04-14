import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar(props) {
   
   const [character, setCharacter] = useState("")

   const handleChange = (e) => {
      const {value} = e.target;
      setCharacter(value)
   }

   return (
      <div>
         <input className="search-input" type="search" placeholder="Buscar..." onChange={handleChange}/>
         <button className="search-button" onClick={() => props.onSearch(character)}>Añadir</button>
      </div> 
      
   );
}
