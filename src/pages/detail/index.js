import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Header from "../../components/header";
import { podCastService } from "../../services/podcasts.service";
import { useParams } from "react-router-dom";
import LatDescrp from "../../components/latDescrp";
import PodCastTable from "./components/table";

const PodcastsDetail = (props) => {
  const [item, setItem] = useState("none");
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const listDataAux = [];
  const params = useParams();
  const getItem = () => {
    setItem("request");
    podCastService
      .getOne(params.podcastId)
      .then((l) => {
        setItem(l);
        podCastService.getFeed(l.results[0].feedUrl).then((resp) => {
          const listItems = [].slice.call(resp.getElementsByTagName("item"));
          for (let i = 0; i < listItems.length; i++) {
            listDataAux.push({
              title: !!listItems[i].childNodes[1].innerHTML
                ? listItems[i].childNodes[1].innerHTML
                : "",
              date: !!listItems[i].childNodes[3].innerHTML
                ? new Date(listItems[i].childNodes[3].innerHTML)
                : "",
              duration: !!listItems[i].childNodes[17].innerHTML
                ? listItems[i].childNodes[17].innerHTML
                : "",
              url: !!listItems[i].childNodes[15].attributes.url
                ? listItems[i].childNodes[15].attributes.url.value
                : "",
              idCollection: params.podcastId,
              id: !!listItems[i].childNodes[15].attributes.url
                ? listItems[i].childNodes[15].attributes.url.value.split(
                    "id="
                  )[1]
                : "",
            });
          }
          setListData(listDataAux);
          setLoading(true);
        });
      })
      .catch((error) => {});
  };

  switch (item) {
    case "none":
      getItem();
      return null;
    case "request":
      return null;
  }

  return (
    <div>
      <Header loading={loading} />
      <Container>
        <Row>
          <Col>
            <LatDescrp data={item} />
          </Col>
          <Col>
            <PodCastTable data={listData} podcast={item.results[0]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PodcastsDetail;
