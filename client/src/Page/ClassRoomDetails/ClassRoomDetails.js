import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../../component/Table/Table";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { ClassRoomHeader } from "./ClassRoomHeader/ClassRoomHeader";
import ClassPost from "./ClassPost/ClassPost";
import ResultUpload from "./Result/ResultUpload";

const ClassRoomDetails = () => {
  const [classRoom, setClassRoom] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://student-management-system-teacher-panel.vercel.app/api/${id}`);

        setClassRoom(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="  mt-8">
      <ClassRoomHeader classRoom={classRoom} />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Students" value="1" />
              <Tab label="Class Post" value="2" />
              <Tab label="Result" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Table Enrolled={classRoom} />
          </TabPanel>
          <TabPanel value="2">
            <ClassPost />
          </TabPanel>
          <TabPanel value="3">
            <ResultUpload></ResultUpload>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default ClassRoomDetails;
