import { useState, useEffect } from "react";
import { CrySoundProps } from "../../utils/typeScript";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import "./Card.css"


const CrySound: React.FC<CrySoundProps> = ({soundUrl}) => {
  const [ audio, setAudio ] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const soundElement = new Audio(soundUrl);
    setAudio(soundElement);
  }, [soundUrl]);

  const playAudio = () => {
    if(audio) {
      audio.play();
    }
  }

  return (
    <div className="sound">
      <button className="soundBtn" onClick={playAudio}><RecordVoiceOverIcon />
      </button>
    </div>
  );
};

export default CrySound;