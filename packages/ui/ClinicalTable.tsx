import React from 'react';


export interface ClinicalTableProps {
  columns: string[];
  data: any[];
}

const ClinicalTable: React.FC<ClinicalTableProps> = ({ columns, data }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px 0 rgba(41, 198, 177, 0.08)' }}>
    <thead>
      <tr>
        {columns.map(col => (
          <th key={col} style={{ textAlign: 'left', padding: 12, fontWeight: 700, background: '#FEF6ED', color: '#0D4F3D' }}>{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
          {columns.map(col => (
            <td key={col} style={{ padding: 12 }}>{row[col]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default ClinicalTable;
