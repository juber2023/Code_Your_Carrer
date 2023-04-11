import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from 'recharts';

const Statistics = () => {
    const assignmentMarks=[
        {   
            name:'A1',
            id:1,
            marks:57
        },
        {   
            name:'A2',
            id:2,
            marks:60
        },
        {   
            name:'A3',
            id:3,
            marks:60
        },
        {   
            name:'A4',
            id:4,
            marks:60
        },
        {   
            name:'A5',
            id:5,
            marks:60
        },
        {   
            name:'A6',
            id:6,
            marks:60
        },
        {   
            name:'A7',
            id:7,
            marks:60
        },
    ]
    return (
        <div>
            <h1 className='font-semibold text-2xl text-center p-16 bg-violet-50'>Assignment Marks</h1>
            <div className='flex flex-col justify-center items-center my-10'>
        <ComposedChart
          width={1000}
          height={500}
          data={assignmentMarks}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
            <Line dataKey='marks' stroke="#ff7300"></Line>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="marks" barSize={20} fill="#413ea0" />
            <Legend />
            <Tooltip />
        </ComposedChart>
      </div>
        </div>
        
    );
};

export default Statistics;