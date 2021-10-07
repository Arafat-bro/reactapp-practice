import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
// const User = ({match}) => {
//     return (
//         <>
//             <h3>User Page of { match.params.name}</h3>
//         </>
//     )
// }
const User = () => {
    const { fname, lname } = useParams();
    const locationUrl = useLocation();
    const history = useHistory();
    return (
        <>
            <h3>User Page of {fname} {lname}</h3>
            <p>Current url path - {locationUrl.pathname}</p>
            {locationUrl.pathname === `/user/Arafat/bro` ? <button onClick={()=> history.goBack()}> Click me</button> : null}
        </>
    )
}
export default User;