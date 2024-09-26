import { TextField,InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";


export function TextfieldFunctionalityPassword() {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    return (
      <TextField
        color="success"
        id="first-name"
        required
        type={visible ? "text" : "password"}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                sx={{ "& > svg": { color: "#000" } }}
                position="end"
                onClick={() => setVisible(!visible)}
              >
                {visible ? (
                  <VisibilityIcon style={{ cursor: "pointer", color: "white" }} />
                ) : (
                  <VisibilityOffIcon
                    style={{ cursor: "pointer", color: "white" }}
                  />
                )}
              </InputAdornment>
            ),
            style: {
              color: "white",
            },
          },
        }}
        error={isFocus && value.length < 3}
        placeholder="Enter your password..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(event) => setValue(event.target.value)}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          color: "white",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
  
          "& .MuiInputLabel-root": {
            color: "white",
            fontFamily: "Verdana",
          },
          "& ::placeholder": {
            color: "white",
          },
        }}
      />
    );
  }