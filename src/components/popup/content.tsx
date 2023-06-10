import { useModalState } from "@components/modal/modal.context";

const ContentPopup = () => {
  const {
    data: { content },
  } = useModalState();
  return (
    <div className="bg-white p-10 rounded text-black">{content}</div>
  );
};

export default ContentPopup;
