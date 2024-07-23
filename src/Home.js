import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     // setName('Luigi');
    //     // setAge(age + 1);
    //     const updatedBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(updatedBlogs);
    // }

    useEffect(() => {
        setTimeout(() =>{
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    if(!res.ok){   //when the endpoint still give the response but not the desired response. For example, happened when the json server is on but the path is wrong
                        throw Error('could not fetch data from that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setLoading(false);
                })
                .catch(err => {     //when unable to fetch. When json server is off, that port become unavailable. By that, the app can't fetch the data
                    setLoading(false);
                    setError(err.message);
                })
        }, 1000)
    }, [])

    return ( 
        <div className="home">
            {isLoading && <div style={{marginTop:"80px"}}>Loading...</div>}
            {error && <div style={{marginTop:"80px"}}>{error}</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}

            {/* <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'alius')} title='Selected Blogs' handleDelete={handleDelete}/> */}
            {/* usage example
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>click</button> */}
        </div>
     );
}
 
export default Home;