import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-hot-toast";
import axios from "axios";

const CTextField = styled(TextField)({
  "& input": {
    fontSize: "14px",
    padding: "1.5ch 2ch",
    // maxWidth: "210px",
    color: "#2B2B2B",
  },
  "& input:placeholder": {
    color: "#2B2B2B",
  },
  "& fieldset": {
    border: "2px solid #F45050 !important",
  },

  "& .MuiOutlinedInput-root": {
    background: "#eee",
    borderRadius: "10px",
  },
  "& .MuiFormHelperText-root": {
    color: "#eee",
    position: "absolute",
    // height: "30px"
  },
});

export default function Audit() {
  const [show, setShow] = useState(localStorage.getItem("showAudit"));

  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Submitting...");

    try {
      const res = await axios.post(
        `https://admin.exlval.com/api/website-audit`,
        {
          email: form.email,
          url: form.url,
        }
      );

      if (res.data) {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (e) {
      toast.error("Oopse! try again later.");
    }
  };

  const handleHideAudit = () => {
    localStorage.setItem("showAudit", "hide");
    setShow("hide");
  };

  return (
    <Stack
      sx={{
        position: "relative",
        display: show === "hide" ? "none" : "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F45050",
        p: "1ch",
        width: "100%",
      }}
      gap={2}
    >
      <Typography color={"#fafafa"}>Get Your Website Audit For Free</Typography>

      <Box
        component={"form"}
        onSubmit={onSubmit}
        sx={{ width: { xs: "100%", lg: "max-content" } }}
      >
        <Stack
          sx={{
            ml: "1rem",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
          gap={2}
        >
          <CTextField
            fullWidth
            placeholder="email"
            name="email"
            value={form.email}
            onChange={(e) =>
              setForm((state) => ({
                ...state,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <CTextField
            fullWidth
            placeholder="https://"
            name="url"
            value={form.url}
            onChange={(e) =>
              setForm((state) => ({
                ...state,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <Button
            type="submit"
            sx={{
              background: "#F9E949",
              color: "#2B2B2B",
              borderRadius: "10px",
              p: "1ch 5ch",
              fontSize: "14px",
              fontWeight: "medium",
              "&:hover": {
                background: "#F9E949",
              },
              ml: "auto",
              whiteSpace: "nowrap",
            }}
            fullWidth={false}
          >
            Check now!
          </Button>
        </Stack>
      </Box>

      <Button
        onClick={handleHideAudit}
        sx={{ position: "absolute", top: ".5rem", right: "1rem" }}
      >
        <CloseIcon color="#fafafa" />
      </Button>
    </Stack>
  );
}
