import React from "react";
import ReactDOM from "react-dom";

const Box = ({ type, message, hide }) => {
    console.log(`type: ${type} \nmessage: ${message}`);

    if (hide === true) {
        return null;
    }

    switch (type) {
        case "red":
            type = "danger";
            break;
        case "orange":
            type = "warning";
            break;
        default:
            type = "primary";
    }

    return <div className={`alert alert-${type} role="alert"`}>{message}</div>;
};

// Do not edit below this line
const jsx = (
    <>
        <Box type="blue" message="Blue box" />
        <Box type="red" message="Red box" />
        <Box type="orange" message="Orange box" />
        <Box hide type="red" message="Hidden box" />
    </>
);
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
