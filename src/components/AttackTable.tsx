import { memo } from "react";
import { Attack } from "@/types/pokemon";
import { typeColor } from "@/lib/type-colors";

interface AttackTableProps {
  attacks: Attack[];
}

function AttackTable({ attacks }: AttackTableProps) {
  if (!attacks || attacks.length === 0) {
    return <p className="text-gray-400 text-sm">No attacks</p>;
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-500">
          <th className="pb-1 font-medium">Name</th>
          <th className="pb-1 font-medium">Type</th>
          <th className="pb-1 font-medium text-right">Damage</th>
        </tr>
      </thead>
      <tbody>
        {attacks.map((attack) => (
          <tr key={attack.name} className="border-t border-gray-100">
            <td className="py-1.5 text-gray-800">{attack.name}</td>
            <td className="py-1.5">
              <span
                className="px-1.5 py-0.5 rounded text-xs text-white"
                style={{ backgroundColor: typeColor(attack.type) }}
              >
                {attack.type}
              </span>
            </td>
            <td className="py-1.5 text-right font-medium text-gray-800">
              {attack.damage}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(AttackTable);
