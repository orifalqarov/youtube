import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { color } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "300px", md: "300px" },
        boxShadow: "none",
        borderRadius: "10px",
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video.snippet.thumbnails.high.url}
          component="img"
          height="200"
          sx={{ width: { xs: "100%", sm: "400px", md: "300px" } }}
          alt={video?.snippet?.title}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: color.primary,
          position: "relative",
          height: "200px",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography sx={{ opacity: "0.4" }} my={"5px"}>
            {moment(video.snippet.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video.snippet.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
            {video.snippet.description.slice(0, 58)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
        <Stack
          direction={"row"}
          position={"absolute"}
          bottom={"10px"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Avatar src={video.snippet.thumbnails.high.url} />
          <Typography variant="subtitle1" color={"gray"}>
            {video.snippet.channelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
