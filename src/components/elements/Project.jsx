import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const Project = ({
  title,
  description,
  budget_max,
  budget_min,
  skills,
  clientRating,
  location,
  bids,
  average_bid,
}) => {
  return (
    <Box>
      <Box display="flex" mb={2} justifyContent="space-between">
        <Box>
          <Typography
            variant="h6"
            component={"h5"}
            fontWeight="bold"
            color="primary"
          >
            {title}
          </Typography>
          <Typography variant="subtitle2" fontStyle="italic" component={"div"}>
            Budet min {budget_min} max {budget_max}
          </Typography>
        </Box>

        <Box>
          <Typography fontWeight="bold" component={"div"}>
            {bids} bids
          </Typography>
          <Typography variant="caption" component={"div"}>
            kes {average_bid} average bid
          </Typography>
        </Box>
      </Box>

      <Typography mb={2}>{description}</Typography>
      <Box display={"flex"} gap={1} mb={2}>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} size={"small"} variant="outlined" />
        ))}
      </Box>
      <Box display={"flex"} alignItems={"center"} mb={2}>
        <Rating
          name="half-rating-read"
          defaultValue={0}
          precision={0.5}
          value={clientRating}
          readOnly
        />
        <Typography ml={1}>{clientRating}</Typography>
        <Box
          display={"flex"}
          ml={1}
          textTransform="capitalize"
          alignItems={"center"}
        >
          <MyLocationIcon />
          {location}
        </Box>
      </Box>

      <Divider />
    </Box>
  );
};

export default Project;
