export default function Card(props) {
   return (
      
      <div>
         <button onClick={() => props.onClose()}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.ender}</h2>
         <img  src={props.image} alt="Img not found" />
      </div>
   );
}
