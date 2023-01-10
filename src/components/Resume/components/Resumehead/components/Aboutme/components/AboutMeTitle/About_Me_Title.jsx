import React from "react";

export default function AboutMeTitle(props) {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.familyname}</h2>
        </>
    )
}