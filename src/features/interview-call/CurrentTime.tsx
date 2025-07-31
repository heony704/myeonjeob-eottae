import { formatKoreanTime } from "@/utils/date";
import { useEffect, useState } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formattedCurrentTime = formatKoreanTime(currentTime);

  useEffect(() => {
    const updateTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <span className="mx-3 font-semibold text-white select-none">
      {formattedCurrentTime}
    </span>
  );
}

export default CurrentTime;
