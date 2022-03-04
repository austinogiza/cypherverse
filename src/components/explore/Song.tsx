import React, { FC, useEffect, useRef } from "react";

interface SongProp {
  currentSong: any;
  isPlaying: boolean;
  setIsPlaying: any;
  handleVolume: any;
}
const Song: FC<SongProp> = (props) => {
  const { isPlaying, setIsPlaying } = props;

  const audioRef = useRef<HTMLAudioElement>(null);

  if (isPlaying) {
    audioRef.current?.play();
  } else {
    audioRef.current?.pause();
  }

  // if(handleVolume){
  //   audioRef.current?.muted = true
  // }
  // else{
  //     audioRef.current?.muted = false
  // }
  //   useEffect(()=>{
  //  setIsPlaying(isPlaying)

  //   }, [isPlaying,setIsPlaying,handleVolume])

  useEffect(() => {
    setIsPlaying(isPlaying);
    console.log(isPlaying);

    // if(navigator.mediaDevices.getUserMedia({audio:false})){

    //   alert("kindly give permission")
    // }
  }, [isPlaying, setIsPlaying]);

  return (
    <div>
      {/* <audio ref={audioRef} autoPlay={true}  src={currentSong.audio}></audio> */}
    </div>
  );
};

export default Song;
