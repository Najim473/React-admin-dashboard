import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";
function RevenueTable() {
  const rows = [
    {
      id: 1632,
      product: "Dell",
      img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
      customer: "Michel",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 3242,
      product: "Dell 32",
      img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
      customer: "Michel 02",
      date: "3 March",
      amount: 400,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2345,
      product: "Dell 23",
      img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
      customer: "Michel 03",
      date: "21 March",
      amount: 700,
      method: "Cash on delivery",
      status: "Approved",
    },
    {
      id: 152345,
      product: "Dell S22",
      img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
      customer: "Michel 6",
      date: "14 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 12343,
      product: "Dell P23",
      img: "  https://i.ibb.co/py2G4ZB/6458905-sd.jpg",
      customer: "Michel 85",
      date: "10 March",
      amount: 300,
      method: "Online Payment",
      status: "Approved",
    },
  ];
  return (
    <div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RevenueTable;
