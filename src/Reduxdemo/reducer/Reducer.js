
const INITIAL_VALIE ={ counter: 0 }
export const counterReducer = (state = INITIAL_VALIE,action)=>{
  if(action.type === "INCREMENT"){
      return{
          counter: state.counter+1,
      }
  }
  if(action.type === "INCRESE"){
      return{
           counter:state.counter + action.amount,
      }
  }
  if(action.type === "DECREMENT"){
      return{
          counter:state.counter - 1,
      }
  }
  return state
}
