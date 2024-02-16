import React from "react";
import { Datum, Spotify } from "../redux/interfaces/interfaces";
import "../assets/css/Cards.css";
import { useDispatch } from "react-redux";
import { setCurrentTrackPreviewUrl } from "../redux/store/actions";
import Player from "./Player";
interface AlbumCardProps {
  track: Datum;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ track }) => {
  const { title, artist, album } = track;
  const dispatch = useDispatch();
  const handleCardClick = () => {
    const previewUrl = track.preview;
    dispatch(setCurrentTrackPreviewUrl(previewUrl));
    console.log(previewUrl);
  };
  return (
    <div className="col text-center cards" onClick={handleCardClick}>
      {album.cover_medium && (
        <img className="img-fluid" src={album.cover_medium} alt={title} />
      )}
      <p>
        Track: {title} Artist: {artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
