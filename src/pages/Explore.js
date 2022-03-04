import React, { useEffect, useRef, useState } from "react"
import MalarianGroup1 from "assets/videos/Malarian_Group1.mp4"
import MalarianGroup2 from "assets/videos/Malarian_Group2.mp4"
import MalarianGroup3 from "assets/videos/Malarian_Group3.mp4"
import MalarianGroup4 from "assets/videos/Malarian_Group4.mp4"
import MalarianGroup5 from "assets/videos/Malarian_Group5.mp4"
import MalarianGroup6 from "assets/videos/Malarian_Group6.mp4"

import HashGroup1 from "assets/videos/Hash_Group1.mp4"
import HashGroup2 from "assets/videos/Hash_Group2.mp4"
import HashGroup3 from "assets/videos/Hash_Group3.mp4"
import HashGroup4 from "assets/videos/Hash_Group4.mp4"
import HashGroup5 from "assets/videos/Hash_Group5.mp4"
import hashgif from "assets/videos/hash.gif"
import malariangif from "assets/videos/malarian.gif"
import styled from "styled-components"
import { BsPlayFill } from "react-icons/bs"
import { CypherTheme } from "styles/ColorStyles"
import gsap from "gsap"
const Explore = () => {
  const items = [
    {
      id: 1,
      image: MalarianGroup1,
    },
    {
      id: 2,
      image: HashGroup1,
    },
    {
      id: 3,
      image: MalarianGroup2,
    },
    {
      id: 4,
      image: HashGroup2,
    },
    {
      id: 5,
      image: MalarianGroup3,
    },
    {
      id: 6,
      image: HashGroup3,
    },
    {
      id: 7,
      image: MalarianGroup4,
    },
    {
      id: 8,
      image: HashGroup4,
    },
    {
      id: 9,
      image: MalarianGroup5,
    },
    {
      id: 10,
      image: HashGroup5,
    },
    {
      id: 11,
      image: MalarianGroup6,
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
        setImage(items[2])
        localStorage.setItem("cyphervisits", JSON.stringify(2))

        setColor(malariangif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 2
      ) {
        setImage(items[3])
        localStorage.setItem("cyphervisits", JSON.stringify(3))

        setColor(hashgif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 3
      ) {
        setImage(items[4])
        localStorage.setItem("cyphervisits", JSON.stringify(4))

        setColor(malariangif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 4
      ) {
        setImage(items[5])
        localStorage.setItem("cyphervisits", JSON.stringify(5))

        setColor(hashgif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 5
      ) {
        setImage(items[6])
        localStorage.setItem("cyphervisits", JSON.stringify(6))

        setColor(malariangif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 6
      ) {
        setImage(items[7])
        localStorage.setItem("cyphervisits", JSON.stringify(7))

        setColor(hashgif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 7
      ) {
        setImage(items[8])
        localStorage.setItem("cyphervisits", JSON.stringify(8))

        setColor(malariangif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 8
      ) {
        setImage(items[9])
        localStorage.setItem("cyphervisits", JSON.stringify(9))

        setColor(hashgif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 9
      ) {
        setImage(items[10])
        localStorage.setItem("cyphervisits", JSON.stringify(10))

        setColor(malariangif)
      } else if (
        parseInt(JSON.parse(localStorage.getItem("cyphervisits"))) === 10
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
  const changeVideo = (id) => {
    if (id === 1) {
      setImage(items[1])
      setColor(hashgif)
    } else if (id === 2) {
      setImage(items[2])
      setColor(malariangif)
    } else if (id === 3) {
      setImage(items[3])
      setColor(hashgif)
    } else if (id === 4) {
      setImage(items[4])
      setColor(malariangif)
    } else if (id === 5) {
      setImage(items[5])
      setColor(hashgif)
    } else if (id === 6) {
      setImage(items[6])
      setColor(malariangif)
    } else if (id === 7) {
      setImage(items[7])
      setColor(hashgif)
    } else if (id === 8) {
      setImage(items[8])
      setColor(malariangif)
    } else if (id === 9) {
      setImage(items[9])
      setColor(hashgif)
    } else if (id === 10) {
      setImage(items[10])
      setColor(malariangif)
    } else if (id === 11) {
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
              onEnded={(id) => changeVideo(images.id)}
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

export default React.memo(Explore)
