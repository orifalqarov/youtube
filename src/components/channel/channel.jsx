import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box } from "@mui/material";
import ChannelCard from "../channel-card/channel-card";
import Videos from "../videos/videos";

const Channel = () => {
  let { id } = useParams();
  const [channel, setChannel] = useState();
  const [video, setVideo] = useState([]);
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannel = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannel(dataChannel.items[0]);
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet&Cid&order=date`
        );
        setVideo(dataVideo.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  console.log(channel);
  return (
    <Box minHeight={"95vh"} marginTop={"10vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channel?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        />
        <ChannelCard video={channel} marginTop={"-100px"} />
        <Videos videos={video} />
      </Box>
    </Box>
  );
};

export default Channel;
