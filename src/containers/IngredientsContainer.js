import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import Loading from '../components/Loading';
import '../styles/styles.scss';
import Ingredients from '../components/Ingredients';




class IngredientsContainer extends React.Component {

    componentWillMount() {
        this.props.actions.getIngredients();
    }


    render() {
        return (
            <div className="ingredients-container">
              {this.props.loading ? <Loading /> : 
                 this.props.ingredients.map( (item) => <Ingredients 
                                                          key={item.id} 
                                                          {...item} 
                                                        />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       loading: state.ingredients.isIngredientsLoading === true,
       ingredients: state.ingredients.ingredients
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer);