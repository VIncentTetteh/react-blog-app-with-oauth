import {useParams} from 'react-router-dom'
import useFetch from '../../useFetch';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CreateIcon from '@material-ui/icons/Create';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';
const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/posts/' + id);
    const history = useHistory();
    const {isAuthenticated} = useAuth0();
    const deleteHandler = () => {
        fetch('http://localhost:8000/posts/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log(blog.title + " has been deleted");
            history.push('/');
        });
    }
    return (
        <Container>
            {console.log(blog)}
            <CssBaseline />
            <Box display="flex" flexDirection="row" justifyContent="space-between"> 
                <Typography varient="h2" align="left">
                    {blog.title}
                </Typography>
                { isAuthenticated &&
                    <>
                    <Button>
                        <EditIcon />
                    </Button>
                    
                    <Button>
                        <DeleteIcon color="error"/>
                    </Button>
                    </>
                }
                
            </Box>
            <hr />
            <Typography varient="body2" align="justify">
                {blog.body}
           </Typography>
        </Container>
     );
}
 
export default BlogDetails;