import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button, Box } from "@mui/material";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";

axios.defaults.baseURL = "http://localhost:8000";

function PlaidAuth({ publicToken }) {
  useEffect(() => {
    async function fetchData() {
      let accessToken = await axios.post("/exchange_public_token", {
        public_token: publicToken,
      });
      console.log("access token ", accessToken.data);

      const auth = await axios.post("/auth", {
        access_token: accessToken.data.accessToken,
      });

      console.log("auth data ", auth.data);
    }
  }, []);
}

function Dashcard() {
  const [expanded, setExpanded] = useState({
    checkingAndSaving: false,
    investment: false,
    loans: false,
    creditCards: false,
  });

  const toggleExpansion = (section) => {
    setExpanded({ ...expanded, [section]: !expanded[section] });
  };

  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();

  useEffect(() => {
    async function fetch() {
      const response = await axios.post("/create_link_token");
      setLinkToken(response.data.link_token);
      console.log("response ", response.data);
    }
    fetch();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      setPublicToken(public_token);
      console.log("success", public_token, metadata);
    },
  });

  return (
    <Card
      variant="outlined"
      sx={{
        marginTop: 2,
        backgroundColor: "#ECECEC",
        maxWidth: 1000,
        margin: "auto",
      }}
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
            onClick={() => open()}
            disabled={!ready}
          >
            Add Accounts
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
          sx={{ width: "100%", marginTop: 2 }}
        >
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={expanded.checkingAndSaving ? "10em" : "3em"}
            sx={{ marginBottom: 1 }}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Checking and Saving:
              <span style={{ fontWeight: 700 }}> $14,590.78</span>
            </Typography>
            {expanded.checkingAndSaving && (
              <Grid item sx={{ marginLeft: 2 }}>
                <Typography variant="body2">
                  Checking Account Number: XXXX-XXXX-XXXX-XXXX
                </Typography>
                <Typography variant="body2">
                  Saving Account Number: XXXX-XXXX-XXXX-XXXX
                </Typography>
              </Grid>
            )}
            {expanded.checkingAndSaving && (
              <Button
                onClick={() => toggleExpansion("checkingAndSaving")}
                sx={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            )}
            {!expanded.checkingAndSaving && (
              <Button
                onClick={() => toggleExpansion("checkingAndSaving")}
                sx={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            )}
          </Grid>

          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={expanded.investment ? "10em" : "3em"}
            sx={{ marginBottom: 1 }}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Investment: <span style={{ fontWeight: 700 }}> $4862.55</span>
            </Typography>
            {expanded.investment && (
              <Grid item sx={{ marginLeft: 2 }}>
                <Typography variant="body2">
                  Fidelity: XXXX-XXXX-XXXX-XXXX
                </Typography>
                <Typography variant="body2">
                  Robinhood: XXXX-XXXX-XXXX-XXXX
                </Typography>
              </Grid>
            )}
            {expanded.investment && (
              <Button
                onClick={() => toggleExpansion("investment")}
                sx={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            )}
            {!expanded.investment && (
              <Button
                onClick={() => toggleExpansion("investment")}
                sx={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            )}
          </Grid>

          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={expanded.loans ? "10em" : "3em"}
            sx={{ marginBottom: 1 }}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Loans: <span style={{ fontWeight: 700 }}> $0.00</span>
            </Typography>
            {expanded.loans && (
              <Grid item sx={{ marginLeft: 2 }}>
                <Typography variant="body2">
                  Auto Loan: XXXX-XXXX-XXXX-XXXX
                </Typography>
                <Typography variant="body2">
                  House Loan: XXXX-XXXX-XXXX-XXXX
                </Typography>
              </Grid>
            )}
            {expanded.loans && (
              <Button
                onClick={() => toggleExpansion("loans")}
                sx={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            )}
            {!expanded.loans && (
              <Button
                onClick={() => toggleExpansion("loans")}
                sx={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            )}
          </Grid>

          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            variant="outlined"
            width={"100%"}
            bgcolor={"white"}
            borderRadius={2}
            height={expanded.creditCards ? "10em" : "3em"}
            sx={{ marginBottom: 1 }}
          >
            <Typography textAlign={"left"} padding={"5px"}>
              Credit Cards: <span style={{ fontWeight: 700 }}> -$475.16</span>
            </Typography>
            {expanded.creditCards && (
              <Grid item sx={{ marginLeft: 2 }}>
                <Typography variant="body2">
                  Visa: XXXX-XXXX-XXXX-XXXX
                </Typography>
                <Typography variant="body2">
                  Master: XXXX-XXXX-XXXX-XXXX
                </Typography>
              </Grid>
            )}
            {expanded.creditCards && (
              <Button
                onClick={() => toggleExpansion("creditCards")}
                sx={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            )}
            {!expanded.creditCards && (
              <Button
                onClick={() => toggleExpansion("creditCards")}
                sx={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Dashcard;
