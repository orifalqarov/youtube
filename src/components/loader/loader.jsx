import { Box, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const Loader = () => {
  return (
    <Box>
      <Stack justifyContent={"center"} alignItems={"center"} height={"60vh"}>
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
