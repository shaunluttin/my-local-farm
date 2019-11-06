import React from "react";
import MapWithLeaflet from "./components/MapWithLeaflet";
import MapWithMapbox from "./components/MapWithMapbox";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MapWithReactMapGL from "./components/MapWithReactMapGL.js";
import Layout from './layout/Layout';

/**
 * TODO Add dynamic React routing for the different maps.
 */
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <section>
            <Route path="/" exact component={MapWithMapbox} />
            {/*
              Comparison of Mapbox, Mapbox-GL, and Leaflet
              https://stackoverflow.com/a/35070443/1108891
            */}
            <Route path="/mapbox" component={MapWithMapbox} />
            <Route path="/leaflet" component={MapWithLeaflet} />
            <Route path="/reactmap" component={MapWithReactMapGL} />
          </section>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
