import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";

function FileCSV() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/export").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="FileCSV-global">
      <CSVLink
        data={data}
        filename={"Emmaus.csv"}
        separator=","
        enclosingCharacter=""
      >
        <button className="FileCSV-Btn">Export CSV</button>
      </CSVLink>
    </div>
  );
}

export default FileCSV;
