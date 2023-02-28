import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return( 
      
     <div>
         {characters.map((characters) => 
            <dvi>
               <Card 
                  key = {characters.name}
                  name = {characters.name}
                  species = {characters.species}
                  gender = {characters.gender}
                  image = {characters.image}
                  onClose = {() => window.alert('Emulamos que se cierra la card')}
               />
            </dvi>
            )}
   </div>
   );
}
