import React from "react"
import ConsulStatusEtiquete from "./ConsultStatusEtiquete"
import { CustomPoppinsBold, CustomPoppinsNormal, CustomPoppinsNormalLong } from "./CustomParagraph"
import visibleIconSvg from '../assets/images/visible.svg'
import { Link } from "react-router-dom"

export const PatientEncounterContainer: React.FC<{
    index: number,
    path: string
    patientImg: string,
    patientData: {
        fullname: string,
        birthdate: string, 
        os: string,
        extra: string,
    }
    consultStatus: string,
    width?: string,
    gapPhoto?: string
}> = props => {
    const {index, patientData} = props
    //FIJARSE SI ES UN PROBLEMA CON LOS IDS
    return (
        <div 
            id={`patient-encounter-container-${index}`}
            style={{
                width: "100%",
                height: "100px",
                minHeight: "100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: "15px",
                borderBottom: "1px solid #EFEEEE",
                opacity: "1",
            }}
        >
            <PatientDataBox {...props}/>
            <span style={{height: "49px", border: "1px solid #E2E2E2"}}></span>
            <div 
                id={`patient-extra-data-container-${index}`}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "75px"
                }}
            >
                <CustomPoppinsNormalLong content={patientData.extra} width="600px"/>
                <Link
                    to={`/home/encounters/${index+1}`}
                >
                    <img src={visibleIconSvg} style={{
                        width: "22px",
                        height: "15px",
                        background: `0% 0% no-repeat padding-box`,
                        opacity: "1"
                    }}/>
                </Link>
            </div>
        </div>
    )
}

export const PatientDataBox: React.FC<{
    index: number
    path: string,
    patientImg: string,
    patientData: {
        fullname: string,
        birthdate: string, 
        os: string,
    }
    consultStatus?: string,
    width?: string,
    gapPhoto?: string
}> = props => {
    const {index, path, patientImg, patientData, consultStatus, width, gapPhoto} = props
    //FIJARSE SI ES UN PROBLEMA CON LOS IDS
    return (
        <div 
            id={`patient-${path}-info-box-${index}`}
            style={{
                width: width || "auto",
                display: "flex",
                flexDirection: "row",
                gap: gapPhoto || "32px",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <img 
            src={patientImg}
            style={{
                width: "56px",
                height: "56px",
                background: `transparent 0% 0% no-repeat padding-box`,
                borderRadius: "50%",
                opacity: "1"
            }}/>
            <div
                id={`patient-${path}-data-box-${index}`}
                style={{
                    width: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "2px"
                }}
            >
                <CustomPoppinsBold content={patientData.fullname}/>
                <CustomPoppinsNormal content={patientData.birthdate}/>
                <CustomPoppinsNormal content={patientData.os}/>
                {
                    consultStatus 
                        ? 
                            <ConsulStatusEtiquete patientConsultStatus={consultStatus} margin='unset'/>
                        :
                            ""
                }
            </div>
        </div>
    )
}