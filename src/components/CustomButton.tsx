import React from "react"

const CustomButton: React.FC<{content: string,  active: boolean, width?:string, height?:string}> = props => {
    const {content, active, width, height} = props
    return (
        <button
            style={{
                width: width || "134px",
                height: height || "34px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `${active ? "#5700FB" : "#8086DC"}  0% 0% no-repeat padding-box`,
                borderRadius: "6px",
                borderWidth: "0px",
                outline: "none",
                textAlign: "left",
                font: "normal normal bold 16px/17px Poppins",
                letterSpacing: "0px",
                color: "#FFFFFF",
                opacity: "1"
            }}
        >
            {content}
        </button>
    )
}

export default CustomButton