import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  Paper,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Add } from "@mui/icons-material";

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
    background: "white",
    borderRadius: "10px",
  },
  "& .MuiFormHelperText-root": {
    color: "white",
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

const JobApplication = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: 0,
    company: "",
    message: "",
    error: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Submitting...");

    try {
      const res = await axios.post(`https://admin.exlval.com/api/contact`, {
        fname: form.firstName,
        lname: form.lastName,
        email: form.email,
        phone: form.phone,
        interest: form.interest,
        company: form.company,
        message: form.message,
      });

      if (res.data) {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (e) {
      toast.error("Oopse! try again later.");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        border: "0.2px solid #F45050;",
        boxShadow: "0px 4px 6px rgba(245, 73, 82, 0.7)",
        p: 8,
        borderRadius: "40px",
        "@media (max-width: 959.95px)": {
          p: 5,
        },
      }}
      component="form"
      onSubmit={onSubmit}
    >
      {/* <Typography variant="h4" sx={{ fontWeight: "medium" }}>
        How may we help you?
      </Typography> */}
      <Box sx={{ my: 3 }} />
      <Stack direction="row" gap={5}>
        <CTextField
          fullWidth
          placeholder="First Name"
          name="firstName"
          value={form.firstName}
          onChange={(e) =>
            setForm((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <CTextField
          fullWidth
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={(e) =>
            setForm((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </Stack>
      <Box sx={{ my: 3 }} />
      <Stack direction="row" gap={5}>
        <CTextField
          fullWidth
          placeholder="Email Id"
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
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={(e) =>
            setForm((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </Stack>
      <Box sx={{ my: 3 }} />
      <FormControl fullWidth>
        <CTextField
          fullWidth
          placeholder="Years of work experience?*"
          name="experience"
          value={form.experience}
          onChange={(e) =>
            setForm((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </FormControl>
      <Box sx={{ my: 3 }} />
      <Stack direction="row" gap={5}>
        <CTextField
          fullWidth
          placeholder="Current Annual CTC"
          name="current_ctc"
          value={form.current_ctc}
          onChange={(e) =>
            setForm((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <CTextField
          fullWidth
          placeholder="Expected Annual CTC"
          name="expected_ctc"
          value={form.expected_ctc}
          onChange={(e) =>
            setForm((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </Stack>
      <Box sx={{ my: 3 }} />
      <CTextField
        fullWidth
        placeholder="Notice period (in days)"
        name="notice_period"
        value={form.notice_period}
        onChange={(e) =>
          setForm((state) => ({
            ...state,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Box sx={{ my: 3 }} />
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
        />

        <Button
          component={"span"}
          sx={{
            backgroundColor: "#F45050",
            p: "1ch 2ch",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#F45050",
            },
            color: "#FAFAFA",
            fontWeight: "500",
          }}
        >
          <Add />
          <Typography>Upload Your Resume</Typography>
        </Button>
      </label>
      <Box sx={{ my: 3 }} />
      <Button
        type="submit"
        sx={{
          background: "#F9D949",
          color: "#2B2B2B",
          borderRadius: 4,
          p: "1ch 5ch",
          fontSize: "16px",
          fontWeight: "medium",
          "&:hover": {
            background: "#FAC949",
          },
        }}
        fullWidth
      >
        Submit Application
      </Button>
    </Paper>
  );
};

export default JobApplication;
