import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'M1', cost: 4000, savings: 500 },
  { name: 'M2', cost: 4000, savings: 1200 },
  { name: 'M3', cost: 4000, savings: 2800 },
  { name: 'M4', cost: 4000, savings: 4500 },
  { name: 'M5', cost: 4000, savings: 6000 },
  { name: 'M6', cost: 4000, savings: 8500 },
];

export const RechartsWrapper: React.FC = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
          <XAxis dataKey="name" fontSize={10} stroke="#444" tickLine={false} axisLine={false} tick={{fill: '#A1A1AA'}} />
          <YAxis fontSize={10} stroke="#444" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} tick={{fill: '#A1A1AA'}} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#171717', borderRadius: '8px', border: '1px solid #333333', color: '#FCFAF5' }}
            cursor={{fill: '#D4AF3720'}}
            itemStyle={{ fontSize: '12px' }}
          />
          <Bar dataKey="cost" fill="#333333" radius={[4, 4, 0, 0]} name="Cost" />
          <Bar dataKey="savings" fill="#D4AF37" radius={[4, 4, 0, 0]} name="Savings" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};