import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Search = ()=>{
   const value = useSelector((state)=>{
    return state.counter.value
    })
    const [searchText,setSearchText] = useState("")
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get("http://fakestoreapi.com/products").then((response)=>{
            setProducts(response.data)
        })
    },[])
  return (
    <div>
        {value}
        <br></br>
        <input type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        }}></input>
        <br></br>
        {products.map((val)=>{
            return <div>
            
                <img className="image" src={val.image}></img>
                </div>
        })}
    </div>
  )
}

export default Search