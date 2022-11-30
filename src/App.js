import "./styles/main.less";
import PodCastsList from "./pages/podcasts";
import PodcastsDetail from "./pages/detail";
import PodcastsPlayer from "./pages/media";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/podcast/:podcastId/episode/:episodeId"
          element={<PodcastsPlayer />}
        />
        <Route exact path="/podcast/:podcastId" element={<PodcastsDetail />} />
        <Route exact path="/" element={<PodCastsList />} />
      </Routes>
    </Router>
  );
}

export default App;
