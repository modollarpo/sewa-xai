import React from 'react';
import { theme } from 'ui/theme';

interface ClinicalTableProps {
  columns: string[];
  data: any[];
  className?: string;
}

const ClinicalTable: React.FC<ClinicalTableProps> = ({ columns, data, className }) => (
  <table
    className={`min-w-full card mb-6 ${className || ''}`}
    style={{ borderRadius: theme.radii.card, boxShadow: theme.shadows.card }}
  >
    <thead style={{ background: '#F6F8F7' }}>
      <tr>
        {columns.map(col => (
          <th key={col} className="px-4 py-2 text-left font-semibold border-b" style={{ color: theme.colors.structure }}>{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.length === 0 ? (
        <tr><td colSpan={columns.length} className="px-4 py-2 text-gray-400 text-center">No data</td></tr>
      ) : (
        data.map((row, i) => (
          <tr key={i} className="hover:bg-[#FEF6ED]">
            {columns.map(col => (
              <td key={col} className="px-4 py-2 border-b">{row[col]}</td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  </table>
);

export default ClinicalTable;
