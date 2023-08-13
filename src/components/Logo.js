import { Box, Link } from "@mui/material";
import logo from "../assets/images/Exlval Logo.png";

const Logo = () => {
  return (
    <Box
      component={Link}
      href="/"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <img src={logo} alt="exval logo" />
    </Box>
  );
};

export default Logo;
