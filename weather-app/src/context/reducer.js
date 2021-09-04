



const reducer = (state, action) => {
   
    switch(action.type) {
        case 'ADD_TO_FAVORITES':
        return {
        ...state,
        favorites: [action.item, ...state.favorites]
        
        }
        case 'REMOVE_FROM_FAVORITES':
            return {
            ...state,
            favorites: state.favorites.filter(favorite => favorite.id !== action.id)
            }
        default:
            return state
    }
    
}




export default reducer