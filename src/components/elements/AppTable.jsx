import React from "react";
import Card from "./Card";

const AppTable = ({ tableData, tableHeader }) => {
  return (
    <Card>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeader &&
              tableHeader.map((tableHeader, index) => (
                <th key={index} scope="col" className="py-3 px-6">
                  {tableHeader}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((tableData, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {Object.keys(tableData).map(function (key) {
                  return (
                    <td key={key} className="py-4 px-6">
                      {tableData[key]}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
      {/* pagination */}
    </Card>
  );
};

export default AppTable;
