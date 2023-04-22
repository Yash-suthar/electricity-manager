import { useEffect, useState } from "react";
import axios from "axios";
function Bills() {
  const [bills, setBills] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const fatchedData = await axios.get("http://localhost:3002/user/bills");
      setBills(fatchedData.data.result.bills);
    }
    fetchData();
  }, []);
  return (
    <div class="bg-dark">
      <div class="container pt-5">
        <h1 class="text-white">INVOICES</h1>
        <table class="table table-striped table-dark table-table-responsive-md mt-4">
          <thead>
            <tr>
              <th scope="row">sr.no</th>
              <th scope="row">Time</th>
              <th scope="row">Date</th>
              <th scope="row">Power Consumption (Watt)</th>
              <th scope="row">Total Amount (Inr)</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((value, index) => {
              return (
                <tr>
                  <th scope="row" style={{ padding: "10px" }}>
                    {index + 1}
                  </th>
                  <td>{new Date(value.date).toLocaleTimeString()}</td>
                  <td>{new Date(value.date).toLocaleDateString()}</td>
                  <td>{value.totalConsumption}</td>
                  <td>{value.totalAmount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bills;
