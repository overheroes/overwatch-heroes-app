import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
const ROOT_URL = 'https://overwatch-data.herokuapp.com/img/heroes';

class HeroDetails extends Component {

  render() {
    const { hero } = this.props;

    // TODO extract to method, with big switch case on different ability props
    const abilities = hero.abilities.map(a => {
      const imageUrl = a.image ? `${ROOT_URL}/${a.image}` : '';
      return <View key={a.name} style={styles.ability}>
        <Image
          source={{uri: imageUrl}}
          style={styles.thumbnail}
        />
      <View style={styles.abilityDetails}>
          <Text>{a.name}</Text>
          <Text>{a.damage}</Text>
        </View>
      </View>;
    });

    return (
      <ScrollView style={styles.container}>
        <Image
          source={{uri: `${ROOT_URL}/${hero.picture}`}}
          style={styles.image}
        />
        <View style={styles.heading}>
            <Text style={styles.name}>{hero.class}</Text>
            <Text style={styles.title}>difficulty: {hero.difficulty}</Text>
            <View style={styles.separator}/>
        </View>
        <View>
          <Text style={styles.desc}>HP: {hero.hp}</Text>
          <Text style={styles.desc}>Armor: {hero.armor}</Text>
          <Text style={styles.desc}>Difficulty: {hero.difficulty}</Text>
        </View>
        {abilities}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  ability: {
    height: 40,
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  abilityDetails: {
    flex: 1,
    alignItems: 'center'
  },
  thumbnail: {
    width: 53,
    //height: 81,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'black',
  },
  heading: {
    backgroundColor: '#F8F8F8'
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    alignSelf: 'stretch',
    height: 250
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#DF34FF'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  class: {
    textAlign: 'center',
  },
  desc: {
    fontSize: 18,
    color: '#656565'
  }
});

export default HeroDetails;
