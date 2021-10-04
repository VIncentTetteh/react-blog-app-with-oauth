import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { Container } from "@material-ui/core";
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router-dom'
import {withAuthenticationRequired } from "@auth0/auth0-react";
import Spinner from "../spinner/Spinner";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
   
    const submitForm = (e) => {
        e.preventDefault();
        const blogs = { title, body};
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8', },
            body: JSON.stringify(blogs)
        }).then(() => {
            setIsLoading(false);
            setTitle('');
            setBody('');
        }).catch((err) => {
            setError(err.message);
            setIsLoading(false);
        });
    }
    return (
        <Container>
            <form onSubmit={submitForm}>
                <TextField
                    id="title-text-field"
                    label="Title"
                    style={{ margin: 8 }}
                    placeholder="Enter Title here"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <TextField
                    id="body-textarea"
                    label="Body"
                    placeholder="Enter Blog text here"
                    multiline
                    fullWidth
                    margin="normal"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </form>
        </Container>
    );
}
 
export default  withAuthenticationRequired(Create, {
  onRedirecting: () => <Spinner />,
});