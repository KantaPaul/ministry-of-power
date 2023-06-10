import dynamic from "next/dynamic";
import Modal from "@components/modal/modal";
import { useModalAction, useModalState } from "@components/modal/modal.context";

const VideoPopup = dynamic(() => import("@components/popup/video"));
const ContentPopup = dynamic(() => import("@components/popup/content"));
const SearchPopup = dynamic(() => import("@components/popup/search"));

const ManagedModal = () => {
  const { isOpen, view } = useModalState();
  const { closeModal } = useModalAction();
  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === "YOUTUBE_VIEW" && <VideoPopup />}
      {view === "CONTENT_VIEW" && <ContentPopup />}
      {view === "SEARCH_VIEW" && <SearchPopup />}
    </Modal>
  );
};

export default ManagedModal;
