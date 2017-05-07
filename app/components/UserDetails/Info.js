import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './style';
import Row from './Row';
import { capitalizeFirstLetter } from '../../helpers/string';

const Info = ({ login, dob, location, registered }) => {
  return (
    <View style={styles.infoContainer}>
      <Row
        label="city"
        body={capitalizeFirstLetter(location.city)}
      />
      <Row
        label="birthday"
        body={moment(dob).format('MMM Do, YYYY')}
      />
      <Row
        label="registered"
        body={moment(registered).format('MMM Do, YYYY')}
      />
      <Row
        label="username"
        body={login.username}
      />
    </View>
  )
};

export default Info;