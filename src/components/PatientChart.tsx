import React from "react";
import { useOutletContext } from "react-router-dom";
import { CustomPoppinsBold, CustomPoppinsNormal, CustomPoppinsNormalLong } from "./CustomParagraph";
import { PatientDataBox } from "./PatientData";
import PatientMedicalEtiquetes from "./PatientMedicalEtiquetes";
import VitalSign from "./VitalSign";

import imgPatientDefaultMinWaiting from '../assets/images/img_patient_encounters_default_min_waiting.png'
import imgPatientDefaultDischarged from '../assets/images/img_patient_encounters_default_discharged.png'
import imgPatientDefaultInternship from '../assets/images/img_patient_encounters_default_internship.png'

import { lorem2 } from '../constants/strings';

const patientImages: any = {
    "MIN_WAITING": imgPatientDefaultMinWaiting,
    "DISCHARGED": imgPatientDefaultDischarged,
    "INTERNSHIP": imgPatientDefaultInternship
}

const PatientChart = () => {
    const outletContext: any = useOutletContext()
    const {patient} = outletContext
    return (
        <div
        id="patient-chart-body-content-box"
        style={{
            width: "100%",
            height: "549px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px"
        }}
    >
        <div
            id="patient-chart-consult-data-box"
            style={{
                width: "282px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 2px 3px #0000000D",
                borderRadius: "8px",
                opacity: "1",
                gap: "41px"
            }}
        >
            <PatientDataBox
                index={0}
                path="chart"
                patientImg={patientImages.DISCHARGED}
                patientData={{
                    fullname: `${patient?.name} ${patient?.last_name}`,
                    birthdate: `${patient?.birthday}`,
                    os: `${patient?.os}`,
                }}
                gapPhoto="9px"
                width='233px'
            />
            <div
                id="patient-chart-extra-data-box"
                style={{
                    height: "420px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "11px",
                    borderTop: "2px solid #EFEEEE"
                }}
            >
                <div
                    id="patient-chart-notes-data-box"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "7px"
                    }}
                >
                    <div
                        id="patient-chart-note-1"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CustomPoppinsBold 
                            content="Reason for visit"
                            size="12px/18px"
                        />
                        <CustomPoppinsNormalLong
                            content={lorem2}
                            width="234px"
                        />
                    </div>
                    <div
                        id="patient-chart-note-2"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CustomPoppinsBold 
                            content="Consultation Notes"
                            size="12px/18px"
                        />
                        <CustomPoppinsNormalLong
                            content={lorem2}
                            width="234px"
                        />
                    </div>
                </div>
                <div
                    id="patient-chart-vital-signs-data-box"
                    style={{
                        height: "220px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: "12px"
                    }}
                >
                    <CustomPoppinsBold
                        content='Vital Signs'
                    />
                    <VitalSign
                        type='HEIGHT'
                        contentKey='Height'
                        contentValue={patient?.vital_signs.height}
                    />
                    <VitalSign
                        type='WEIGHT'
                        contentKey='Weight'
                        contentValue={patient?.vital_signs.weight}
                    />
                    <VitalSign
                        type='BODY_MASS'
                        contentKey='Body Mass Index'
                        contentValue={patient?.vital_signs.body_mass_index}
                    />
                    <VitalSign
                        type='TEMPERATURE'
                        contentKey='Temperature'
                        contentValue={patient?.vital_signs.temperature}
                    />
                    <VitalSign
                        type='CARDIAC'
                        contentKey='Respiratory Rate'
                        contentValue={patient?.vital_signs.respiratory_rate}
                    />
                    <VitalSign
                        type='CARDIAC'
                        contentKey='Heart Rate'
                        contentValue={patient?.vital_signs.heart_rate}
                    />
                    <VitalSign
                        type='BODY_FAT'
                        contentKey='Body Fat Percentage'
                        contentValue={patient?.vital_signs.body_fat_percentaje}
                    />
                </div>
            </div>
        </div>
        <div
            id="patient-chart-medical-history-container"
            style={{
                width: "816px",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 2px 3px #0000000D",
                borderRadius: "8px",
                opacity: "1",
                gap: "24px"
            }}
        >
            <div
                id='patient-chart-medical-history-medic-data-box'
                style={{
                    width: "304px",
                    height: "540px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "30px"
                }}
            >
                <PatientMedicalEtiquetes
                    id="allergies"
                    color="#E5BF42"
                    title="Allergies"
                    content={patient?.allergies}
                    width="100px"
                    height="17px"
                />
                <PatientMedicalEtiquetes
                    id="vaccines"
                    color="#42CFE5"
                    title="Vaccines"
                    content={patient?.vaccines}
                    width="90px"
                    height="17px"
                />
                <PatientMedicalEtiquetes
                    id="active-medication"
                    color="#DC43CD "
                    title="Active Medication"
                    content={patient?.active_medication}
                    width="109px"
                    height="17px"
                />
                <PatientMedicalEtiquetes
                    id="chronic-diseases"
                    color="#EA356B  "
                    title="Chronic Diseases"
                    content={patient?.chronic_diseases}
                    width="109px"
                    height="17px"
                />
            </div>
            <span
                style={{
                    border: "1px solid #EFEEEE",
                    height: "100%"
                }}
            />
            <div
                id='patient-chart-medical-history-extra-data-container'
                style={{
                    width: "380px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "79px"
                }}
            >
                <div
                    id="patient-surgeries-box"
                    style={{
                        width:"348px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "13px"
                    }}
                >
                    <CustomPoppinsBold
                        content="Past Surgeries"
                        size="18px/21px"
                        height="45px"
                        borderBottom="2px solid #EFEEEE"
                        marginBottom="0px"
                    />
                    {patient?.past_surgeries?.map((surgerie: any, index: number) => 
                        <div
                            id={`patient-surgery-${index}`}
                            style={{
                                height: "45px",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "177px",
                                borderBottom: "2px solid #EFEEEE",

                            }}
                        >
                            <CustomPoppinsNormal
                                content={surgerie.name}
                            />
                            <CustomPoppinsNormal
                                content={surgerie.date}
                            />
                        </div>
                    )}
                </div>
                <div
                    id="patient-insurance-box"
                    style={{
                        width:"348px",
                        height: "223px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "13px"
                    }}
                >
                    <CustomPoppinsBold
                        content="Insurance"
                        size="18px/21px"
                        height="45px"
                        borderBottom="2px solid #EFEEEE"
                        marginBottom="0px"
                    />
                    <div
                        id="patient-insurance-data-0"
                        style={{
                            height: "45px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "177px",
                            borderBottom: "2px solid #EFEEEE",

                        }}
                    >
                        <CustomPoppinsNormal
                            content="Insurance Provider"
                        />
                        <CustomPoppinsNormal
                            content={patient?.insurance.provider}
                        />
                    </div>
                    <div
                        id="patient-insurance-data-1"
                        style={{
                            height: "45px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "177px",
                            borderBottom: "2px solid #EFEEEE",
                        }}
                    >
                        <CustomPoppinsNormal
                            content="Group ID"
                        />
                        <CustomPoppinsNormal
                            content={patient?.insurance.group_id}
                        />
                    </div>
                    <div
                        id="patient-insurance-data-2"
                        style={{
                            height: "45px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "177px",
                            borderBottom: "2px solid #EFEEEE",

                        }}
                    >
                        <CustomPoppinsNormal
                            content="Member ID"
                        />
                        <CustomPoppinsNormal
                            content={patient?.insurance.member_id}
                        />
                    </div>
                    <div
                        id="patient-insurance-data-3"
                        style={{
                            height: "45px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "177px",
                            borderBottom: "2px solid #EFEEEE",

                        }}
                    >
                        <CustomPoppinsNormal
                            content="PCP"
                        />
                        <CustomPoppinsNormal
                            content={patient?.insurance.pcp}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PatientChart