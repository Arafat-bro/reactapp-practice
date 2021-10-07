import React,{useContext} from 'react';
import { FirstName,LastName } from './App';

const ComC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
            <h2>Hello ComC {fname} { lname}</h2>
        </>
    );
}
export default ComC;