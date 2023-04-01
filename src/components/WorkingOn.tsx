import React from "react";

import workingOnImg from '../assets/images/working_on.png'

const WorkingOn = () => {
    return (
        <div
            id="working-on-body"
            style={{
                width: "1110px",
                height: "549px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 2px 3px #0000000D",
                borderRadius: "8px",
                opacity: "1",
                gap: "16px"
            }}
        >
            <img 
                src={workingOnImg}
                style={{
                    width: "236px",
                    height: "173px",
                    background: "transparent 0% 0% no-repeat padding-box",
                    opacity: "1"
                }}
            />
            <p
                style={{
                    width: "224px",
                    height: "17px",
                    color: "#00065A",
                    textAlign: "center",
                    font: "normal normal 600 12px/16px Poppins",
                    letterSpacing: "0px",
                    opacity: "1"
                }}
            >
                Section currently under construction
            </p>
        </div>
    )
}

export default WorkingOn