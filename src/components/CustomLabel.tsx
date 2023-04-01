import React from "react";

const CustomLabel: React.FC<{title: {content: string, x: number, y: number}, text: {content: string, x: number, y: number}[], [key:string]: any}> = props => {
    const {title, text, viewBox} = props
    const { cx, cy } = viewBox;
    return (
        <>
        <text x={cx - title.x} y={cy + title.y}>
            <tspan
            style={{
                fontWeight: 700,
                fill: "#00065A",
                textAlign: "left",
                font: "normal normal bold 24px/13px Poppins",
                fontSize: 'xx-large',
                letterSpacing: "0.48px",
                opacity: "1"
            }}
            >
                {title.content}
            </tspan>
        </text>
        {text.map(textFragment => 
            <text x={cx - textFragment.x} y={cy + textFragment.y}>
                <tspan
                style={{
                    textAlign: "left",
                    font: "normal normal normal 12px/12px Poppins",
                    letterSpacing: "0px",
                    fill: "#00065A",
                    opacity: "1"
                }}
                >
                    {textFragment.content}
                </tspan>
            </text>
        )}
        </>
    );
};

export default CustomLabel