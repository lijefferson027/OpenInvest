import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const TextBoxContainerStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #3BC086",
  borderRadius: "8px",
  padding: "10px",
};

const GrayTextStyle = {
  color: "#69747C",
  textAlign: "left",
};

const BoldGrayTextStyle = {
  ...GrayTextStyle,
  fontWeight: "bold",
};

export default function Textbox({ dollarAmount, title }) {
  return (
    <Container style={TextBoxContainerStyle} maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography style={BoldGrayTextStyle} variant="h5">{dollarAmount}</Typography>
          <Typography style={GrayTextStyle} variant="body1">{title}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
