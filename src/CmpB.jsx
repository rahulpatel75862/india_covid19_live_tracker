import React, { useContext } from 'react';
// import CmpC from './CmpC';
import { firstName ,lastName} from "./App";


const CmpB = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName);
    return(
            <h1>
                My name is {fname} {lname}
            </h1>
    )
} 

export default CmpB;