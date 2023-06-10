import { isEmpty } from "lodash";
import Image from "@components/ui/Image";
import { useYoutubeVideos } from "@framework/youtube";
import { useModalAction } from "@components/modal/modal.context";
import { useCallback } from "react";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import { Youtube } from "@type/index";

const YoutubeFeed = () => {
  const {
    videos,
    isLoading,
    error,
  }: { videos: Youtube[]; isLoading: boolean; error: any } = useYoutubeVideos();
  const { openModal } = useModalAction();

  const handleVideoInfoModal = useCallback((data: string) => {
    return openModal("YOUTUBE_VIEW", {
      video: data,
    });
  }, []);

  if (isLoading) {
    return (
      <div className="py-[60px] md:py-[120px] flex justify-center">
        <div className="content_body">
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-40">
        <div className="container mx-auto">
          <Alert type="error" message={error?.message} />
        </div>
      </div>
    );
  }

  return (
    <>
      {!isEmpty(videos) ? (
        <div className="flex flex-col gap-6">
          {videos?.map((video: Youtube, index: number) => {
            return video?.snippet?.thumbnails?.high?.url ? (
              <div
                className="cursor-pointer"
                key={index}
                onClick={() =>
                  handleVideoInfoModal(
                    `https://www.youtube.com/embed/${video?.id?.videoId}`
                  )
                }
              >
                <Image
                  src={video?.snippet?.thumbnails?.high?.url}
                  alt={video?.snippet?.title}
                  height={video?.snippet?.thumbnails?.high?.height}
                  width={video?.snippet?.thumbnails?.high?.width}
                  layout="fixed"
                />
                {video?.snippet?.title ? (
                  <h4 className="mt-4">{video?.snippet?.title}</h4>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default YoutubeFeed;
