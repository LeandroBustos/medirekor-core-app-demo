import React from "react"

const Etiquete: React.FC<{color: string, content: string, width?:string, height?:string, margin?: string}> = props => {
    const {color, content, width, height, margin} = props
    const style: any = {
        width: width || "auto",
        height: height || "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `${color} 0% 0% no-repeat padding-box`,
        borderRadius: "5px",
        opacity: "1",
        textAlign: "left",
        color: "#FFFFFF",
        letterSpacing: "0px",
        fontSize: "small"
    }
    if(margin) style.margin = margin
    return (
        <p style={style}>{content}</p>
    )
}

export default Etiquete