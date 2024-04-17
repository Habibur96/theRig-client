// import { useQuery } from "@tanstack/react-query";

// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import UseAuth from "../../../Hooks/UseAuth";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   PieChart,
//   Pie,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const AdminHome = () => {
//   const { user } = UseAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const { data: stats = {} } = useQuery({
//     queryKey: ["admin-stats"],
//     queryFn: async () => {
//       const res = await axiosSecure("/admin-stats");

//       return res.data;
//     },
//   });

//   const { data: chartData = [] } = useQuery({
//     queryKey: ["chart-data"],
//     queryFn: async () => {
//       const res = await axiosSecure("/order-stats");
//       return res.data;
//     },
//   });

//   const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
//   const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${
//       x + width / 2
//     },${y + height / 3}
//     ${x + width / 2}, ${y}
//     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
//       x + width
//     }, ${y + height}
//     Z`;
//   };

//   const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//   };

//   const RADIAN = Math.PI / 180;
//   const renderCustomizedLabel = ({
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     percent,
//   }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text
//         x={x}
//         y={y}
//         fill="white"
//         textAnchor={x > cx ? "start" : "end"}
//         dominantBaseline="central"
//       >
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };
//   return (
//     <div className="w-full m-4">
//       <h2 className="text-3xl">Welcome, {user.displayName}</h2>
//       <div className="stats shadow">
//         <div className="stat">
//           <div className="stat-figure text-secondary">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="inline-block w-8 h-8 stroke-current"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               ></path>
//             </svg>
//           </div>
//           <div className="stat-title">Revenue</div>
//           <div className="stat-value">${stats.revenue}</div>
//           <div className="stat-desc">Jan 1st - Feb 1st</div>
//         </div>

//         <div className="stat">
//           <div className="stat-figure text-secondary">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="inline-block w-8 h-8 stroke-current"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//               ></path>
//             </svg>
//           </div>
//           <div className="stat-title">New Users</div>
//           <div className="stat-value">${stats.users}</div>
//           <div className="stat-desc">↗︎ 400 (22%)</div>
//         </div>
//         <div className="stat">
//           <div className="stat-figure text-secondary">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="inline-block w-8 h-8 stroke-current"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//               ></path>
//             </svg>
//           </div>
//           <div className="stat-title">Menu Items</div>
//           <div className="stat-value">${stats.products}</div>
//           <div className="stat-desc">↗︎ 400 (22%)</div>
//         </div>

//         <div className="stat">
//           <div className="stat-figure text-secondary">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="inline-block w-8 h-8 stroke-current"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
//               ></path>
//             </svg>
//           </div>
//           <div className="stat-title">Orders</div>
//           <div className="stat-value">{stats.orders}</div>
//           <div className="stat-desc">↘︎ 90 (14%)</div>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="w-1/2">
//           <BarChart
//             width={500}
//             height={300}
//             data={chartData}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="category" />
//             <YAxis />
//             <Bar
//               dataKey="total"
//               fill="#8884d8"
//               shape={<TriangleBar />}
//               label={{ position: "top" }}
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//               ))}
//             </Bar>
//           </BarChart>
//         </div>
//         <div className="w-1/2">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart width={400} height={400}>
//               <Legend></Legend>
//               <Pie
//                 data={chartData}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 label={renderCustomizedLabel}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="count"
//               >
//                 {chartData.map((entry, index) => (
//                   <Cell
//                     name={entry.category}
//                     key={`cell-${index}`}
//                     fill={colors[index % colors.length]}
//                   />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;



import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UseAuth from "../../../Hooks/UseAuth";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";

const AdminHome = () => {
  const { user } = UseAuth();
  const [axiosSecure] = useAxiosSecure();

// Example data
const exampleData = {
  users: 12,
  products: 405,
  orders: 16,
  revenue: 1614083,
};

// Set example data for all charts
const userData = [{ category: "Users", total: exampleData.users }];
const productData = [{ category: "Products", total: exampleData.products }];
const revenueData = [{ category: "Revenue", total: exampleData.revenue }];
const orderData = [{ category: "Orders", total: exampleData.orders }];

  // Define colors for chart elements
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Define custom bar shape
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Define function for rendering customized pie label
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full m-4">
      <h2 className="text-3xl">Welcome, {user.displayName}</h2>
      <div className="stats shadow">
        {/* Revenue */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${exampleData.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        {/* New Users */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">${exampleData.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        {/* Menu Items */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">${exampleData.products}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        {/* Orders */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{exampleData.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="flex">
        {/* Bar Chart */}
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={userData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {userData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Line Chart */}
        <div className="w-1/2">
          <LineChart
            width={500}
            height={300}
            data={productData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>

      <div className="flex">
        {/* Area Chart */}
        <div className="w-1/2">
          <AreaChart
            width={500}
            height={300}
            data={revenueData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Area type="monotone" dataKey="total" fill="#8884d8" />
          </AreaChart>
        </div>

        {/* Scatter Chart */}
        <div className="w-1/2">
          <ScatterChart
            width={500}
            height={300}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="category" type="category" />
            <YAxis dataKey="total" type="number" />
            <Scatter name="Data" data={orderData} fill="#8884d8" />
          </ScatterChart>
        </div>
      </div>

    </div>
  );
};

export default AdminHome;

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import UseAuth from "../../../Hooks/UseAuth";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   AreaChart,
//   Area,
//   ScatterChart,
//   Scatter,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";

// const AdminHome = () => {
//   const { user } = UseAuth();
//   const [axiosSecure] = useAxiosSecure();

//   // Example data
//   const exampleData = {
//     users: 12,
//     products: 405,
//     orders: 16,
//     revenue: 1614083,
//   };

//   // Set example data for all charts
//   const userData = [{ category: "Users", total: exampleData.users }];
//   const productData = [{ category: "Products", total: exampleData.products }];
//   const revenueData = [{ category: "Revenue", total: exampleData.revenue }];
//   const orderData = [{ category: "Orders", total: exampleData.orders }];

//   return (
//     <div className="w-full m-4">
//       <h2 className="text-3xl">Welcome, {user.displayName}</h2>
//       <div className="flex flex-wrap justify-between">
//         {/* Line Chart */}
//         <div className="w-full md:w-1/2 lg:w-1/4 p-4">
//           <h3 className="text-xl mb-2">Users Growth</h3>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={lineChartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="users" stroke="#8884d8" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         {/* Bar Chart */}
//         <div className="w-full md:w-1/2 lg:w-1/4 p-4">
//           <h3 className="text-xl mb-2">Products Overview</h3>
//           <ResponsiveContainer width="100%" height={200}>
//             <BarChart data={lineChartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="products" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         {/* Area Chart */}
//         <div className="w-full md:w-1/2 lg:w-1/4 p-4">
//           <h3 className="text-xl mb-2">Revenue Trend</h3>
//           <ResponsiveContainer width="100%" height={200}>
//             <AreaChart data={lineChartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Area type="monotone" dataKey="revenue" fill="#8884d8" />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//         {/* Scatter Chart */}
//         <div className="w-full md:w-1/2 lg:w-1/4 p-4">
//           <h3 className="text-xl mb-2">Order Distribution</h3>
//           <ResponsiveContainer width="100%" height={200}>
//             <ScatterChart data={lineChartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="users" type="number" />
//               <YAxis dataKey="orders" type="number" />
//               <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//               <Scatter name="Orders" data={lineChartData} fill="#8884d8" />
//             </ScatterChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;





