import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

export const FullImageScreen = ({navigation, route}) => {
  const {data} = route.params;

  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={{uri: `${data.urls.full}`}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
