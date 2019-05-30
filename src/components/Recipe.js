import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import '../styles/styles.scss';
import { bindActionCreators } from 'redux';



const mapStateToProps = (state) => ({
    recipe: state.recipe.recipe
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};


class Recipe extends React.Component {


    componentWillMount() {
        const { match: { params: { id }}} = this.props;
        this.props.actions.getRecipeById(id);
    }

    
    render() {
        const recipe = this.props.recipe;
        const chef = recipe.chef;
        const chefFullName = chef
        return (
            <div className="container-recipe">
              <div className="container-recipe__img">          
              </div> 
              <div className="container-recipe__box">
                  <div className="rating"></div>
                  <div className="prep-time">{recipe.prep_time}</div>
                  <div className="chef"></div>
              </div>
              <div className="container-recipe__instructions">{recipe.instructions}</div>
            </div>

        )
        
    }
}







export default connect(mapStateToProps, mapDispatchToProps)(Recipe);