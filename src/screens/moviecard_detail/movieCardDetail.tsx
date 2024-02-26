import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import MovieProps from '../../models/class/movie';
//import MoviesObjLists from '../mock/movies.json';
import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';
import Button from '../../components/custom/button/Button';

const Detail = ({ navigation, route }: { navigation: any, route: any }) => {


  const [movie, setMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    fetch('https://www.majorcineplex.com/apis/get_movie_avaiable')
      .then(res => res.json())
      .then((result) => {
        const movies: MovieProps[] = result.movies;
        const selectedMovie = movies.find((m) => m.id === route.params.id);
        if (selectedMovie) {
          setMovie(selectedMovie);
        }
      })
  }, [route.params.id])

  if (!movie) {
    return null;
  }

  const onBackPressed = () => {
    navigation.navigate('Moviecard');
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Video
          source={{ uri: movie.tr_mp4 }}
          style={styles.video}
          controls={true}
          resizeMode="contain"
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text style={styles.title}>  {movie.title_en} ({movie.title_th})</Text>

          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.details}>
              <Text style={styles.titleDetails}>
                Director :{' '}
              </Text>
              {movie.director}
            </Text>
          </View>
          
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titleDetails}>
              Genre :{' '}
            </Text>
            <Text style={styles.details}>
              {movie.genre}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titleDetails}>
              Release Rate :{' '}
            </Text>
            <Text style={styles.details}>
              {movie.release_date}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titleDetails}>
              Duration :{' '}
            </Text>
            <Text style={styles.details}>
              {movie.duration} minute
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            
            <Text style={styles.details}>
            <Text style={styles.titleDetails}>
              Actor :{' '}
            </Text>
              {movie.actor}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.details}>
              <Text style={styles.titleDetails}>
                Synopsis (TH):{' '}
              </Text> {movie.synopsis_th}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.details}>
              <Text style={styles.titleDetails}>
                Synopsis (EN):{' '}
              </Text> {movie.synopsis_en}
            </Text>
          </View>


        </View>
        <Button text='Back' onPress={onBackPressed} page="CardDetailPage" type="back"/>

      </View>

    </ScrollView>

  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003366',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  video: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9, 
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: '#ff9a00',
    fontWeight: 'bold'
  },
  titleDetails: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
    color: '#ff9a00',
    alignItems: 'center',
  },
  details: {
    fontSize: 15,
    marginLeft: 10,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default Detail;



