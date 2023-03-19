import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: 'S',
        amt: 25,
    },
    {
        name: 'M',
        amt: 10,
    },
    {
        name: 'T',
        amt: 5,
    },
    {
        name: 'W',
        amt: 50,
    },
    {
        name: 'T',
        amt: 55,
    },
    {
        name: 'F',
        amt: 70,
    },
    {
        name: 'S',
        amt: 80,
    },
    {
        name: 'S',
        amt: 35,
    },
    {
        name: 'M',
        amt: 11,
    },
    {
        name: 'T',
        amt: 22,
    },
    {
        name: 'W',
        amt: 44,
    },
    {
        name: 'T',
        amt: 60,
    },
    {
        name: 'F',
        amt: 89,
    },
    {
        name: 'S',
        amt: 73,
    },
];

const CustomBarChart= () => {
    return (
        <ResponsiveContainer id="barchart" width="110%" height="100%" aspect={4}>
            <BarChart
                width={440}
                height={170}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                barGap={11}
            >
                <XAxis 
                    dataKey="name"  
                    padding={{ left: 10, right: 10 }} 
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis      
                    ticks={[0,25,50,75,100]}    
                    axisLine={false}
                    tickLine={false}
                    tick={{textAnchor: "middle"}}
                />
                <Bar dataKey="amt" fill="#5700FB" background={{ fill: "#F3F3F3" }} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CustomBarChart