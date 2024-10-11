import { useSelector, useDispatch } from "react-redux"
import { increment,decrement } from "./counterReducer"


const Counter = ()=>{
const countervalue = useSelector((state)=>{
return state.counter.value
})
const dispatch = useDispatch()

    return(
    <div>
        {countervalue}
        <br></br>
        <button onClick={()=>{
           dispatch(increment())
        }}> positive +</button>
        <br></br>
        <button onClick = {()=>{
            dispatch(decrement())
        }}> negative -</button>
    </div>
 )
}

export default Counter