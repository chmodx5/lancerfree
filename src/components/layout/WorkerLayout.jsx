import React from "react";
import { WorkerNavBar } from "../blocks";
import Container from "@mui/material/container";

const WorkerLayout = ({ children }) => {
  return (
    <div>
      <WorkerNavBar />
      <Container
        sx={{
          py: 2,
        }}
      >
        {children}
      </Container>
    </div>
  );
};

export default WorkerLayout;
