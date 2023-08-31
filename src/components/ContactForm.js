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
import axios from "axios";
import { toast } from "react-hot-toast";

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

const ContactForm = () => {
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
      <Typography variant="h4" sx={{ fontWeight: "medium" }}>
        How may we help you?
      </Typography>
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
        <CSelect
          value={form.interest}
          name="interest"
          onChange={(e) =>
            setForm((state) => ({
              ...state,
              [e.target.name]: e.target.value,
            }))
          }
        >
          <MenuItem value={0} disabled>
            What are you interested in?
          </MenuItem>
          <MenuItem value={"seo"}>SEO</MenuItem>
          <MenuItem value={"digital-marketing"}>Digital Marketing</MenuItem>
          <MenuItem value={"social-media-marketing"}>
            Social Media Marketing
          </MenuItem>
          <MenuItem value={"influencer-marketing"}>
            Influencer Marketing
          </MenuItem>
          <MenuItem value={"performance-marketing"}>
            Performance Marketing
          </MenuItem>
          <MenuItem value={"content-marketing"}>Content Marketing</MenuItem>
          <MenuItem value={"branding"}>Branding</MenuItem>
          <MenuItem value={"graphic-design"}>Graphic Design</MenuItem>
          <MenuItem value={"ui-ux"}>UI/UX</MenuItem>
          <MenuItem value={"website"}>Website Development</MenuItem>
        </CSelect>
      </FormControl>
      <Box sx={{ my: 3 }} />
      <CTextField
        fullWidth
        placeholder="Company"
        name="company"
        value={form.company}
        onChange={(e) =>
          setForm((state) => ({
            ...state,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Box sx={{ my: 3 }} />
      <CTextField
        fullWidth
        placeholder="Message"
        name="message"
        value={form.message}
        onChange={(e) =>
          setForm((state) => ({
            ...state,
            [e.target.name]: e.target.value,
          }))
        }
        multiline
        maxRows={3}
        minRows={3}
      />
      <Box sx={{ my: 3 }} />
      <Stack>
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
            ml: "auto",
          }}
          fullWidth={false}
        >
          Submit
        </Button>
      </Stack>
    </Paper>
  );
};

export default ContactForm;
