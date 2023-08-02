// import Banner from "@components/banner/Banner";
import { useEService } from "@framework/e-service";
import EService from "@components/e-service/e-service";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
export { getStaticProps } from "@framework/ssr/e-service.ssr";

export default function index() {
  const { eService, isLoading, error } = useEService();

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
          {/* @ts-ignore */}
          <Alert type="error" message={error?.message} />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title="Hon'ble Prime Minister"
        subTitle="E-Services Categories"
      /> */}

      <EService eService={eService} />
    </>
  );
}
