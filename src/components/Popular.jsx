import { useEffect, useState } from "react";

function Popular() {

    useEffect(() => {
        getPopular()
    }, [])

    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        setPopular(data.recipes)
    }
    return (
        <div>
            {popular.map((recipe) => {
                return(
                    <div key={recipe.id}>
                        <img src={recipe.image}/>
                    </div>
                );
            })}
        </div>
    )
}

export default Popular