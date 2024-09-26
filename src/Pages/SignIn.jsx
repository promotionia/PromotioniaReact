import ArrowBack from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactsIcon from "@mui/icons-material/Contacts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextfieldFunctionalityTexts } from "../Util/TextFields";
import { TextfieldFunctionalityPassword } from "../Util/PasswordField";
import {
    Container,
    Box,
    FormControl,
    FormGroup,
    Button,
    Divider,
  } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function SignIn() {
    const navigate = useNavigate()

    return (
      <div
        className="outer_display"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to right top, #070205, #0f030d, #120415, #12061c, #0f0a23, #0a1027, #05142a, #00182c, #011c29, #091f26, #142124, #1d2323)",
          backgroundPosition: "center",
          overflowX: "hidden",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background : "rgba(5, 7, 10, 0.4)",
              padding: "8.5rem",
              backdropFilter: "blur(10px)",
              height: "39rem",
              borderRadius: "0.8rem",
            }}
          >
            <div className="Heading" style={{ width: "100%" }}>
              <div
                className="header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <h1 style={{ color: "white" }}>Sign-In</h1>
                <ContactsIcon sx={{ color: "white" }} />
              </div>
              <Divider
                textAlign="center"
                sx={{
                  "&:before": {
                    borderColor: "white",
                  },
                  "&:after": {
                    borderColor: "white",
                  },
                  "& .MuiDivider-wrapper": {
                    color: "white",
                  },
                }}
              >
                {<ExpandMoreIcon />}
              </Divider>
            </div>
            <div className="form_section">
              <FormControl>
                <FormGroup
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <p
                    style={{
                      color: "hsl(220, 20%, 65%)",
                      fontSize: "1rem",
                      marginBottom: "0px",
                    }}
                  >
                    Name
                  </p>
                  <TextfieldFunctionalityTexts />
                  <p
                    style={{
                      color: "hsl(220, 20%, 65%)",
                      fontSize: "1rem",
                      marginBottom: "0px",
                    }}
                  >
                    Password
                  </p>
                  <TextfieldFunctionalityPassword />
                </FormGroup>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                    gap: "0.6rem",
                    mt: "1rem",
                    mb: "1rem",
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    startIcon={<ArrowBack />}
                    onClick={() => navigate('/' , {replace: true})}
                  >
                    Back
                  </Button>
                </Box>
              </FormControl>
              <Divider
                textAlign="center"
                sx={{
                  "&:before": {
                    borderColor: "white",
                  },
                  "&:after": {
                    borderColor: "white",
                  },
                  "& .MuiDivider-wrapper": {
                    color: "white",
                  },
                }}
              >
                OR
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  mt: "1rem",
                }}
              >
                <Button
                  startIcon={<GoogleIcon />}
                  sx={{ width: "100%", height: "2.5rem", color: "cyan" }}
                  variant="outlined"
                  color="info"
                >
                  Google
                </Button>
                <Button
                  startIcon={<FacebookIcon />}
                  variant="outlined"
                  sx={{ width: "100%", height: "2.5rem", color: "cyan" }}
                >
                  Facebook
                </Button>
              </Box>
            </div>
          </Box>
        </Container>
      </div>
    );
  }
  