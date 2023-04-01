import React from "react"

const CustomButton: React.FC<{className: string, content: string,  active: boolean, onClick: any, width?:string, height?:string}> = props => {
    const {className, content, active, onClick, width, height} = props
    return (
        <button
            className={`${className} ${active ? "enable" : "disable"}`}
            onClick={onClick}
            style={{
                width: width || "134px",
                height: height || "34px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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