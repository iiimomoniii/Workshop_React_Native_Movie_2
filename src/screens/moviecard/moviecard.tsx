import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import MovieProps from '../../models/class/movie';
import Button from '../../components/custom/button/Button';




const MovieCard = ({ navigation }: { navigation: any }) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<MovieProps[]>([]);




  useEffect(() => {
    fetch('https://www.majorcineplex.com/apis/get_movie_avaiable')
      .then(res => res.json())
      .then((result) => {
        setMovies(result.movies);
      });
  }, []);




  const onDetailPressed = (id: number) => {
    navigation.navigate('MoviecardDetail', { id: id });
  };




  const toggleFavorite = (id: number) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };




  useEffect(() => {
    setFavoriteMovies(movies.filter(movie => movie.favorite));
  }, [movies]);




  return (
    <ScrollView>
      <View>
        <Text style={styles.sectionTitle}>Movies</Text>
        {movies.map(m => (
          <MovieItem
            key={m.id}
            movie={m}
            onDetailPressed={onDetailPressed}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </View>
      <View>
        <Text style={styles.sectionTitle}>Favorite</Text>
        {favoriteMovies.map(m => (
          <MovieItem
            key={m.id}
            movie={m}
            onDetailPressed={onDetailPressed}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </View>
    </ScrollView>
  );
};




const MovieItem = ({
  movie,
  onDetailPressed,
  toggleFavorite,
}: {
  movie: MovieProps;
  onDetailPressed: (id: number) => void;
  toggleFavorite: (id: number) => void;
}) => {
  return (
    <View style={styles.root} key={movie.id}>
      <Image
        style={styles.coverImage}
        source={{
          uri: movie.poster_url,
        }}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <View style={styles.textBox}>
        <Text style={styles.title}>
          {movie.title_en}{' '}({' '}{movie.title_th}{' '})


        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleDetails}>
            Director :
          </Text>
          <Text style={styles.details}>
            {movie.director}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleDetails}>
            Actor      :
          </Text>
          <Text style={styles.details}>
            {movie.actor}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleDetails}>
            Genre     :
          </Text>
          <Text style={styles.details}>
            {movie.genre}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleDetails}>
            Duration :
          </Text>
          <Text style={styles.details}>
            {movie.duration} minute
          </Text>
        </View>
      </View>
      <Button
        text={movie.favorite ? 'Remove Favorite' : 'Add Favorite'}
        onPress={() => toggleFavorite(movie.id)}
        page="MoviecardPage"
        type="favorite"
      />
      <Button
        text="Detail"
        onPress={() => onDetailPressed(movie.id)}
        page="MoviecardPage"
        type="detail"
      />
    </View>
  );
};




const styles = StyleSheet.create({
  root: {
    backgroundColor: '#003366',
    paddingBottom: 10,
  },
  coverImage: {
    height: 500,
    justifyContent: 'space-around',
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },


  textBox: {
    marginLeft: 20,
    marginRight: 90,
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    color: '#ff9a00',
    fontWeight: 'bold'
  },
  titleDetails: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20,
    color: '#ff9a00'
  },
  details: {
    fontSize: 15,
    marginLeft: 10,
    color: '#ffffff'
  }
});

export default MovieCard;





