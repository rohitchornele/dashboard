import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const DashboardOrders = () => {
  return (
    <>
      <div className="flex flex-col bg-[#20202b] p-4 h-full rounded-md md:w-[97%] ml-3 gap-2">
        <div className="heading">
          <h2 className="text-2xl font-bold text-[#f8fafd]">Recent Orders</h2>
        </div>
        <div className="order-table">
          <OrderData />
        </div>
      </div>
    </>
  );
};

export default DashboardOrders;

function OrderData() {
  const orderList = [
    {
      id: "66b339375f1362d4a1192c39",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZUUzPWexwYFKYLr3eR81HIW6UGWZcAKoSQ&s",
      name: "Bonnie Arnold",
      orederId: 4546409,
      amount: 14844,
      status: "Delivered",
    },
    {
      id: "66b33937b8043b48af857ead",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTWMdWCC7GdXFGOq9XDB5BVC-Clp7kq4oGA&s",
      name: "Page Mcclain",
      orederId: 2188767,
      amount: 18700,
      status: "Delivered",
    },
    {
      id: "66b339376d4430e7fd740247",
      picture:
        "https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-260nw-2460702995.jpg",
      name: "Rosario Dunn",
      orederId: 3815489,
      amount: 14476,
      status: "Pending",
    },
    {
      id: "66b33937702e73e599f05515",
      picture:
        "https://shotkit.com/wp-content/uploads/2021/02/black_and-white_portraits_christopher_campbell.jpg",
      name: "Lupe Howe",
      orederId: 8199172,
      amount: 11609,
      status: "Canceled",
    },
    {
      id: "66b339372c0ea845f05b0201",
      picture:
        "https://images.squarespace-cdn.com/content/v1/54ee6b54e4b094722873774d/1651271676233-EJSOCKU9OE5ZKGALLAH4/232.jpg?format=2500w",
      name: "Joseph Sanders",
      orederId: 4049682,
      amount: 5247,
      status: "Delivered",
    },
  ];

  return (
    <TableContainer>
      <Table
        className="w-full bg-[#20202b] text-green-500"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <div className="text-[#f8fafd] font-bold text-lg">
                Cutomer
              </div>{" "}
            </TableCell>
            <TableCell>
              {" "}
              <div className="text-[#f8fafd] font-bold text-lg">Order No.</div>
            </TableCell>
            <TableCell>
              {" "}
              <div className="text-[#f8fafd] font-bold text-lg">Amount</div>
            </TableCell>
            <TableCell>
              {" "}
              <div className="text-[#f8fafd] font-bold text-lg">Status</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((order) => (
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <div className="flex items-center gap-2 text-[#f8fafd]">
                  <Avatar src={order.picture} />{" "}
                  <div className="text-[#f8fafd]">{order.name}</div>
                </div>
              </TableCell>
              <TableCell className="text-[#f8fafd]">
                <div className="text-[#f8fafd]">{order.orederId}</div>
              </TableCell>
              <TableCell>
                <div className="text-[#f8fafd]">{order.amount}</div>
              </TableCell>
              <TableCell>
                <div className="flex justify-start">
                  <div className="bg-[#d51d1d47] rounded-full text-[#fb1e1e] text-center px-3 py-1"
                  style={{ 
                    background: order.status === "Delivered" ? "#15803c47" : "#d51d1d47",
                    color: order.status === "Delivered" ? "#05b545" : "#fb1e1e" 
                    }}>
                    {order.status}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

