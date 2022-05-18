

 const reducer= (state,action) =>{


    switch (action.type) {
        case 'SEARCH':
            return{
                ...state
            }
        case 'DATA':
            return{
                ...state,
                data:action.payload
            }
        case 'ADD':
            return{
                ...state,
                query:action.payload
            }
    
        default:
            break;
    }
}

export default reducer;