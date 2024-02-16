import { Col, Row, Spinner } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

import { useAppDispatch, useAppSelector } from "./Hooks";

import { useEffect } from "react";
import { getMusicAction } from "../redux/store/actions";

const MainSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const music = useAppSelector((state) => state.music.music);

  useEffect(() => {
    dispatch(getMusicAction()).then(() => {});
  }, []);

  console.log("Prova 1", music);
  return (
    <Col xs={12} md={9} className=" offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className=" mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {music && music.length > 0 ? (
                music.map((track) => <AlbumCard key={track.id} track={track} />)
              ) : (
                <div>
                  <Spinner variant="success" animation="border" />
                  <p>No Tracks Available</p>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default MainSection;
