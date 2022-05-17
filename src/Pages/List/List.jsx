import React from "react";
import Datatable from "../../components/Datatable/Datatable";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./List.scss";
function List() {
  return (
    <div className="list">
      <Sidebar />
      {/* <Navbar/> */}
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}
export default List;
