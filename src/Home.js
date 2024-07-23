import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // usage example of useState
    // const [name, setName] = useState("Mario")
    // const [age, setAge] = useState(30)

    const [blogs, setBlogs] = useState([
        { title: 'White Core Phylosophy', body: 'lorem ipsum', author: 'alius', id: 1},
        { title: 'Solidify the Stardust to Use It as Weapon', body: 'lorem ipsum', author: 'nebula', id: 2},
        { title: 'Adjust the Range of Extreme Gravity', body: 'lorem ipsum', author: 'quasar', id: 3},
    ])

    const handleClick = () => {
        // setName('Luigi');
        // setAge(age + 1);
    }

    return ( 
        <div className="home">
            {/* <h2>Home page</h2> */}
            <BlogList blogs={blogs} title='All Blogs'/>
            <BlogList blogs={blogs.filter((blog) => blog.author == 'alius')} title='Selected Blogs'/>
            {/* usage example
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>click</button> */}
        </div>
     );
}
 
export default Home;