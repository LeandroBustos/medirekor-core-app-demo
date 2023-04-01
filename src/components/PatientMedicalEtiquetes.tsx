import React from "react"
import { CustomPoppinsBold } from "./CustomParagraph"
import Etiquete from "./Etiquete"

const PatientMedicalEtiquetes: React.FC<{id: string, color: string, title:string, content: string[], width?:string, height?:string}> = props =>{
    const {id, color, title, content, width, height} = props
    return (
        <div
            id={`patient-${id}-box`}
            style={{
                width: "298px",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
            }}
        >
            <div
                id={`patient-${id}-title`}
            >
                <CustomPoppinsBold
                    content={title}
                    size="18px/21px"
                />
            </div>
            <div
                id={`patient-${id}-content`}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "14px",
                    flexWrap: "wrap",
                }}
            >
                {content.map(data => {
                    return (
                        <Etiquete 
                            color={color} 
                            content={data}
                            width={width || "auto"}
                            height={height || "auto"}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PatientMedicalEtiquetes