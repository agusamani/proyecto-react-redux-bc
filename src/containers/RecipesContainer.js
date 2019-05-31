import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Recipes from '../components/Recipes';
import '../styles/styles.scss';
import { bindActionCreators } from 'redux';
import Spinner from 'react-spinner-material';
// import { getRecipes } from '../redux/actions';


class RecipesContainer extends React.Component {


    componentWillMount() {
        this.props.actions.getRecipes();
    }

    // componentWillMount() {
    //     this.props.dispatch(getRecipes());
    // }



    render() {
        return (

            <div className="recipes-container">
                {this.props.loading ? <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} /> : 
                   this.props.recipes.map( (recipe) => <Recipes 
                                                         key={recipe.id} 
                                                         {...recipe}
                                                        />)}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.recipes,
    loading: state.recipes.isRecipesLoading === true
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}



// export default connect(mapStateToProps, null)(RecipesContainer);
export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);