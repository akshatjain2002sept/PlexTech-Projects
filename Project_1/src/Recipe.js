import React from "react";
import "./Recipe.css";

class Recipes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            recipeList: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/recipes/')
            .then(response => response.json())
            .then(data => this.setState({recipeList: data}));
    }

    recipeComponent(name, ingredients, instructions, image) {
        const ingredientItems = ingredients.map((ingredient) => (this.listItem(ingredient)));
        const instructionItems = instructions.map((instruction) => (this.listItem(instruction)));
        return (
            <div className = "recipeContainer">
                <h1 className = "recipeName"> {name} </h1>

                <h2> The ingredients are: </h2>
                <ul className = "ingredients"> {ingredientItems} </ul>

                <h2> The instructions are:</h2>
                <ol classname = "instructions"> {instructionItems} </ol>

                <img className = "pic" style={{maxWidth: '400px'}} src={image} alt={`This is an image of ${name}`}></img>
            </div>
        )
    }

    listItem(ingredient) {
        return <li> {ingredient} </li>
    }

    render() {
        console.log("State: ", this.state);
        const recipeComponents = 
            this.state.recipeList.map((recipe) => (this.recipeComponent(recipe.name, recipe.ingredients,
                recipe.instructions, recipe.image)));
        return (
             <div> 
                {recipeComponents}
            </div>
        );
    }
}

export default Recipes;
