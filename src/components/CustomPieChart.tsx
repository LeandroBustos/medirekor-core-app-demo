import * as React from 'react';
import { Cell, Pie, PieChart, Label } from 'recharts';
import CustomLabel from './CustomLabel';
const CustomPieChart: React.FC<{data?: {name: string, value: number}[], CenterTitle: {content: string, x: number, y: number}, CenterText: {content: string, x: number, y: number}[], [key:string]: any}> = props =>{
    const {data, CenterTitle, CenterText} = props
    const fillData = data || [
        { name: 'Group A', value: 1000 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 200 },
        { name: 'Group D', value: 100 },
    ];
    const COLORS:any = {
        "Group A": '#5700FB', 
        "Group B": '#E6D543', 
        "Group C": '#50E85D', 
        "Group D": '#EA356B'
    }
    return (
        <PieChart width={160} height={160}>
        <Pie
        data={data}
        cx={75}
        cy={75}
        innerRadius={50}
        outerRadius={60}
        fill="#8884d8"
        dataKey="value"
        >
        <Label viewBox={{
            endAngle: 0,
            startAngle: 0,
            width: 120,
            height: 120
        }} width='25' content={<CustomLabel title={CenterTitle} text={CenterText}/>} position='center' />
        {fillData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
        ))}
        </Pie>
    </PieChart>
    );
};

export default CustomPieChart