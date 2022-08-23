import React from "react";
// import { Project } from "../../Components/elements/index";
import { WorkerLayout } from "./../../src/components/layout/index";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Project, Filters } from "./../../src/components/elements/index";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { NextLinkComposed } from "./../../src/Link";

const index = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "main feed lorem Lorem ipsum dolor, sit amet consectetur adipisicingelit. Enim, debitis qui. Soluta iusto minus cupiditate dolorem au cum, alias aliquam sunt, a, accusamus autem veritatis ab teneturquos provident eius?",
      budget_min: 50,
      budget_max: 100,
      skills: ["html", "javascript  "],
      clientRating: 3,
      location: "thika",
      bids: 10,
      average_bid: 70,
    },
    {
      title: "Project 2",
      description:
        "Project 2 main feed lorem Lorem ipsum dolor, sit amet consectetur adipisicingelit. Enim, debitis qui. Soluta iusto minus cupiditate dolorem au cum, alias aliquam sunt, a, accusamus autem veritatis ab teneturquos provident eius?",
      budget_min: 50,
      budget_max: 100,
      skills: ["html", "javascript  "],
      clientRating: 3,
      location: "thika",
      bids: 10,
      average_bid: 70,
    },
    {
      title: "Project 3",
      description:
        "Project 3 main feed lorem Lorem ipsum dolor, sit amet consectetur adipisicingelit. Enim, debitis qui. Soluta iusto minus cupiditate dolorem au cum, alias ali autem veritatis ab teneturquos provident eius?",
      budget_min: 50,
      budget_max: 100,
      skills: ["html", "javascript  "],
      clientRating: 3,
      location: "thika",
      bids: 10,
      average_bid: 70,
    },
  ];

  return (
    <div className=" grid grid-cols-12 space-x-3">
      <Grid container spacing={2}>
        <Grid item md="3">
          <Card
            sx={{
              padding: 1,
            }}
          >
            <Filters />
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card
            sx={{
              padding: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Projects
              </Typography>

              <Box>
                <Typography>SortBy</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="caption" component={"small"}>
                showing 1 -20 of 300 projects
              </Typography>
            </Box>
            <Box>
              <List>
                {projects.map((project) => (
                  <ListItem key={project.id}>
                    <Project
                      title={project.title}
                      description={project.description}
                      budget_max={project.budget_max}
                      budget_min={project.budget_min}
                      skills={project.skills}
                      clientRating={project.clientRating}
                      location={project.location}
                      bids={project.bids}
                      average_bid={project.average_bid}
                    />
                  </ListItem>
                ))}
              </List>
              <Pagination
                page={1}
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    component={NextLinkComposed}
                    to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <WorkerLayout>{page}</WorkerLayout>;
};
