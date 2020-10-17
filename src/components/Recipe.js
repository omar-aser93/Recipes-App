import React  from 'react' ;

//recieve the props to the child component & destruction for them
const Recipe  = ({title , ingredients  ,calories , image }) =>{


return(           // show the data to the user
   <div className="recpieDetail" >
   <h1>{title}</h1>
   <hr></hr>
   <ul>
       {ingredients.map(ingredient=>( 
     <li>{ingredient.text}</li>))} </ul>
   <p> calories : {calories}</p>
   <img src={image} alt={title} />

    </div>
) }

export default Recipe  ;