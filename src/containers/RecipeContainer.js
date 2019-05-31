import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import '../styles/styles.scss';
import { bindActionCreators } from 'redux';
import Recipe from '../components/Recipe';




class RecipeContainer extends React.Component {


    componentWillMount() {
        const { match: { params: { id }}} = this.props;
        this.props.actions.getRecipeById(id);
    }

    
    render() {
        return (
            <div>
                <Recipe 
                  rating={this.props.recipe.rating}
                  prep_time={this.props.recipe.prep_time}
                  title={this.props.recipe.title}
                  instructions={this.props.recipe.instructions}
                  image={this.props.recipe.main_image}
                  chef={this.props.recipe.chef}
                  ingredients={this.props.recipe.ingredients}
                />
            </div>
        )
        
    }
}



const mapStateToProps = (state) => ({
    recipe: state.recipe.recipe
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};





export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);