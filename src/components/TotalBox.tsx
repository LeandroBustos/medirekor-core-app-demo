import * as React from 'react';

export const TotalBox = (props: {id: string, title: string, content: string}) => {
    const {id, title, content} = props
    return (
        <div 
            id={`total-${id}`}
            style={{
                width: "269px",
                height: "91px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 2px 3px #0000000D",
                borderRadius: "8px",
                opacity: "1"
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginLeft: "37px"
            }}>
                <p style={{
                    height: "17px",
                    marginTop: "24.5px",
                    marginBottom: "0px",
                    color: "#00065A",
                    textAlign: "left",
                    font: "normal normal normal 12px/12px Poppins",
                    letterSpacing: "0px",
                    wordBreak: "keep-all",
                    opacity: "1"
                }}>{title}</p>
                <p style={{
                    width: "16px",
                    height: "33px",
                    marginTop: "0px",
                    color: "#00065A",
                    textAlign: "left",
                    font: "normal normal bold 24px/13px Poppins",
                    letterSpacing: "0.48px",
                    opacity: "1"
                }}>
                    {content}
                </p>
            </div>
        </div>
    );
};