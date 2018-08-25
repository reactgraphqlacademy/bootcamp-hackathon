import React from "react";

function Repo({ repo }) {
  return <p>{JSON.stringify(repo, null, 2)}</p>;
}

export default Repo;
