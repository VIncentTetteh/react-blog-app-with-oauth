import {withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import Spinner from "../spinner/Spinner";
const Profile = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;
    return (
        <div>Welcome {name}</div>
     );
}
 
export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Spinner />
});