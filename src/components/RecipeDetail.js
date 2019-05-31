import React from 'react';
import Markdown from 'react-markdown';
import Ingredients from '../components/Ingredients';
import '../styles/styles.scss';


const RecipeDetail = ({chef, image, ingredients, title, rating, prep_time, instructions}) => {
    const chefFullName = chef && chef.full_name ? chef.full_name : null;
    const chefPhoto = chef && chef.image.url ? chef.image.url : null;
    const img =  image && image.url ? image.url : null;
    return (
        <div className="container-recipe">
          <div className="container-recipe__img"> 
              <img alt={title} src={img} />       
          </div> 
          <div className="container-recipe__inner">
            <div className="container-recipe__name">
             {title}
            </div>
            <div className="container-recipe__box">
              <div className="rating">Rating: {rating} <i className="fas fa-star"></i></div>
              <div className="prep-time">{prep_time}</div>
              <img alt={chefFullName} src={chefPhoto} />
              <div className="chef"> By {chefFullName}</div>
            </div>
            <div className="container-recipe__ingredients">
              {ingredients && ingredients.map( (item) => <Ingredients key={item.id} {...item}/>)}
            </div>
            <div className="container-recipe__instructions">
              <Markdown source={instructions} />
            </div>
          </div>
      </div>
    )
}


export default RecipeDetail;
















// import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../redux/actions';
// import '../styles/styles.scss';
// import { bindActionCreators } from 'redux';




// class Recipe extends React.Component {


//     componentWillMount() {
//         const { match: { params: { id }}} = this.props;
//         this.props.actions.getRecipeById(id);
//     }

    
//     render() {
//         const recipe = this.props.recipe;
//  const chefFullName = recipe && recipe.chef && recipe.chef.full_name ? recipe.chef.full_name : null;
//         const image = recipe && recipe.main_image && recipe.main_image.url ? recipe.main_image.url : null;
//         return (
//             <div className="container-recipe">
//               <div className="container-recipe__img"> 
//               <img alt={recipe.title} src={image} />         
//               </div> 
//               <div className="container-recipe__box">
//                   <div className="rating"></div>
//                   <div className="prep-time">{recipe.prep_time}</div>
//                   <div className="chef">{chefFullName}</div>
//               </div>
//               <div className="container-recipe__instructions">{recipe.instructions}</div>
//             </div>

//         )
        
//     }
// }



// const mapStateToProps = (state) => ({
//     recipe: state.recipe.recipe
// });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     }
// };





// export default connect(mapStateToProps, mapDispatchToProps)(Recipe);