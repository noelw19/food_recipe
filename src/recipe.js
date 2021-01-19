import React from 'react';

import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, healthLabels, source, url, dietLabels, servings}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt=""/>
            <p><strong>Calories: </strong> {calories.toFixed(2)}</p>

            <div className={style.dualCell}>
            <p><strong>Dietaries: </strong> <ul>
                {healthLabels.map(label => (
                    <li>{label}</li>
        ))}
            </ul></p>
            <p className={style.bL}><strong>Diet labels: </strong> <ul>
                {dietLabels.map(dLabel => (
                    <li>{dLabel}</li>
        ))}
            </ul></p>
            </div>
            <p>Recipe serves {servings} people</p>
            <p>Find method: <a href={url} target='_blank'>{source}</a></p>
            
        </div>
    )
}

export default Recipe;