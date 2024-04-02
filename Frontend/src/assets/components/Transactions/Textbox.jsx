import { Container, Typography } from "@mui/material";
import "./Textbox.css"; // Import CSS file

export default function Textbox({ dollarAmount, title }) {
  return (
    <Container className="textbox-container">
      <Typography className="gray-text" variant="body1">{title}</Typography>
      <Typography className="bold-gray-text" variant="h3">{dollarAmount}</Typography>
    </Container>
  );
}
