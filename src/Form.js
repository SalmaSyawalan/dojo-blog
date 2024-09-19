// import { useState } from "react";
// import { useNavigate, useParams } from 'react-router-dom';
// import useFetch from "./useFetch";

// const Form = () => {
//     // if param true, use state diisi data hasil fetch, kalau engga pake empty
//     const { id } = useParams();

//     const [author, setAuthor] = useState('');
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');

//     if(id){
//         useFetch(`http://localhost:8000/blogs/${id}`);
//         setAuthor()
//     }

//     const [loading, setLoading] = useState(false);
//     const nav = useNavigate();

//     // if param true, dia put
//     const handleSubmit = (e) => {
//         setLoading(true);
//         e.preventDefault();
//         const blog = { title, body, author };

//         fetch('http://localhost:8000/blogs', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(blog)
//         }).then(() => {
//             console.log('a blog is successfully added');
//             setLoading(false);
//             nav('/');
//         })
//     }

//     return (
//         <div className="form-component">
//             <form onSubmit={handleSubmit}>
//                 <label>Author</label>
//                 <input 
//                     type="text"
//                     placeholder="Author"
//                     onChange={(e) => setAuthor(e.target.value)}
//                 />

//                 <label>Blog Title</label>
//                 <input 
//                     type="text"
//                     placeholder="Blog Title"
//                     onChange={(e) => setTitle(e.target.value)}
//                 />

//                 <label>Text</label>
//                 <textarea 
//                     type="text"
//                     placeholder="Text"
//                     onChange={(e) => setBody(e.target.value)}
//                 />
//                 {!loading && <button>Create Blog</button>}
//                 {loading && <button disabled>Adding blog...</button>}
                
//             </form>
//         </div>
//     );
// }
 
// export default Form;