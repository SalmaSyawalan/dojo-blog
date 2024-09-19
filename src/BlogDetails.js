import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    const nav = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            nav('/');
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && (
                <article>
                    <div className="banner">
                        <div>
                            <h1>{ data.title }</h1>
                            <p className="author">Written by <span>{ data.author }</span></p>
                        </div>
                        <div>
                            <Link to={`/edit/${data.id}`}>
                                <button><span className="material-symbols-outlined">edit</span></button>
                            </Link>
                            <button onClick={handleDelete}><span className="material-symbols-outlined">delete</span></button>
                        </div>
                    </div>
                    <p className="body">{ data.body }</p>
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetails;