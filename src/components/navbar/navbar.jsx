import { Box, Stack } from "@mui/material";
import { color } from "../../constants/colors";
import { Link } from "react-router-dom";
import {SearchBar} from "../";
import { YouTube } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={2}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          backgroundColor: color.primary,
        }}
      >
        <Link to={'/'}>
        <YouTube   sx={{fontSize:'45px' , color:'red'}}/>
        </Link>
        <SearchBar/>
        <Box />
      </Stack>
    </div>
  );
};

export default Navbar;
