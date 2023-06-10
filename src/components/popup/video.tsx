import { useModalState } from "@components/modal/modal.context";

const VideoPopupOne = () => {
  const {
    data: { video },
  } = useModalState();

  return (
    <>
      <iframe
        width="100%"
        height="500"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};

export default VideoPopupOne;
