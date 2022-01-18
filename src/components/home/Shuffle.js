import React, { useEffect, useRef, useState } from "react"
import Malarian from "assets/videos/Malarian.mp4"
// import Orb_3D from "assets/videos/Orb.mp4"
import HASH from "assets/videos/Hash.mp4"
import styled from "styled-components"
import { BsPlayFill } from "react-icons/bs"
import { CypherTheme } from "styles/ColorStyles"
const Shuffle = () => {
  const items = [
    {
      id: 1,
      image: Malarian,
    },
    {
      id: 2,
      image: HASH,
    },
  ]

  const [images, setImage] = useState(items[0])
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const autoPlayVideo = () => {
    videoRef.current.play()
  }
  const videoHandler = (control) => {
    if (control === "play") {
      autoPlayVideo()
      setPlaying(true)
      // console.log(videoRef.current.play());
    } else if (control === "pause") {
      setPlaying(false)
    }
  }
  useEffect(() => {
    // autoPlayVideo();
    if (localStorage.getItem("cypherverse") === null) {
      localStorage.setItem("cypherverse", JSON.stringify("loaded"))

      localStorage.setItem("cyphervisits", JSON.stringify(0))
      setImage(items[0])
    } else {
      if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) ===
        items.length
      ) {
        setImage(items[0])
        localStorage.setItem("cyphervisits", JSON.stringify(0))
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 1
      ) {
        setImage(items[0])
        localStorage.setItem("cyphervisits", JSON.stringify(0))
      } else {
        setImage(items[1])
        localStorage.setItem("cyphervisits", JSON.stringify(1))
      }
    }
  }, [])

  const changeVideo = () => {
    if (images.id === 1) {
      setImage(items[1])
    } else if (images.id === 2) {
      setImage(items[0])
    }
  }

  return (
    <>
      <VideoCoverSpan>
        <VideoCover>
          <VideoWrapper>
            {!playing && (
              <PlayCover>
                <PlayButton onClick={() => videoHandler("play")} />
              </PlayCover>
            )}
            <video
              autoPlay={true}
              onEnded={changeVideo}
              playing={true}
              src={images.image}
              volume={1}
              muted={false}
              ref={videoRef}
              controls={false}
            />
          </VideoWrapper>
        </VideoCover>
      </VideoCoverSpan>
    </>
  )
}

const VideoCoverSpan = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1050px) {
    background: ${CypherTheme.black};
  }
`
const VideoCover = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0 auto;
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  video {
    position: absolute;
    /* width: 100%; */
    height: 100%;
    top: 0;
    left: 0;
    object-fit: fill;
    opacity: 1;
    width: calc(var(--vh, 1vw) * 100);

    @media only screen and (max-width: 1050px) {
      width: 100% !important;
      max-width: 1200px;
      margin: 0 auto;
      /* padding: 24px; */
      /* object-fit: none;
            object-fit: cover;*/
      object-fit: contain;
    }
  }

  .image-cover {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 1438px;
  }
`

const PlayCover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 64px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`
const PlayButton = styled(BsPlayFill)`
  width: 32px;
  height: 32px;
`

export default Shuffle
