import {useState} from "react"
function Main(){
    const [ingredients, setIngredients] =useState([])

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(
            (prev)=>{
                return [...prev, newIngredient]
            })
    }
    return(
        <main className="container mt-5">
            <form className="row g-2 align-items-center" action={addIngredient}>
                <div className="col-md-8">
                    <input
                    type="text"
                    className="form-control"
                    id="input"
                    placeholder="eg: Orange"
                    name="ingredient"
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-dark rounded fw-semibold" id="button" type="submit">+ Add Ingredient</button>
                </div>
            </form>
            <ul className="m-3 fw-semibold">
                {ingredients.map((ingredient)=>{
                    return <li key={ingredient}>{ingredient}</li>
                })}
            </ul>
        </main>
    )
}

export default Main;