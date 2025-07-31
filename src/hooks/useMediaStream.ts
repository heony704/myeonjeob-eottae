import { useCallback, useEffect, useRef, useState } from "react";

function useMediaStream() {
  const mediaStreamRef = useRef(new MediaStream());
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const toggleAudio = async () => {
    if (!isAudioActive) {
      // 오디오 꺼져있다면 오디오 트랙 추가
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const audioTrack = stream.getAudioTracks()[0];
      mediaStreamRef.current.addTrack(audioTrack);

      setIsAudioActive(true);
    } else {
      // 오디오 켜져있다면 오디오 트랙 제거
      mediaStreamRef.current.getAudioTracks().forEach((track) => {
        mediaStreamRef.current.removeTrack(track);
        track.stop();
      });

      setIsAudioActive(false);
    }
  };

  const toggleVideo = async () => {
    if (!isVideoActive) {
      // 비디오 꺼져있다면 오디오 트랙 추가
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      const videoTrack = stream.getVideoTracks()[0];
      mediaStreamRef.current.addTrack(videoTrack);

      setIsVideoActive(true);
    } else {
      // 비디오 켜져있다면 오디오 트랙 제거
      mediaStreamRef.current.getVideoTracks().forEach((track) => {
        mediaStreamRef.current.removeTrack(track);
        track.stop();
      });

      setIsVideoActive(false);
    }
  };

  const toggleAudioAndVideo = async () => {
    if (!isAudioActive && !isVideoActive) {
      // 오디오&비디오 전부 꺼져있다면 전부 켜기
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });

      const audioTrack = stream.getAudioTracks()[0];
      const videoTrack = stream.getVideoTracks()[0];

      mediaStreamRef.current.addTrack(audioTrack);
      mediaStreamRef.current.addTrack(videoTrack);

      setIsAudioActive(true);
      setIsVideoActive(true);
    } else {
      // 오디오&비디오 하나라도 켜져있다면 전부 끄기
      mediaStreamRef.current.getTracks().forEach((track) => {
        mediaStreamRef.current.removeTrack(track);
        track.stop();
      });

      setIsAudioActive(false);
      setIsVideoActive(false);
    }
  };

  const stopAllMedia = () => {
    mediaStreamRef.current.getTracks().forEach((track) => {
      mediaStreamRef.current.removeTrack(track);
      track.stop();
    });

    setIsAudioActive(false);
    setIsVideoActive(false);
  };

  // ref로 전달된 함수가 DOM에 연결되는 시점에 실행되기 위해 useRef 대신 사용
  const videoRef = useCallback(
    (element: HTMLVideoElement | null) => {
      if (!element) {
        return;
      }

      // 비디오가 켜져있다면 미디어 스트림 연결, 꺼져있다면 비우기
      element.srcObject = isVideoActive ? mediaStreamRef.current : null;
    },
    [isVideoActive],
  );

  // 컴포넌트 사라질 때 리소스 해제
  useEffect(() => {
    const stream = mediaStreamRef.current;

    return () => {
      stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return {
    mediaStream: mediaStreamRef.current,
    isAudioActive,
    isVideoActive,
    toggleAudio,
    toggleVideo,
    toggleAudioAndVideo,
    stopAllMedia,
    videoRef,
  };
}

export default useMediaStream;
