import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button, Box } from "@mui/material";

function Dashcard() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      variant="outlined"
      sx={{ marginTop: 2, height: "50%", backgroundColor: "#ECECEC" }}
    >
      <CardContent>
        <Box
          display={"inline-flex"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Typography color={"black"} fontWeight={"1000"} textAlign={"left"}>
            Accounts
          </Typography>
          <Button
            sx={{
              color: "black",
              "&:hover": { backgroundColor: "#969590", color: "#FFF" },
              mx: 2,
              border: 2,
              fontSize: 12,
              position: "relative",
              top: 10,
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Box>
        <Typography color={"black"} textAlign={"left"} fontSize={12}>
          Networth: <span style={{ fontWeight: 1000 }}>$18,978.17</span>
        </Typography>

        <Grid
          container
          direction="column"
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          sx={{ height: "20em", width: "100%" }}
          display={"inline-flex"}
        >
          <Grid
            item
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={"3em"}
            display={"inline-flex"}
            justifyContent={"space-between"}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Checking and Saving:
              <span style={{ fontWeight: 700 }}> $14,590.78</span>
            </Typography>
            <Button onClick={toggleExpansion} sx={{ color: "black" }}>
              <FontAwesomeIcon icon={faChevronDown} />
            </Button>
            {expanded && (
              <Grid
                container
                direction="column"
                alignItems={"flex-start"}
                justifyContent={"space-around"}
                sx={{ marginTop: 2 }}
              >
                <Grid
                  item
                  variant="outlined"
                  width={"100%"}
                  bgcolor={"white"}
                  borderRadius={2}
                  height={"auto"} // Auto height for expanded content
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography textAlign={"left"} padding={"5px"}>
                    Checking and Saving:
                    <span style={{ fontWeight: 700 }}> $14,590.78</span>
                  </Typography>
                  <Button sx={{ color: "black" }}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Button>
                </Grid>
                {/* Additional content for Checking and Saving */}
                <Grid item>
                  <Typography variant="body2" sx={{ marginLeft: 20 }}>
                    Checking Account Number: XXXX-XXXX-XXXX-XXXX
                  </Typography>
                  <Typography variant="body2" sx={{ marginLeft: 20 }}>
                    Saving Account Number: XXXX-XXXX-XXXX-XXXX
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid
            item
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={"3em"}
            display={"inline-flex"}
            justifyContent={"space-between"}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Investment: <span style={{ fontWeight: 700 }}> $4862.55</span>
            </Typography>
            <Button sx={{ color: "black" }}>
              <FontAwesomeIcon icon={faChevronDown} />{" "}
            </Button>
          </Grid>
          <Grid
            item
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={"3em"}
            display={"inline-flex"}
            justifyContent={"space-between"}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Loans: <span style={{ fontWeight: 700 }}> $0.00</span>
            </Typography>
            <Button sx={{ color: "black" }}>
              <FontAwesomeIcon icon={faChevronDown} />{" "}
            </Button>
          </Grid>
          <Grid
            item
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={"3em"}
            display={"inline-flex"}
            justifyContent={"space-between"}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Credit Cards: <span style={{ fontWeight: 700 }}> -$475.16</span>
            </Typography>
            <Button sx={{ color: "black" }}>
              <FontAwesomeIcon icon={faChevronDown} />{" "}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Dashcard;
