import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl, FullscreenControl}  from 'react-map-gl';
const TOKEN = process.env.REACT_APP_MAP_BOX_TOKEN;

const fullScreenStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
  };
   const navigationControlsStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '10px'
  };
  
class Map extends Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };
 
    render() {
      
        return (
            <ReactMapGL 
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken={TOKEN} 
            >
                <div className="fullscreen" style={fullScreenStyle}>
                    <FullscreenControl />
                </div> 
                <div className="nav" style={navigationControlsStyle}>
                    <NavigationControl onViewportChange={this.updateViewport} />
                </div>
            </ ReactMapGL>
        )
    }
}

export default Map;