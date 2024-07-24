import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

var cellColor = '#f5f5f5';
var font_color = '#000a1a';
var description_color = '#000a1a';

// Import all possible food images
const images = {
  'ChickenMed.jpg': require('./assets/FoodPics/ChickenMed.jpg'),
  'Portobello.jpg': require('./assets/FoodPics/Portobello.jpg'),
  'KoreanRice.jpg': require('./assets/FoodPics/KoreanRice.jpg'),
  // Add more images as needed
};

const FoodCell = ({ name, description, price, image, onPress }) => {
  // Map the image name to the imported image
  const imageSource = images[image] || null;

  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <View style={styles.cellContent}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{'$'+price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    backgroundColor: cellColor, // Darker gray cell background
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    width: Dimensions.get('window').width - 20, // Full width minus padding
    alignSelf: 'center', // Center align each cell
  },
  cellContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width - 40, // Full width minus padding
    height: 200, // Adjust height as needed
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    color: font_color, // White text for name
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Futura',
  },
  price: {
    color: font_color, // White text for price
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'Futura',
  },
  description: {
    color: description_color, // Light gray text for description
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Futura',
  },
});

export default FoodCell;