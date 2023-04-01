import React from "react"

//TODO MODULARIZAR EN UN SOLO COMPONENTE
export const CustomPoppinsBold: React.FC<{content: string, size?: string, height?: string, borderBottom?: string, marginBottom?: string}> = props => {
    const {content, size, height, marginBottom, borderBottom} = props
    return (
        <p style={{
            marginTop: "0px",
            marginBottom: marginBottom || "revert",
            height: height || "0px",
            textAlign: "left",
            font: `normal normal 600 ${size || "12px/14px"} Poppins`,
            letterSpacing: "0px",
            color: "#00065A",
            opacity: "1",
            borderBottom: borderBottom || "none"
        }}>{content}</p>
    )
}

export const CustomPoppinsNormal: React.FC<{content: string, width?: string}> = props => {
    const {content, width} = props
    const style: any = {
        marginTop: "0px",
        height: "0px",
        textAlign: "left",
        font: "normal normal normal 12px/14px Poppins",
        letterSpacing: "0px",
        color: "#00065A",
        opacity: "1"
    }
    if(width) style.width = width

    return (
        <p style={style}>{content}</p>
    )
}

export const CustomPoppinsNormalLong: React.FC<{content: string, width?: string}> = props => {
    const {content, width} = props
    const style: any = {
        textAlign: "left",
        font: "normal normal normal 12px/14px Poppins",
        letterSpacing: "0px",
        color: "#00065A",
        opacity: "1"
    }
    if(width) style.width = width

    return (
        <p style={style}>{content}</p>
    )
}