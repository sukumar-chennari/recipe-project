import { useContext, useEffect } from "react"
import { GlobalData } from "../stack/stack"

export const FavouriteScreen=()=>{
const {favouriteRecipe}=useContext(GlobalData)
    return(
        
        <>
            <h1>favoutire screen </h1>
            {
           favouriteRecipe.length>0? favouriteRecipe.map(each=><>
           <h3>{each.name}</h3>
           </>)
            :
            <h3>No favourites found</h3>
        }
        </>
        
    )
}