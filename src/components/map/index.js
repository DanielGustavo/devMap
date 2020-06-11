import React, { useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as UsersAttacherCreators } from '../../store/modules/usersAttacher/actions';
import { Avatar } from './styles';

const Map = ({ show, users }) => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 38.67632724175347,
    longitude: -90.45378811992902,
    zoom: 11,
    minZoom: 1,
  });

  const showUsersAttacher = show;

  return (
    <>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPGL_TOKEN}
        onViewportChange={(changedViewport) => {
          setViewport({ ...changedViewport, width: '100vw', height: '100vh' });
        }}
        onClick={(e) => showUsersAttacher(e.lngLat)}
      >
        {users.map((user) => (
          <Marker
            longitude={user.coordinates.long}
            latitude={user.coordinates.lat}
            key={user.id}
          >
            <Avatar
              size={viewport.zoom * 6 > 30 ? viewport.zoom * 6 : 30}
              className="avatar"
              alt={`${user.username} avatar`}
              src={user.photo}
            />
          </Marker>
        ))}
      </MapGL>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(UsersAttacherCreators, dispatch);

Map.propTypes = {
  show: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      coordinates: PropTypes.shape({
        long: PropTypes.number.isRequired,
        lat: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Map);
