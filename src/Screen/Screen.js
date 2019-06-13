import React from 'react';

const outputScreen = (props) => {
    const screenStyle = {
        width: "94%",
        height: "auto",
        border: "1px solid rgba(198, 208, 255, 0.4)",
        margin: "auto",
        padding: "5px 10px",
        backgroundColor: "#ffffff96",
        borderRadius: "4px"
    }

    const stlAns = {
        minHeight: "25px",
        marginBottom: "5px",
        overflow: "hidden",
        borderBottom: "1px solid #dadada",
        textAlign: "right",
        paddingRight: "15px"
    }

    const inputStyle = {
        minHeight: "30px",
        border: "2px solid #bdbdbd87",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "21px",
        fontWeight: "500",
        textAlign: "right",
        padding: "0 5px"
    }    

    return (
        <div style={screenStyle} className="screen">
            <div className="answer" style={stlAns}>Ans: {props.divResult}</div>
            <div className="inputDisplay" style={inputStyle}>{props.divDisplay}</div>
        </div>
    )
}

export default outputScreen