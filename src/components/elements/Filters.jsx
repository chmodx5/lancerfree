import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const Filters = () => {
  const FiltersContainer = ({ heading, children }) => (
    <Box mt={2}>
      <Typography
        variant="subtitle"
        textTransform={"capitalize"}
        fontWeight="medium"
      >
        {heading}
      </Typography>
      <Divider />
      <Box mt={1}>{children}</Box>
    </Box>
  );
  return (
    <CardContent>
      <Typography variant="h6" fontWeight="bold">
        Filters
      </Typography>
      <FiltersContainer heading="price"></FiltersContainer>
      <FiltersContainer heading="skills"></FiltersContainer>
      <FiltersContainer heading="location"></FiltersContainer>
    </CardContent>
  );
};

export default Filters;
