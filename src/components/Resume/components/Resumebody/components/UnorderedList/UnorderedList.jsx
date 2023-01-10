import React from "react";
import randomString from "../../../../../../utlis/random.string";


export default function UnorderdList(props){
    console.log(props.list)
    return (
        <>
        <ul>
            {
                props.list.map((item) => { return <li key={randomString()}>{item}</li>})
            }
        </ul>
        </>
    )
}