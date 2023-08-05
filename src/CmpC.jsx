import React from "react";
import { firstName } from "./App";

const CmpC = () => {
    return (
        <>
            <firstName.Consumer>
            {(fname) => {
                return <h1> my name is  {fname}</h1>
            }}
            </firstName.Consumer>
        </>
    )
}

export default CmpC;