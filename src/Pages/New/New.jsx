import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./New.scss";
import { useState } from "react";
function New({ inputs, title }) {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              // src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Upload image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label> {input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
            </form>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
