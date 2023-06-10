import { FACEBOOK_APP_ID, FACEBOOK_FEED_LINK } from "@lib/index";

const FacebookFeed = () => {
  return (
    <iframe
      src={`${FACEBOOK_FEED_LINK}&appId=${FACEBOOK_APP_ID}`}
      height="550"
      style={{
        border: "none",
        overflow: "hidden",
        width: "100%",
      }}
    />
  );
};

export default FacebookFeed;
