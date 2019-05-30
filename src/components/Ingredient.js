import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import '../styles/styles.scss';
import { bindActionCreators } from 'redux';
import Image from '../assets/images/no-photo.jpg';


class Ingredient extends React.Component {

    componentWillMount() {
        const { match: { params: { id }}} = this.props;
        this.props.actions.getIngredientById(id);
    }


    render() {
        const picture = this.props.ingredient.image ? this.props.ingredient.image.url : Image;
        return (
            <div className="ingredient-container">
              <div className="ingredient-container__img">
                <img alt={this.props.ingredient.name} src={picture}/>
              </div>
                <div className="ingredient-container__inner">
                  <h2>{this.props.ingredient.name}</h2>
                  <div>
                      <h3>Recipes:</h3>
                  </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => ({
    ingredient: state.ingredient.ingredient
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);