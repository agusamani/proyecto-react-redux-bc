import React from 'react';
import Image from '../assets/images/no-pic.jpg';
import '../styles/styles.scss'
import { Link } from 'react-router-dom';



const Ingredients = ({name, image, id}) => {

    const picture = image ? image.url : Image;

    return (
        <div className="ingredients-item">
          <div className="ingredients-items__inner">
          <Link to={`/ingredients/${id}`}>
             <img alt="sdd" src={picture} />
          </Link>
            {name}
          </div>
        </div>
    )
}

export default Ingredients;