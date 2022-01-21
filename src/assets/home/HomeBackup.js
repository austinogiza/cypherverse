import React, { useEffect, useRef, useState } from "react"
import Malarian from "assets/videos/Malarian.mp4"
// import Orb_3D from "assets/videos/Orb.mp4"
import HASH from "assets/videos/Hash.mp4"
import hashgif from "assets/videos/hash.gif"
import malariangif from "assets/videos/malarian.gif"
import styled from "styled-components"
import { BsPlayFill } from "react-icons/bs"
import { CypherTheme } from "styles/ColorStyles"
import gsap from "gsap"
const Home = () => {
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
  const [color, setColor] = useState(null)
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
    gsap.to(".image_bg_gif", 0, { css: { visibility: "visible" } })
    document.title = "Home - Cypherverse"
    if (localStorage.getItem("cypherverse") === null) {
      localStorage.setItem("cypherverse", JSON.stringify("loaded"))

      localStorage.setItem("cyphervisits", JSON.stringify(0))
      setImage(items[0])
      setColor(malariangif)
    } else {
      if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) ===
        items.length
      ) {
        setImage(items[0])
        localStorage.setItem("cyphervisits", JSON.stringify(0))
        setColor(malariangif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 1
      ) {
        setImage(items[0])
        localStorage.setItem("cyphervisits", JSON.stringify(0))

        setColor(malariangif)
      } else {
        setImage(items[1])
        localStorage.setItem("cyphervisits", JSON.stringify(1))
        setColor(hashgif)
      }
    }
  }, [])
  const changeVideo = () => {
    if (images.id === 1) {
      setImage(items[1])
      setColor(hashgif)
    } else if (images.id === 2) {
      setImage(items[0])
      setColor(malariangif)
    }
  }

  const playingState = () => {
    setPlaying(true)
  }

  return (
    <Body className="image_bg_gif" color={color}>
      <VideoCoverSpan>
        <VideoCover>
          <VideoWrapper>
            {!playing && (
              <PlayCover className="image_bg_gif">
                <PlayButton onClick={() => videoHandler("play")} />
              </PlayCover>
            )}
            <video
              autoPlay={true}
              onEnded={changeVideo}
              playing={true}
              onPlayingCapture={playingState}
              onPlaying={playingState}
              src={images.image}
              volume={1}
              muted={false}
              ref={videoRef}
              controls={false}
            />
          </VideoWrapper>
        </VideoCover>
      </VideoCoverSpan>
    </Body>
  )
}

const Body = styled.div`
  visibility: hidden;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.color}) no-repeat center center/cover;
  position: fixed;
  top: 0;
  left: 0;
`

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
    object-fit: contain;
    opacity: 1;
    width: calc(var(--vh, 1vw) * 100);
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
  visibility: hidden;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`
const PlayButton = styled(BsPlayFill)`
  width: 32px;
  height: 32px;
`

export default Home
