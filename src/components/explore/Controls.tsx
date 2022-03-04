import React, { FC, useEffect, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { AiOutlinePlayCircle, AiOutlinePause } from "react-icons/ai";
import { CypherTheme } from "styles/ColorStyles";
import styled from "styled-components";

const Controls: FC = (props) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [pause, setPause] = useState<boolean>(false);
  // const [song, setSongs] = useState<
  //   {
  //     audio: string;
  //     id: string;
  //   }[]
  // >(data());

  // const [currentSong, setCurrentSong] = useState<any>(song[0]);

  const handlePause = () => {
    setPause(!pause);
  };

  const handleVolumn = () => {
    setClicked(!clicked);
  };
  const playSong = () => {
    setPause(true);
  };

  useEffect(() => {
    playSong();
  }, []);

  return (
    <SongController>
      {clicked ? (
        <>
          <SongVolumnOff onClick={handleVolumn} />
        </>
      ) : (
        <>
          <SongVolumnOn onClick={handleVolumn} />
        </>
      )}

      {pause ? (
        <>
          <SongPause onClick={handlePause} />
        </>
      ) : (
        <>
          <SongPlay onClick={handlePause} />
        </>
      )}
    </SongController>
  );
};

const SongController = styled.div`
  height: 78px;
  width: 124px;
  background: rgba(18, 0, 0, 0.7);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 41;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SongVolumnOff = styled(FiVolumeX)`
  height: 32px;
  width: 32px;
  cursor: pointer;
  color: ${CypherTheme.white};
  margin: 8px;
`;
const SongVolumnOn = styled(FiVolume2)`
  height: 32px;
  width: 32px;
  cursor: pointer;
  color: ${CypherTheme.white};
  margin: 8px;
`;
const SongPlay = styled(AiOutlinePlayCircle)`
  height: 32px;
  width: 32px;
  cursor: pointer;
  margin: 8px;
  color: ${CypherTheme.white};
`;

const SongPause = styled(AiOutlinePause)`
  height: 32px;
  width: 32px;
  cursor: pointer;
  margin: 8px;
  color: ${CypherTheme.white};
`;

export default Controls;
