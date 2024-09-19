// import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const handleDelete = (id) => {
    //     // setName('Luigi');
    //     // setAge(age + 1);
    //     const updatedBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(updatedBlogs);
    // }

    const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            <h1>Welcome to Dojo Blog</h1>
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