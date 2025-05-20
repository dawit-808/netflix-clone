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

        <h2 className="text-center font-semibold m-4">Genres</h2>

        <Row title="Action" fetchUrl={requests.fetchAction} />
        <Row title="Comedy" fetchUrl={requests.fetchComedy} />
        <Row title="Romance" fetchUrl={requests.fetchRomance} />
        <Row title="Documentary" fetchUrl={requests.fetchDocumentary} />
      </div>
    </>
  );
}

export default RowList;
