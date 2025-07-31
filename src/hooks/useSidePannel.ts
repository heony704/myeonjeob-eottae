import { useState } from "react";

function useSidePannel<T>() {
  const [sidePannelTopic, setSidePannelTopic] = useState<T | null>(null);
  const [isSidePannelOpen, setIsSidePannelOpen] = useState(false);

  const closeSidePannel = () => {
    setIsSidePannelOpen(false);
    setSidePannelTopic(null);
  };

  const handleSidePannel = (topic: T) => {
    if (!isSidePannelOpen) {
      setSidePannelTopic(topic);
      setIsSidePannelOpen(true);
    }

    if (isSidePannelOpen && sidePannelTopic === topic) {
      setIsSidePannelOpen(false);
      setSidePannelTopic(null);
    }

    if (isSidePannelOpen && sidePannelTopic !== topic) {
      setSidePannelTopic(topic);
    }
  };

  return {
    sidePannelTopic,
    isSidePannelOpen,
    closeSidePannel,
    handleSidePannel,
  };
}

export default useSidePannel;
