import PersonIcon from "@mui/icons-material/Person";
import { TextField,InputAdornment } from "@mui/material";
import { useState } from "react";

export function TextfieldFunctionalityTexts() {
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    return (
      <TextField
        color="success"
        id="first-name"
        required
        type="text"
        error={isFocus && value.length < 3}
        helperText={
          isFocus && value.length < 3 ? "Name must be at least 3 characters" : ""
        }
        placeholder="Enter your name.."
        value={value}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
            style: {
              color: "white",
            },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
            fontSize: "1rem",
            fontFamily: "Verdana",
          },
          "& ::placeholder": {
            color: "white",
          },
        }}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    );
  }