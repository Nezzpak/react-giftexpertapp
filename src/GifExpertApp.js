import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {

    

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories,'Attack On Titans']);
    // }

    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } categories={categories}/>
            <hr/>

            <ol>
                {
                    categories.map(category=>{
                        return <GiftGrid
                        key = {category} 
                        category={category} />
                    })
                }
            </ol>
        </>
    )
}
