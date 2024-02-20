import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MovieProps from '../../models/class/movie';
import Button from '../../components/custom/button/Button'

const Home = ({ navigation }: { navigation: any }) => {
  const [MoviesObjLists, setMovies] = useState([])

  useEffect(() => {
    fetch('https://www.majorcineplex.com/apis/get_movie_avaiable')
      .then(res => res.json())
      .then((result) => {
        setMovies(result.movies)
      })
  }, [])

  const onDetailPressed = (id: number) => {
    navigation.navigate('Detail',{id: id})
  }

  return (
    <ScrollView >
      {MoviesObjLists.map((m: MovieProps) => (
        <View style={styles.root} key={m.id}>
          {/* <Pressable onPress={() => pressDetail(m.id)}> */}
            <Image
              style={styles.coverImage}
              source={{
                uri: m.poster_url,
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <View style={styles.textBox}>
              <Text style={styles.title}>
                {m.title_en}{' '}({' '}{m.title_th}{' '})

              </Text>
              <View style={{ flexDirection: 'row'}}>
                <Text style={styles.titleDetails}>
                  Director :
                </Text>
                <Text style={styles.details}>
                  {m.director}
                </Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={styles.titleDetails}>
                  Actor      :
                </Text>
                <Text style={styles.details}>
                  {m.actor}
                </Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={styles.titleDetails}>
                  Genre     :
                </Text>
                <Text style={styles.details}>
                  {m.genre}
                </Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={styles.titleDetails}>
                  Duration :
                </Text>
                <Text style={styles.details}>
                  {m.duration} minute
                </Text>
              </View>
            </View>
          {/* </Pressable> */}
          <Button text='Detail' onPress={()=> onDetailPressed(m.id)} page="HomePage" type="detail"/>
        </View>
        
      ))}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000000',
    backfaceVisibility: 'hidden',
    paddingBottom:10
  },
  coverImage: {
    height: 500,
    justifyContent: 'space-around',    //  <-- you can use "center", "flex-start",
    resizeMode: 'contain',
  },
  textBox: {
    margin: 5,
  },
  title: {
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
export default Home