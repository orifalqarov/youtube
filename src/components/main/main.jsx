import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { color } from "../../constants/colors";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [selectCategory, setSelectCategory] = useState("Education");
  const [videos, setVideos] = useState([]);
  const selectedCategoryHandler = (category) => setSelectCategory(category);
  useEffect(() => {
    ApiService.fetching(
      `search?part=snippet&q=${selectCategory}`
    ).then((data) => setVideos(data.items));
  }, [selectCategory]);
  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectCategory={selectCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectCategory}{" "}
            <span style={{ color: color.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
