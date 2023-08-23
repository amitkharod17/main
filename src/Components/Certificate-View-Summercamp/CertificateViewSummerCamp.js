import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import QR from "./fox.jpg";

import { Modal, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

import "./CertificateViewSummerCamp.css";
import Axios from "axios";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

function CertificateViewSummerCamp() {
  const [modalShow, setModalShow] = React.useState(false);
  const [certificateIndex, setCertificateIndex] = useState("");

  const [resdata, setResData] = useState([]);

  useEffect(() => {
    const responseData = Axios.get(`/api/summercamp2022/certis/`).then(
      (res) => {
        console.log("res: ", res);
        setResData(res.data.data);
        console.log("resData: ", resdata);
      }
    );
  }, []);

  const columns = [
    {
      name: "Name",
      options: {
        filterOptions: { fullWidth: true },
      },
    },

    "School",
    { name: "Class" },
    "CertiId",
    {
      name: "CertiLink",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          console.log(value, "daasdas");
          return (
            <a target="_blank" href={value}>
              View
            </a>
          );
        },
      },
    },
  ];

  const options = {
    download: false,
    print: false,
    filter: false,
    rowsPerPage: 100,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  return (
    <div className="certificateDiv">
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"SummerCamp 2022 Participant List"}
            data={resdata}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>

      {/* <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}> */}
      {/* <MUIDataTable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      /> */}
      {/* </ThemeProvider>
      </CacheProvider> */}
    </div>
  );
}

export default CertificateViewSummerCamp;
