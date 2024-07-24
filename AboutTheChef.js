import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const AboutTheChef = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/chef.png')} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Beau Fox Tran</Text>
        <Text style={styles.detail}>Age: 19</Text>
        <Text style={styles.detail}>School: University of South Carolina</Text>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            Beau is a talented young chef with a passion for culinary arts. He has been honing his skills since a young age and is currently studying at the University of South Carolina. His dedication to the craft is evident in every dish he prepares.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allows the ScrollView to expand
    backgroundColor: '#E9CDAB',
    padding: 20,
    // alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: '#000a1a', // Border color
    borderRadius: 15,
    overflow: 'hidden', // Ensures the image does not overflow the border
    marginBottom: 20,
    height: 300,
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: 300,
    resizeMode: 'cover', // Ensures image covers the container
  },
  detailsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000a1a',
    fontFamily: 'Futura',
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000a1a',
    fontFamily: 'Futura',
  },
  descriptionBox: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555555',
    fontFamily: 'Futura',
  },
});

export default AboutTheChef;