import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useFetch from '../../useFetch';
import BlogList from '../../BlogList';
import Spinner from '../spinner/Spinner';


const HomePage = () => {
    const { data, error, isLoading } = useFetch('http://localhost:8000/posts');
    return (
        <>
            {isLoading && <Spinner />}
            { error && <div>{error}</div>}
            {data && !error && <BlogList data={data} />}
        </>
     );
}
 
export default HomePage;