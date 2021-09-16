
import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const increasement = () => {
        dispatch({ type: "INCREMENT" })
    }
    const increase =()=>{
        dispatch({type: "INCRESE",amount:5})
    }
    const decrement = () => {
        dispatch({ type: "DECREMENT" })
    }


    return (
        <div>
            <p>{counter}</p>
            <button onClick={increasement}>increase by 1</button>
            <button onClick={increase}>increase by 5</button>
            <button onClick={decrement}>decrease by 1</button>

        </div>
    )
}
export default Counter;




























// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// class Counter extends Component {
  
// incrementHandler(){
// this.props.increment()
// }
// decrementHandler(){
// this.props.decrement()
// }

//     render() {
//     return (
//         <div>
//         <p>{this.props.count}</p> 
//         <button onClick={this.incrementHandler.bind(this)}>increase by 1</button>
//         <button onClick={this.decrementHandler.bind(this)}>decrease by 1</button>
//         </div>
//     )
//     }
// }
// const mapStateToPropes =(state)=>{
//     return{
//         count:state.counter
//     }
// }
// const mapDispatchToPropes =(dispatch)=>{
//     return{
//     increment: ()=> dispatch({type:"INCREMENT"}),
//     decrement: ()=> dispatch({type:"DECREMENT"}),
//     }
// }
// export default connect(mapStateToPropes,mapDispatchToPropes) (Counter);

