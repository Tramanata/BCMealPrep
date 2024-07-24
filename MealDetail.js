import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Text, TextInput, Linking } from 'react-native';

const images = {
  'ChickenMed.jpg': require('./assets/FoodPics/ChickenMed.jpg'),
  'Portobello.jpg': require('./assets/FoodPics/Portobello.jpg'),
  'KoreanRice.jpg': require('./assets/FoodPics/KoreanRice.jpg'),
  // Add more images as needed
};

const MealDetail = ({ route }) => {
  const { meal } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Ensure price is a number
  const price = parseFloat(meal.price);
  if (isNaN(price)) {
    console.error('Invalid price value:', meal.price);
    return null; // or handle error as needed
  }

  // Map the image name to the imported image
  const imageSource = images[meal.image] || null;

  // Calculate tax and total cost
  const TAX_RATE = 0.07; // 7% tax rate
  const subtotal = price * quantity;
  const taxAmount = (subtotal * TAX_RATE).toFixed(2);
  const totalCost = (subtotal + parseFloat(taxAmount)).toFixed(2);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleOrder = () => {
    // Handle order logic here
    alert(`Order placed for ${quantity} ${meal.name}(s) with customizations: ${customizations}. Total Cost: $${totalCost}. Contact Info: ${name}, ${email}, ${phoneNumber}`);
  };

  const openFacebookPage = () => {
    Linking.openURL('https://www.facebook.com/people/BC-Meal-Prep/100094059345558/');
  };

  return (
    <ScrollView style={styles.container}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.name}>
        {meal.name}
        {meal.glutenFree && <Text style={styles.dietarySymbol}>   GF</Text>}
        {meal.dairyFree && <Text style={styles.dietarySymbol}>   DF</Text>}
        {meal.vegan && <Text style={styles.dietarySymbol}>   VE</Text>}
      </Text>
      
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.description}>{meal.description}</Text>
      <View style={styles.ingredientsBox}>
        <Text style={styles.ingredientsLabel}>Ingredients:</Text>
        <Text style={styles.ingredients}>{meal.ingredients}</Text>
      </View>

      <View style={styles.orderContainer}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        
        <Text style={styles.inputLabel}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.customizationLabel}>Customizations:</Text>
        <TextInput
          style={styles.customizationInput}
          placeholder="Enter customizations"
          value={customizations}
          onChangeText={setCustomizations}
        />

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.taxAmount}>Tax: ${taxAmount}</Text>
        <Text style={styles.totalCost}>Total Cost: ${totalCost}</Text>

        <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
          <Text style={styles.orderButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9CDAB',
    padding: 20,
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  name: {
    color: '#000a1a',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  price: {
    color: '#000a1a',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  description: {
    color: '#000a1a',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Futura',
    marginBottom: 20,
  },
  ingredientsBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
  },
  ingredientsLabel: {
    color: '#000a1a',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  ingredients: {
    color: '#000a1a',
    fontSize: 14,
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
  orderContainer: {
    marginVertical: 20,
    paddingBottom: 50, // Add space between the button and bottom of the screen
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000a1a',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#000a1a',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  customizationLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000a1a',
    marginBottom: 10,
  },
  customizationInput: {
    height: 50,
    borderColor: '#000a1a',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#000a1a',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000a1a',
  },
  taxAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000a1a',
    textAlign: 'center',
    marginBottom: 10,
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000a1a',
    textAlign: 'center',
    marginBottom: 20,
  },
  orderButton: {
    backgroundColor: '#000a1a',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  orderButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Futura',
  },
  footer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000a1a',
    alignItems: 'center',
  },
});

export default MealDetail;