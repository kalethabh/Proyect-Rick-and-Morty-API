import '../css/SearchBar.css'

export default function SearchBar(props) {
   return (
      <div>
         <input 
         type="text"
         className="search-input"
         placeholder="Buscar..."
         />
         <button className="search-button" type="submit" onClick={() => props.onSearch('XD')}>Añadir</button>
      </div> 
      
   );
}
