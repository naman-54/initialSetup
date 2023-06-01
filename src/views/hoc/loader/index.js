import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import Styles from './styles';

const Loader = props => {
  const loader = true;
  if (loader) {
    return null;
  }
  return (
    <>
      <View style={Styles.loaderContainer}>
        <View style={Styles.loaderView}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      </View>
    </>
  );
};

Loader.propTypes = {
  transparent: PropTypes.bool,
  animationType: PropTypes.string,
  style: PropTypes.object,
  setActionModalVisible: PropTypes.func,
  getLoader: PropTypes.func,
};

Loader.defaultProps = {
  style: {},
  transparent: true,
  animationType: 'fade',
  getLoader: () => {},
};

const mapStateToProps = state => {
  return {
    // isLoaderVisible: state?.loader?.isLoderVisible,
  };
};

export default connect(mapStateToProps, {})(Loader);
