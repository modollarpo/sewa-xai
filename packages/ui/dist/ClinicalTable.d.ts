import React from 'react';
export interface ClinicalTableProps {
    columns: string[];
    data: any[];
}
declare const ClinicalTable: React.FC<ClinicalTableProps>;
export default ClinicalTable;
