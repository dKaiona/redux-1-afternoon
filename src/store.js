import {createStore} from 'redux'

const stateIn ={
    recipeName: '',
    recipeCat: '',
    firstName: '',
    lastName: '',
    listIng: [],
    instructions: [],
    theRecipes:[]
}

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CAT = 'UPDATE_RECIPE_CAT'
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = ' UPDATE_LAST_NAME'
export const UPDATE_LIST_ING = 'UPDATE_LIST_ING'
export const INSTRUCTIONS = 'INSTRUCTIONS'
export const THE_RECIPES = 'THE_RECIPES'

function reducer(state = stateIn ,action) {
    const {type, payload} = action
    switch (type) {
        case UPDATE_RECIPE_NAME:
        return {...state, recipeName: payload}
        
        case UPDATE_RECIPE_CAT:
        return {...state, recipeCat: payload} 

        case UPDATE_FIRST_NAME:
        return {...state, firstName: payload}

        case UPDATE_LAST_NAME:
        return {...state, lastName: payload}

        case UPDATE_LIST_ING:
        const newIngredients = [...state.listIng, payload]
        return {...state, listIng: newIngredients}

        case INSTRUCTIONS:
        const newInstructions = [...state.instructions, payload]
        return {...state, instructions: newInstructions}

        case THE_RECIPES:
        const newRecipes = [...state.theRecipes, {recipeName:state.recipeName, recipeCat:state.recipeCat, firstName:state.firstName, lastName:state.lastName, listIng:state.listIng, instructions:state.instructions}]
        return {...state, theRecipes: newRecipes}
        default: 
        return state
    }
}


export default createStore(reducer)