import styled from "styled-components"
import ReactPlayer from "react-player"
import legend from "assets/videos/trailer.mp4"
import { CypherTheme } from "styles/ColorStyles"
import { Header3, Body3 } from "styles/TextStyles"
import { BsPlayFill } from "react-icons/bs"
import React, { useState, useRef, useEffect } from "react"

const NFTHero = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const autoPlayVideo = () => {
    videoRef.current.play()
    setPlaying(true)
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

  useEffect(() => {}, [])
  return (
    <>
      <Body>
        <Cover>
          <VideoWrapper>
            {!playing && (
              <PlayCover className="image_bg_gif">
                <PlayButton onClick={() => videoHandler("play")} />
              </PlayCover>
            )}

            <video
              autoPlay
              playing={playing}
              onReady={autoPlayVideo}
              src={legend}
              volume={1}
              muted={false}
              controls={true}
              ref={videoRef}
            />
          </VideoWrapper>

          <Title>About Meru-36: Destiny’s Fall</Title>
          <RowText>
            With its AI allies, humanity settled the Cosmos. This period, known
            as the Great Diaspora era, was a time of peace and prosperity. But
            progress came at a cost: humankind became too reliant on AI and lost
            its freedom to its machine overseers. But one group of machines
            decided to fight back. <br /> <br />
            These AIs, along with their human and post-human allies, fought the
            nine-decade “Synthetic War”. Meru-36: Destiny’s Fall tells the tale
            of the war and its final Cosmos-changing battle, which contributed
            to the rise of the Centopoly empire, the main antagonist of Legends
            of Cypher Season One.
          </RowText>
        </Cover>
      </Body>
    </>
  )
}

const Body = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${CypherTheme.primary};
  height: 100%;
  padding: 16px;
`

const Cover = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const RowText = styled(Body3)`
  margin: 16px 0;
  color: ${CypherTheme.white};
  text-align: left;
`

const Title = styled(Header3)`
  color: ${CypherTheme.white};
  margin: 64px 0 16px 0;
  text-align: center;
  @media only screen and (max-width: 700px) {
    text-align: left;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 653px;
  max-width: 1312px;
  margin: 0 auto;
  @media only screen and (max-width: 700px) {
    height: 280px;
  }

  video {
    max-height: 653px;
    min-height: 250px;
    height: 100%;
    position: relative;
    z-index: 40;
    width: 100%;
    max-width: 1312px;
    object-fit: contain;
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
export default NFTHero
