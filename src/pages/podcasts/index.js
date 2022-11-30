import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import Header from "../../components/header";
import { podCastService } from "../../services/podcasts.service";
import List from "./components/list";

const PodcastsList = (props) => {
  const [itemList, setItemList] = useState("none");
  const [loading, setLoading] = useState(false);
  const getList = () => {
    setItemList("request");
    podCastService
      .getList()
      .then((l) => {
        setItemList(l);
        setLoading(true);
      })
      .catch((error) => {});
  };

  switch (itemList) {
    case "none":
      getList();
      return null;
    case "request":
      return null;
  }

  return (
    <div>
      <Header loading={loading} />
      <Container>
        <List data={itemList.feed} />
      </Container>
    </div>
  );
};

export default PodcastsList;
