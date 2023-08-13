import * as React from "react";
import { styled } from "@mui/system";
import {
  AppBar,
  Button,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  Toolbar,
  Typography,
  TextField,
  Box,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "./Logo";

const StickyNavbar = styled(AppBar)({
  top: 0,
  position: "sticky",
  zIndex: (theme) => theme.zIndex.appBar,
  background: "#F45050",
});

const FixedNavbar = styled(AppBar)({
  top: 64,
  position: "sticky",
  zIndex: (theme) => theme.zIndex.appBar,
  background: "#fff",
});

const CTextField = styled(TextField)({
  "& input": {
    fontSize: "12px",
    padding: "1ch 1.5ch",
    maxWidth: "210px",
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
    borderRadius: "5px",
  },
  "& .MuiFormHelperText-root": {
    color: "#eee",
    position: "absolute",
    // height: "30px"
  },
});

const Navbar = () => {
  const [isFixed, setIsFixed] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const threshold = 65; // Adjust this value based on your requirements

    setIsFixed(offset > threshold);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [anchorEl, setAnchorEl] = React.useState({
    company: null,
    services: null,
    resources: null,
  });

  const handleClick = (val, event) => {
    setAnchorEl({ ...anchorEl, [val]: event.currentTarget });
  };

  const handleClose = (val, nav) => {
    setAnchorEl({ ...anchorEl, [val]: null });
    if (nav !== null) {
      window.location.href = nav;
    }
  };

  return (
    <Box>
      <StickyNavbar sx={{ pr: "0 !important" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="body1">
            Get your Website Audit audit for free
          </Typography>
          <Box sx={{ px: 1 }} />
          <CTextField placeholder="Email id" />
          <Box sx={{ px: 1 }} />
          <CTextField defaultValue={"https://"} />
          <Box sx={{ px: 1 }} />
          <Button
            sx={{
              background: "#F9D949",
              color: "#2B2B2B",
              borderRadius: "10px",
              p: "0.5ch 2.5ch",
              fontSize: "12px",
              fontWeight: "medium",
            }}
          >
            Check now
          </Button>
          <Box sx={{ pr: 0.5 }} />
          <IconButton size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </StickyNavbar>

      <FixedNavbar
        sx={{
          display: "flex",
          position: isFixed ? "fixed" : "sticky",
          top: isFixed ? 0 : 64,
          py: 0.5,
          pr: "0 !important",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "#000",
          }}
        >
          <Logo />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Stack
              onClick={(e) => handleClick("company", e)}
              direction="row"
              aria-describedby={Boolean(anchorEl.company) ? "dropdown-menu" : undefined}
              sx={{ cursor: "pointer" }}
            >
              <Typography sx={{ color: "#000" }}>Company</Typography>
              <ArrowDropDownIcon />
            </Stack>
            <Box sx={{ mx: 1.5 }} />
            <Stack
              onClick={(e) => handleClick("services", e)}
              direction="row"
              sx={{ alignItems: "center", cursor: "pointer" }}
            >
              <Typography sx={{ color: "#000" }}>Services</Typography>
              <ArrowDropDownIcon />
            </Stack>
            <Box sx={{ mx: 1.5 }} />
            <Typography sx={{ color: "#000", cursor: "pointer" }}>
              Business Consultancy
            </Typography>
            <Box sx={{ mx: 1.5 }} />
            <Typography sx={{ color: "#000", cursor: "pointer" }}>
              Blogs
            </Typography>
            <Box sx={{ mx: 1.5 }} />
            <Stack
              onClick={(e) => handleClick("resources", e)}
              direction="row"
              sx={{ alignItems: "center", cursor: "pointer" }}
            >
              <Typography sx={{ color: "#000" }}>Resources</Typography>
              <ArrowDropDownIcon />
            </Stack>
            <Box sx={{ mx: 1.5 }} />
            <Button
              sx={{
                backgroundColor: "#3C486B",
                borderRadius: 4,
                padding: "1ch 2ch",
                "&:hover": {
                  backgroundColor: "#3C487E",
                },
              }}
            >
              Contact us
            </Button>
            <Popover
              id={Boolean(anchorEl.company) ? "dropdown-menu" : undefined}
              open={Boolean(anchorEl.company)}
              anchorEl={anchorEl.company}
              onClose={() => handleClose("company", null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                onClick={() => handleClose("company", "/services-seo")}
                component={Link}
              >
                SEO
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("company", "/services-seo")}
                component={Link}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("company", "/services-seo")}
                component={Link}
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("company", "/services-seo")}
                component={Link}
              >
                Contact
              </MenuItem>
            </Popover>
            <Popover
              id={Boolean(anchorEl.services) ? "dropdown-menu" : undefined}
              open={Boolean(anchorEl.services)}
              anchorEl={anchorEl.services}
              onClose={() => handleClose("services", null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                onClick={() => handleClose("services", "/services-seo")}
                component={Link}
              >
                SEO
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("services", "/services-seo")}
                component={Link}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("services", "/services-seo")}
                component={Link}
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("services", "/services-seo")}
                component={Link}
              >
                Contact
              </MenuItem>
            </Popover>
            <Popover
              id={Boolean(anchorEl.resources) ? "dropdown-menu" : undefined}
              open={Boolean(anchorEl.resources)}
              anchorEl={anchorEl.resources}
              onClose={() => handleClose("resources", null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                onClick={() => handleClose("resources", "/resources-seo")}
                component={Link}
              >
                SEO
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("resources", "/resources-seo")}
                component={Link}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("services", "/services-seo")}
                component={Link}
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("services", "/services-seo")}
                component={Link}
              >
                Contact
              </MenuItem>
            </Popover>
          </Box>
        </Toolbar>
      </FixedNavbar>
    </Box>
  );
};

export default Navbar;
