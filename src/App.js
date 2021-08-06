//Dependencies
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'

const App = () => {

    ////////////////////////////////////////////////////////////////////////////
    //state hooks
    ////////////////////////////////////////////////////////////////////////////
    const [newName, setNewName] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [newImage, setNewImage] = useState('')
    const [recipes, setRecipes] = useState([])

    ////////////////////////////////////////////////////////////////////////////
    //invoking useEffect
    ////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        axios
            .get('http://localhost:3000/recipes')
            .then((response) => {
                // console.log(response);
                setRecipes(response.data)
            })
    }, [])

    ////////////////////////////////////////////////////////////////////////////
    //event handlers
    ////////////////////////////////////////////////////////////////////////////
    const handleNewName = (event) => {
        // console.log(event.target.value);
        setNewName(event.target.value)
    }

    const handleNewCategory = (event) => {
        // console.log(event.target.value);
        setNewCategory(event.target.value)
    }

    const handleNewImage = (event) => {
        // console.log(event.target.value);
        setNewImage(event.target.value)
    }

    const handleNewRecipeFormSubmit = (event) => {
        event.preventDefault()
        // console.log(newName);
        // console.log(newCategory);
        // console.log(newImage);
        axios.post('http://localhost:3000/recipes',
            {
                name: newName,
                category: newCategory,
                image: newImage
            }
        ).then(() => {
                axios
                    .get('http://localhost:3000/recipes')
                    .then((response) => {
                        setRecipes(response.data)
                    })
            })
    }

    return (
        <main>
            <h1>Yummy Recipes!</h1>

            <section>
                <h2>Create a Recipe</h2>
                    <form onSubmit={handleNewRecipeFormSubmit}>
                        Name: <input type='text' onChange={handleNewName} /> <br/>
                        Category: <input type='text' onChange={handleNewCategory} /> <br/>
                        Image: <input typr='text' onChange={handleNewImage} /> <br/>
                        <input type='submit' value="Create Recipe" />
                    </form>
            </section>

            <section>
                <h2>Recipe List</h2>
                    <ul>
                        {
                            recipes.map(() => {

                            })
                        }
                    </ul>
            </section>
        </main>
    )
}
