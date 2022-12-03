import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ichigo']);

    const handleAddCategory = ( newCategory ) => {

        // if there is a value in the array nothing is done
        if ( categories.includes( newCategory) ) return;

        // with spreadOperator we can add a new value
        setCategories([ ...categories, newCategory])
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory onNewValue={ handleAddCategory } /> 

            {/* Gif list */}
           
            {
                // Here is how we display our elements in the DOM
                categories.map( category => {
                    return (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                    )
                })
            }
        </>
    )
}
