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

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const ConsultingForm = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: 0,
    company: "",
    message: "",
  });

  const onSubmit = () => {
    console.log(form);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        border: "0.2px solid #F45050;",
        boxShadow: "0px 4px 6px rgba(245, 73, 82, 0.7)",
        p: 5,
        borderRadius: "40px",
      }}
      component="form"
      onSubmit={onSubmit}
    >
      <Typography variant="h6">Fill our consulting form</Typography>
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
      <Typography variant="body1" sx={{ fontWeight: "bold", color: "grey" }}>
  Select the date and time
</Typography>
      <Stack direction="row" gap={5}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy" // Customize the date format as needed
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
          <MenuItem value={1}>Interest 1</MenuItem>
          <MenuItem value={2}>Interest 2</MenuItem>
          <MenuItem value={3}>Interest 3</MenuItem>
        </CSelect>
      </FormControl>
      <Box sx={{ my: 3 }} />
      <CTextField
        fullWidth
        placeholder="Website"
        name="website"
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
        placeholder="Discuss with us.."
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
            borderRadius: "20px",
            p: "1ch 5ch",
            fontSize: "14px",
            fontWeight: "medium",
            "&:hover": {
              background: "#FAC949",
            },
            ml: "auto",
          }}
          fullWidth={false}
        >
          Schedule a call
        </Button>
      </Stack>
    </Paper>
  );
};

export default ConsultingForm;
