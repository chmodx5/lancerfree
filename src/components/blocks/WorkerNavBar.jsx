import react, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { NextLinkComposed } from "./../../Link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function WorkerNavBar() {
  const [appDrawer, setAppDrawer] = useState(false);

  const toggleAppDrawer = (appDrawerState) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAppDrawer(appDrawerState);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="span"
                  fontWeight={"bold"}
                >
                  Lancer
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="span"
                  fontWeight={"bold"}
                >
                  Free
                </Typography>
              </Box>

              <Box alignItems={"center"} sx={{ display: { xs: "flex" } }}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {[
                    {
                      name: "dashboard",
                      link: "/worker/",
                    },
                    {
                      name: "my tasks",
                      link: "/worker/tasks",
                    },
                    {
                      name: "freelancers",
                      link: "/worker/freelancers",
                    },
                  ].map((project) => (
                    <Button
                      key={project.name}
                      component={NextLinkComposed}
                      to={{
                        pathname: project.link,
                      }}
                      sx={{ color: "#fff" }}
                    >
                      {project.name}
                    </Button>
                  ))}
                </Box>
                <Tooltip title="Account settings">
                  <IconButton onClick={toggleAppDrawer(true)} size="small">
                    <Avatar alt="Remy Sharp">OW</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableDrawer
        anchor="right"
        open={appDrawer}
        onClose={toggleAppDrawer(false)}
        onOpen={toggleAppDrawer(true)}
      >
        <Box width={{ xs: 200, sm: 200, md: 500 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          modi eum praesentium dolorem quibusdam sequi amet, esse dignissimos
          omnis harum pariatur repellendus officia minus! Corrupti itaque magni
          ad libero facilis.
        </Box>
      </SwipeableDrawer>
    </>
  );
}
