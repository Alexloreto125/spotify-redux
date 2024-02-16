import React from "react";
import { Datum, Spotify } from "../redux/interfaces/interfaces";
import "../assets/css/Cards.css";
interface AlbumCardProps {
  track: Datum;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ track }) => {
  const { title, artist, album } = track;

  return (
    <div className="col text-center cards">
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
