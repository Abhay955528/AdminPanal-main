//import React from 'react'

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,

} from "recharts";
// import { PieChart, Pie, Sector, Cell } from "recharts";
// import Card from "react-bootstrap/Card";

// import Card from '../Card/Card'
import "./DashBoard.css";
//import  Package from '../../../package.json';

function DashBoard() {
  const data1 = [
    { name: "jan", value: 400 },
    { name: "feb", value: 600 },
    { name: "Mar", value: 100 },
    { name: "April", value: 700 },
    { name: "May", value: 900 },
    { name: "June", value: 900 },
  ];
  const data5 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  // const data = [
  //   { name: "Group A", value: 600 },
  //   { name: "Group B", value: 150 },
  //   { name: "Group C", value: 400 },
  //   { name: "Group D", value: 600 },
  // ];
  // const COLORS = ["lightgreen", "purple", "purple", "orange"];

  //const version = process.env.version;
  //console.log(Package.version);

  return (
    <>
      <div className="DashboadMainDin">
        <div className="DashBordCard">
          <div className="card-content">
            <p>Total Revenue</p>
            <h3>$6659</h3>
          </div>
          <div
            style={{ borderLeft: "5px solid brown" }}
            className="card-content"
          >
            <p>Total Revenue</p>
            <h3>$6659</h3>
          </div>
          <div
            style={{ borderLeft: "5px solid yellow" }}
            className="card-content"
          >
            <p>Total Revenue</p>
            <h3>$6659</h3>
          </div>
          <div style={{ borderLeft: "5px solid red" }} className="card-content">
            <p>Total Revenue</p>
            <h3>$6659</h3>
          </div>
        </div>

        <div className="DetailCard">
          <div className="cardsrevenue">
            <h3 className="dashboardHeading">Revenue Report </h3>
            <LineChart
            className=""
              width={315}
              height={260}
              data={data1}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            // style={{height:'100%' , width:'100%'}}

            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 0 }}
              />
            </LineChart>
          </div>

          <div className="cardsrevenue">
            <div className="recentordersmain">
              <h4 className="dashboardHeading">Recent Orders</h4>
              <table className="DashboardTable">
                <thead>
                  <th> Aata Buscuit #64548</th>

                  <th>Data Placed 5/1/22</th>

                  <th>Price $250.00</th>

                  <th>Order Status Completed</th>


                </thead>
              </table>
              <table  className="DashboardTable">
                <thead>
                  <th> Aata Buscuit 26-08-2022</th>

                  <th>Data Placed 5/1/22</th>

                  <th>Price $250.00</th>

                  <th>Order Status Completed</th>


                </thead>
              </table>
              <table  className="DashboardTable">
                <thead>
                  <th> Aata Buscuit #64548</th>

                  <th>Data Placed 5/1/22</th>

                  <th>Price $250.00</th>

                  <th>Order Status Completed</th>


                </thead>
              </table>
            </div>
          </div>
        </div>

        <div className="DetailCard2">
          <div className="rechart2">
            <h4 className="dashboardHeading">Earning</h4>
            <ResponsiveContainer>
              <LineChart data={data5}
               margin={{
                top: 20,
                right: 30,
                left: -2,
                bottom: 50,
              }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"  />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="transition">
            <div style={{ padding: "1px", gap: '15% ' }} className="str">
              <h5 style={{ padding: "10px" }}>Transaction</h5>
              <div className="found" style={{ display: 'flex' }}>
                <span style={{ width: '60%', padding: '10px' }}>
                  <h6> Wallets</h6>
                  <p style={{ marginTop: '.5rem' }}>Starbucks</p>
                </span>
                <div style={{ marginTop: '.8rem' }} className="vals1">-$74</div>
              </div>

              <div className="found" style={{ display: 'flex', marginTop: '.8rem' }}>
                <span style={{ width: '60%', padding: '10px' }}>
                  <h6> Wallets</h6>
                  <p style={{ marginTop: '.5rem' }}>Starbucks</p>
                </span>
                <div style={{ marginTop: '.8rem' }} className="vals1">-$74</div>
              </div>
              <div className="found" style={{ display: 'flex', marginTop: '.8rem' }}>
                <span style={{ width: '60%', padding: '10px' }}>
                  <h6> Wallets</h6>
                  <p style={{ marginTop: '.5rem' }}>Starbucks</p>
                </span>
                <div style={{ marginTop: '.8rem' }} className="vals1">-$74</div>
              </div>
              <div className="found" style={{ display: 'flex', marginTop: '.8rem' }}>
                <span style={{ width: '60%', padding: '10px' }}>
                  <h6> Wallets</h6>
                  <p style={{ marginTop: '.5rem' }}>Starbucks</p>
                </span>
                <div style={{ marginTop: '.8rem' }} className="vals1">-$74</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
