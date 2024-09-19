import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div>
            <h1>Sorry...</h1>
            <p>It seems like you have entered wrong link</p>
            <Link to='/'>Let's back to home page</Link>
        </div>
     );
}
 
export default NotFound;