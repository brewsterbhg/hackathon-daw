import react from 'react';
import {ReactComponent as PlayButton} from '../assets/play.svg';

export default function Transport({
    onPlay,
    ...props
}) {
    return(
        <div onClick={onPlay}>
        <PlayButton />
        </div>
        );
    }
