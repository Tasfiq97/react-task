import React from "react";

const Table = ({ countries }) => {
  console.log("🚀 ~ file: Table.jsx:4 ~ Table ~ countries:", countries);
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, id) => {
            return (
              <tr>
                <td>{country.id}</td>
                <td>{country.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
