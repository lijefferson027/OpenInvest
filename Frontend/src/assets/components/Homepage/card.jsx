import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Dashcard() {
  return (
    <Card
      variant="outlined"
      sx={{ marginTop: 6, height: "30%", backgroundColor: "#ECECEC" }}
    >
      <CardContent>
        <CardHeader
          sx={{ display: "contents" }}
          title={
            <Typography color={"black"} textAlign={"left"} fontWeight={"1000"}>
              Accounts
            </Typography>
          }
          subheader={
            <Typography color={"black"} textAlign={"left"} fontSize={12}>
              Networth: <span style={{ fontWeight: 1000 }}>$18,978.17</span>
            </Typography>
          }
        />
        <Grid
          container
          direction="column"
          alignItems={"flex-start"}
          justifyContent={"space-around"}
          sx={{ height: "11em" }}
          marginTop={2}
        >
          <Grid
            item
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={"2em"}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Checking and Saving:
              <span style={{ fontWeight: 700 }}> $14,590.78</span>
            </Typography>
          </Grid>
          <Grid
            item
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={"2em"}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Investment: <span style={{ fontWeight: 700 }}> $4862.55</span>
            </Typography>
          </Grid>
          <Grid
            item
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={"2em"}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Loans: <span style={{ fontWeight: 700 }}> $0.00</span>
            </Typography>
          </Grid>
          <Grid
            item
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={"2em"}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Credit Cards: <span style={{ fontWeight: 700 }}> -$475.16</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Dashcard;
