import React from "react"

import heightIcon from '../assets/images/height_icon.svg'
import weightIcon from '../assets/images/weight_icon.svg'
import bodyMassIcon from '../assets/images/body_mass_icon.svg'
import bodyFatIcon from '../assets/images/body_fat_icon.svg'
import temperatureIcon from '../assets/images/temperature_icon.svg'
import cardiacIcon from '../assets/images/cardiac_icon.svg'

import { CustomPoppinsBold, CustomPoppinsNormal } from "./CustomParagraph"


const VITAL_SIGNS_ICONS: Record<string, string> = {
    "HEIGHT": heightIcon,
    "WEIGHT": weightIcon,
    "BODY_MASS": bodyMassIcon,
    "BODY_FAT": bodyFatIcon,
    "TEMPERATURE": temperatureIcon,
    "CARDIAC": cardiacIcon,
}

const VitalSign:React.FC<{type: string, contentKey: string,  contentValue: string}> = props => {
    const {type, contentKey, contentValue} = props
    const vitalSignIcon: string = VITAL_SIGNS_ICONS[type] 
    return (
        <div
            id="vital-sign-box-0"
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "33px"
            }}
        >
            <div
                id='vital-sign-key'
                style={{
                    width: "148px",
                    height: "15px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "11px"
                }}
            >
                <img 
                    src={vitalSignIcon}
                    style={{
                        width: "12px",
                        height: "15px",
                        background: "transparent 0% 0% no-repeat padding-box",
                        opacity: "1"
                    }}
                />
                <CustomPoppinsNormal 
                    content={contentKey}
                    width='124px'
                />
            </div>
            <CustomPoppinsBold
                content={contentValue}
            />
        </div>
    )
}

export default VitalSign