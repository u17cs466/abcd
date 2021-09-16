
const INITIAL_STATE ={
   firstName:"srikanth"
}

export const Reducer = (state=INITIAL_STATE,action) => {
if (action.type === "UPDATE"){
    const newState ={...state}
    newState.firstName = action.data
    return newState
    
}
return state
}