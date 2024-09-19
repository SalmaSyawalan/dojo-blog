import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from "./useFetch";

const EditBlog = () => {
    const { id } = useParams();

    console.log(id);
    const { data, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    console.log(isLoading);
    const [author, setAuthor] = useState(data.author);
    const [title, setTitle] = useState(data.title);
    const [body, setBody] = useState(data.body);
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('a blog is successfully edited');
            setLoading(false);
            nav('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Edit Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Author</label>
                <input 
                    type="text"
                    value={ author }
                    placeholder="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <label>Blog Title</label>
                <input 
                    type="text"
                    value={ title }
                    placeholder="Blog Title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Text</label>
                <textarea 
                    type="text"
                    value={ body }
                    placeholder="Text"
                    onChange={(e) => setBody(e.target.value)}
                />
                {!loading && <button>Create Blog</button>}
                {loading && <button disabled>Adding blog...</button>}
                
            </form>
        </div>
     );
}
 
export default EditBlog;