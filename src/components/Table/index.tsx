// components/Table.tsx
import React from 'react';

interface TableProps {
  data: { id: number; description: string }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Descripción</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="py-2 px-4 border-b">{row.id}</td>
            <td className="py-2 px-4 border-b">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
