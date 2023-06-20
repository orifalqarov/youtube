import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({video, marginTop}) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "400px", md: "300px" },
        height: "300px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link
        to={`/channel/${video?.id.channelId ? video?.id.channelId : video?.id}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.high.url}
            component="img"
            sx={{
              width: { xs: "100px", sm: "200px", md: "200px" },
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
            }}
            alt={video?.snippet?.title}
          />
          <Typography variant="h6">
            {video?.snippet?.title}{" "}
            <CheckCircle sx={{ fontSize: "14px", ml: "5px", color: "gray" }} />
          </Typography>
          <Typography>
            {video?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(video?.statistics?.subscriberCount).toLocaleString(
                  "en-US"
                )}{" "}
                Subscribers
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
