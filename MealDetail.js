import React from 'react';
import { View, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from 'react-native';

// Import all possible food images
const images = {
  'ChickenMed.jpg': require('./assets/FoodPics/ChickenMed.jpg'),
  'Portobello.jpg': require('./assets/FoodPics/Portobello.jpg'),
  'KoreanRice.jpg': require('./assets/FoodPics/KoreanRice.jpg'),
  // Add more images as needed
};

const toggleOrder = () => {
    // Simply alert on button press without animation
    alert('Order button pressed');
  };

const MealDetail = ({ route }) => {
  const { meal } = route.params;

  // Map the image name to the imported image
  const imageSource = images[meal.image] || null;

  return (
    <View style={styles.container}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.name}>{meal.name}
        {meal.glutenFree && <Text style={styles.dietarySymbol}>   GF</Text>} 
        {meal.dairyFree && <Text style={styles.dietarySymbol}>   DF</Text>}
        {meal.vegan && <Text style={styles.dietarySymbol}>   VE</Text>} 
      </Text>
      
      <Text style={styles.price}>{meal.price}</Text>
      <Text style={styles.description}>{meal.description}</Text>
      <View style={styles.ingredientsBox}>
        <Text style={styles.ingredientsLabel}>Ingredients:</Text>
        <Text style={styles.ingredients}>{meal.ingredients}</Text>
      </View>
    <View>
        <Text>   </Text>
        <TouchableOpacity style={styles.orderButton} onPress={toggleOrder}>
          <Text style={styles.orderButtonText}>Order</Text>
        </TouchableOpacity>
    </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9CDAB', // Background color
    padding: 20,
  },
  image: {
    width: Dimensions.get('window').width - 40, // Full width minus padding
    height: 200, // Adjust height as needed
    borderRadius: 10,
    marginVertical: 20,
  },
  name: {
    color: '#000a1a', // Navy text for name
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  price: {
    color: '#000a1a', // Navy text for price
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  description: {
    color: '#000a1a', // Navy text for description
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Futura',
    marginBottom: 20,
  },
  ingredientsBox: {
    backgroundColor: '#ffffff', // White background for ingredients box
    padding: 15,
    borderRadius: 10,
  },
  ingredientsLabel: {
    color: '#000a1a', // Navy text for ingredients label
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  ingredients: {
    color: '#000a1a', // Navy text for ingredients
    fontSize: 14, // Smaller font size for ingredients
    textAlign: 'center',
    fontFamily: 'Futura',
  },
  dietaryInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dietarySymbol: {
    fontSize: 12,
    marginHorizontal: 10,
    fontFamily: 'Ariel',
  },
  orderButton: {
    backgroundColor: '#000a1a', // White background for the button
    borderRadius: 5,
    padding: 10,
    width: 100,
    alignSelf: 'center',
    zIndex: 2, // Ensure button is on top of other elements
  },
  orderButtonText: {
    color: '#ffffff', // Dark navy text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Futura',
  },
});

export default MealDetail;