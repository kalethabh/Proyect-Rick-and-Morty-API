import Card from '../Card/Card';
import '../Card/Card.css'

export default function Cards(props) {

   const {characters} = props
   return( 
      
     <div className='cardsDiv'>
         {characters.map(({ id, name, species, image, gender}) => 
            <div>
               <Card 
                  id={id}
                  key = {name}
                  image = {image}
                  onClose = {() =>props.onClose(id)}
                  name = {name}
                  species = {species}
                  gender = {gender}
               />
            </div>
            )}
   </div>
   );
}
