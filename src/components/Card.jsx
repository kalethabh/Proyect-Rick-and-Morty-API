import '../css/Card.css'
export default function Card(props) {
   return (
      
      <div className='card'>
         <button className='close-button' onClick={() => props.onClose()}>X</button>
         <h3 className='h3'>{props.name}</h3>
         <p className=''>{props.species}</p>
         <h2>{props.ender}</h2>
         <img className='img' src={props.image} alt="Img not found" />
      </div>
   );
}
