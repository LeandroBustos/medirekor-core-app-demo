import React from 'react';
import traumaLogo from '../assets/images/ic_trauma.png'
import ConsulStatusEtiquete from './ConsultStatusEtiquete';
import { CustomPoppinsBold, CustomPoppinsNormal } from './CustomParagraph';

const CONSULT_LOGO: Record<string, string> = {
    'TRAUMA': traumaLogo
}

const PatientProgress: React.FC<{patientName: string, admisionDate: string, medicalConsult: string, patientConsultStatus: string}> = props =>{
    const {patientName, admisionDate, medicalConsult, patientConsultStatus} = props
    const consultLogo = CONSULT_LOGO[medicalConsult]
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px"
        }}>
            <img style={{
                width: "18px",
                height: "18px",
                background: `transparent url(${consultLogo}) 0% 0% no-repeat padding-box`,
                opacity: "1"
            }}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "3px"
            }}>
                <CustomPoppinsBold content={patientName}/>
                <CustomPoppinsNormal content={admisionDate}/>
            </div>
            <ConsulStatusEtiquete patientConsultStatus={patientConsultStatus}/>
        </div>
    );
};

export default PatientProgress;