import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            <h2 className="sub-header">{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog-details/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Author: {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;