import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getPhotos} from '../store/actions/postActions';
export const HomeScreen = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const {photos} = useSelector(state => state.photos);
  const dispatch = useDispatch();
  // console.log(photos);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('FullImageScreen', {data: item})}
        style={styles.container}>
        <ImageBackground
          style={styles.imageStyle}
          source={{uri: `${item.urls.small}`}}>
          <View style={{padding: 6, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <Text numberOfLines={1} style={styles.textStyle}>
              Author:{item?.user.name}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const onFetch = async () => {
    setLoading(true);
    await dispatch(getPhotos(page));
    setLoading(false);
  };
  useEffect(() => {
    onFetch(page);
  }, [page]);

  return (
    <View>
      <FlatList
        data={photos}
        extraData={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => {
          if (!loading) {
            setPage(prev => prev + 1);
          }
        }}
        ListFooterComponent={() =>
          loading ? (
            <View style={{alignItems: 'center'}}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexShrink: 1,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: '#ffffff',
  },
});
