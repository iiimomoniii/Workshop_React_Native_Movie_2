import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import MovieProps from '../../models/class/movie';
//import MoviesObjLists from '../mock/movies.json';


const Detail = ({ navigation, route }: {navigation: any, route:any}) => {


  const [movie, setMovie] = useState<MovieProps | null>(null);

 useEffect(()=>{
   fetch('https://www.majorcineplex.com/apis/get_movie_avaiable')
   .then(res => res.json())
   .then((result)=> {
    const movies: MovieProps[] = result.movies;
        const selectedMovie = movies.find((m) => m.id === route.params.id);
        if (selectedMovie) {
          setMovie(selectedMovie);
        }
   })
 },[route.params.id])

 if (!movie) {
  return null; // You can return a loading indicator or any other component while waiting for the movie data to load
}

 return (
  <ScrollView>
   <View>
     <Image
       style={styles.coverImage}
       source={{
         uri: movie.poster_url
       }}
     />
     <View style={styles.textBox}>
       <Text style={{ fontSize:25 }}>{movie.title_th}</Text>
       <Text style={{ paddingTop:10 , fontSize:20}}>{movie.synopsis_th}</Text>
     </View>
   </View>
   </ScrollView>
 );
};


const styles = StyleSheet.create({
 coverImage: {
   width: '100%',
   height: 300,
 },
 textBox: {
   margin: 5,
 },
});


export default Detail;



