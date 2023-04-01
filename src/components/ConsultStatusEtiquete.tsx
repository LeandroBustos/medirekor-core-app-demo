import React from "react"

const WAITED_TIME_STATUS: Record<string, object> = {
    "MAX_WAITING": {
        color: "#EA356B",
        label: "+ 10 hours"
    },
    "MID_WAITING": {
        color: "#E5D542 ",
        label: "+ 10 hours"
    },
    "MIN_WAITING": {
        color: "#50E85D",
        label: "+ 1 hours"
    },
    "DISCHARGED": {
        color: "#B4B4B4",
        label: "Discharged"
    },
    "INTERNSHIP": {
        color: "#5700FB",
        label: "Internship"
    },
}


const ConsulStatusEtiquete: React.FC<{patientConsultStatus: string, margin?: string}> = props => {
    const {patientConsultStatus, margin} = props
    const consultStatus: Record<string, any> = WAITED_TIME_STATUS[patientConsultStatus]
    const style: any = {
        width: "79px",
        height: "21px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `${consultStatus.color} 0% 0% no-repeat padding-box`,
        borderRadius: "5px",
        opacity: "1",
        textAlign: "left",
        color: "#FFFFFF",
        letterSpacing: "0px",
        fontSize: "small"
    }
    if(margin) style.margin = margin
    return (
        <p style={style}>{consultStatus.label}</p>
    )
}

export default ConsulStatusEtiquete