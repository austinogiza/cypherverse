import { v4 as uuidv4 } from "uuid";
import Hash from "songs/Hash.mp3";
import Malarian from "songs/Malarian.mp3";
function chillHop() {
  return [
    {
      name: "Hash",
      artist: "Hash",
      audio: Hash,

      id: uuidv4(),
      active: true,
    },

    {
      name: "Malarian",
      artist: "Malarian",
      audio: Malarian,

      id: uuidv4(),
      active: true,
    },
  ];
}

export default chillHop;
