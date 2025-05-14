import React from "react";
import Row from "./Row/Row";
import requests from "../../requests";

function RowList() {
  return (
    <>
      <div>
        <Row title="Now Playing" fetchUrl={requests.fetchPlaying} />
        <Row title="Popular" fetchUrl={requests.fetchPopular} />
        <Row title="Top Rated" fetchUrl={requests.fetchTop} />
        <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      </div>
    </>
  );
}

export default RowList;
