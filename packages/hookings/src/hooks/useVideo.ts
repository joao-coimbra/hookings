import React from 'react';
import { useBoolean } from './useBoolean';

type Attributes = {
  duration: number;
  currentTime: number;
  isPaused: boolean;
  isEnded: boolean;
};

type Controls = {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  reset: () => void;
  seek: (time: number) => void;
};

type UseVideoReturn = [HTMLVideoElement, Attributes, Controls];

function useVideo(video: HTMLVideoElement): UseVideoReturn {
  const [duration, setDuration] = React.useState<number>(video.duration);
  const [currentTime, setCurrentTime] = React.useState<number>(video.currentTime);

  const [isPaused, setPaused] = useBoolean(video.paused);
  const [isEnded, setEnded] = useBoolean(video.ended);

  const controls: Controls = {
    play: () => video.play(),
    pause: () => video.pause(),
    toggle: () => {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    },
    reset: () => {
      video.currentTime = 0;
      video.play();
    },
    seek: (time: number) => {
      video.currentTime = time;
    },
  };

  React.useEffect(() => {
    const handleTimeUpdate = () => {
      if (!video.ended) setEnded.off();
      setCurrentTime(video.currentTime);
    };
    const handleDurationChange = () => setDuration(video.duration);

    video.addEventListener('play', setPaused.toggle);
    video.addEventListener('pause', setPaused.toggle);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('ended', setEnded.on);

    return () => {
      video.removeEventListener('play', setPaused.toggle);
      video.removeEventListener('pause', setPaused.toggle);

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('ended', setEnded.on);
    };
  }, []);

  return [
    video,
    {
      duration,
      currentTime,
      isPaused,
      isEnded,
    },
    controls,
  ];
}

export { useVideo, type UseVideoReturn };
