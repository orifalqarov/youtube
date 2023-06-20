import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import ReactPlayer from "react-player";
import {
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
  CheckCircle,
} from "@mui/icons-material";
import Loader from "../loader/loader";
import { Videos } from "../";
const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetails(data.items[0]);
        const relatedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setRelatedVideo(relatedData.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);
  if (!videoDetails?.snippet) return <Loader />;
  return (
    <Box
      minHeight={"90vh"}
      display={"flex"}
      justifyContent={"center"}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Box width={{ xs: "100%", md: "70%" }} px={2}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
        />
        {videoDetails?.snippet?.tags?.map((item, i) => (
          <Chip
            label={item}
            key={i}
            sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
            deleteIcon={<Tag />}
            onDelete={() => {}}
            variant={"outlined"}
          />
        ))}
        <Typography variant="h5" fontWeight={"bold"} p={2}>
          {videoDetails?.snippet.title}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: "0.7" }} p={2}>
          {videoDetails?.snippet.description}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={"20px"}
          py={1}
          px={2}
        >
          <Stack
            sx={{
              opacity: "0.7",
              direction: "row",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <Visibility />
            {parseInt(videoDetails?.statistics.likeCount).toLocaleString()}{" "}
            likes
          </Stack>
          <Stack
            sx={{
              opacity: "0.7",
              direction: "row",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <FavoriteOutlined />
            {parseInt(
              videoDetails?.statistics.commentCount
            ).toLocaleString()}{" "}
            comments
          </Stack>
          <Stack
            sx={{
              opacity: "0.7",
              direction: "row",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <MarkChatRead />
            {parseInt(videoDetails?.statistics.likeCount).toLocaleString()}{" "}
            views
          </Stack>
        </Stack>
        <Link to={`/channel/${videoDetails.snippet.channelId}`}>
          <Stack
            direction={"row"}
            margin={"20px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={videoDetails.snippet.thumbnails.high.url} />
            <Typography variant="subtitle1" color={"gray"}>
              {videoDetails.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </Box>
      <Box
        width={{ xs: "100%", md: "30%" }}
        px={2}
        py={{ xs: 5, md: 1 }}
        overflow={"scroll"}
        justifyContent={"center"}
        alignItems={"center"}
        maxHeight={"200vh"}
      >
        <Videos videos={relatedVideo} />
      </Box>
    </Box>
  );
};

export default VideoDetails;
