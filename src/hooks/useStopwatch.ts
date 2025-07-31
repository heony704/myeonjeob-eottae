import { useRef, useState } from "react";

function useStopwatch() {
  const [time, setTime] = useState<number>(0); // UI로 표시될 지금까지 기록된 시간 (밀리초 단위)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 정확한 실제 시간
  const startTimeRef = useRef<number | null>(null); // start한 시각
  const savedTimeRef = useRef<number>(0); // 이전까지 누적된 시간

  const start = () => {
    // 이미 시작했다면 return
    if (intervalRef.current !== null) {
      return;
    }

    startTimeRef.current = Date.now();

    // 100밀리초마다 UI에 실제 시간 반영
    intervalRef.current = setInterval(() => {
      if (startTimeRef.current === null) {
        return;
      }

      const now = Date.now();
      const elapsed = now - startTimeRef.current + savedTimeRef.current; //
      setTime(elapsed);
    }, 100);
  };

  const pause = () => {
    // 이미 중지되었다면 return
    if (intervalRef.current === null || startTimeRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = null;

    const now = Date.now();
    savedTimeRef.current += now - startTimeRef.current; // 측정한 시간 누적
    startTimeRef.current = null;
  };

  const stop = () => {
    pause();
    setTime(0);
    savedTimeRef.current = 0;
  };

  return {
    time,
    startStopwatch: start,
    pauseStopwatch: pause,
    stopStopwatch: stop,
  };
}

export default useStopwatch;
