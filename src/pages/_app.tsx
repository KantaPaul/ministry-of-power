import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import QueryProvider from "@framework/client/query-provider";
import { ModalProvider } from "@components/modal/modal.context";
import ManagedModal from "@components/modal/managed-modal";
import Scrollbar from "@components/ui/Scrollbar";
import "@styles/globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

type AppPropsWithLayout = AppProps;

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <QueryProvider pageProps={pageProps}>
      <ModalProvider>
        <Scrollbar
          className="h-full w-full"
          options={{
            scrollbars: {
              autoHide: "never",
            },
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Scrollbar>
        <ManagedModal />
      </ModalProvider>
    </QueryProvider>
  );
}
