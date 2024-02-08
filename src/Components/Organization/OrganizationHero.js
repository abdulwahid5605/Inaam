import React from "react";
import { Box, Typography } from "@material-ui/core";

const OrganizationHero = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: "url('/cyber.jpg')",
          color: "white",
          width: "100%",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box style={{ width: "70%", padding: "2vmax" }}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontWeight: "bold", fontStyle: "italic" }}
          >
            Organization & Doghandlers
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            metus vestibulum, condimentum dui at, ullamcorper risus. Morbi id
            ante id arcu tincidunt volutpat. Nulla facilisi. Nulla id luctus
            metus. Duis auctor mi eget erat convallis fermentum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempora tenetur vel
            magni alias accusamus dolorum enim maxime necessitatibus rem iure
            dolore nesciunt amet ullam a velit sunt, voluptatum perferendis
            placeat.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default OrganizationHero;
