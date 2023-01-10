import React from "react";

export default function Date(props) {
    return (
        <>
            <div className="my-1">
                <code className="text-dark Date">
                    {props.educationStartingDate}
                </code>
                -
                <code className="text-dark Date">
                    {props.educationEndingDate}
                </code>
            </div>
        </>
    )
}