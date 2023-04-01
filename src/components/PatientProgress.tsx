import React from 'react';
import traumaLogo from '../assets/images/ic_trauma.png'
import cardiologyLogo from '../assets/images/ic_cardiology.png'
import inTreatmentLogo from '../assets/images/ic_in-treatment.png'
import medicalConsultationLogo from '../assets/images/ic_medical_consultation.png'
import vaccineLogo from '../assets/images/ic_vacuna.png'

import ConsulStatusEtiquete from './ConsultStatusEtiquete';
import { CustomPoppinsBold, CustomPoppinsNormal } from './CustomParagraph';

const CONSULT_LOGO: Record<string, string> = {
    'TRAUMA': traumaLogo,
    'CARDIOLOGY': cardiologyLogo,
    'IN_TREATMENT': inTreatmentLogo,
    'MEDICAL_CONSULTATION': medicalConsultationLogo,
    'VACCINE': vaccineLogo
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
            <img 
            src={consultLogo}
            style={{
                width: "18px",
                height: "18px",
                background: `transparent 0% 0% no-repeat padding-box`,
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