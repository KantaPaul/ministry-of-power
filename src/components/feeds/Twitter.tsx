import { Timeline } from "react-twitter-widgets";
import { TWITTER_NAME } from "@lib/index";

const TwitterFeed = () => {
  return (
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: TWITTER_NAME,
      }}
      options={{
        height: "550",
      }}
    />
  );
};

export default TwitterFeed;
