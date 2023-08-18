import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
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

const CSelect = styled(Select)({
  "& .MuiInputBase-input": {
    fontSize: "14px",
    padding: "1.5ch 2ch",
    color: "#2B2B2B",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#2B2B2B",
  },
  "& .MuiOutlinedInput-root": {
    background: "#eee",
    borderRadius: "10px",
  },
  "& .MuiSelect-icon": {
    color: "#2B2B2B !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
    border: "2px solid #F45050 !important",
  },
  "& .MuiFormHelperText-root": {
    color: "#eee",
    position: "absolute",
  },
});

const NewsLetterForm = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Submitting...");

    try {
      const res = await axios.post(`https://admin.exlval.com/api/newsletter`, {
        name: form.name,
        email: form.email,
      });

      if (res.data) {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (e) {
      toast.error("Oopse! try again later.");
    }
  };
  //

  return (
    <Paper
      elevation={0}
      sx={{
        width: "90%",
        borderLeft: "8px solid #F45050",
        borderBottom: "8px solid #F45050",
        boxShadow: "3px 0px 8px #d4d6d5",
        p: 4,
        borderRadius: "40px",
      }}
      component="form"
      onSubmit={onSubmit}
    >
      <Typography variant="h6">Subscribe to our newsletter</Typography>
      <Box sx={{ my: 3 }} />
      <Stack
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        gap={5}
      >
        <CTextField
          fullWidth
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={(e) =>
            setForm((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
        />
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
        <Button
          type="submit"
          sx={{
            background: "#3c486b",
            color: "white",
            borderRadius: "10px",
            p: "1ch 5ch",
            fontSize: "14px",
            fontWeight: "medium",
            "&:hover": {
              background: "#394975",
            },
            ml: "auto",
          }}
          fullWidth={false}
        >
          Subscribe
        </Button>
      </Stack>
      <Box sx={{ my: 3 }} />
    </Paper>
  );
};

export default NewsLetterForm;
