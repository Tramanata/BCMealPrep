import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodCell from './FoodCell';
import foodsData from './assets/foods.json'; // Import the JSON file directly
import MealDetail from './MealDetail'; // Import the new MealDetail screen
import MenuModal from './MenuModal'; // Import the new MenuModal component
import AboutTheChef from './AboutTheChef'; // Import the new AboutTheChef screen
import ContactMe from './ContactMe'; // Import the new ContactMe screen
import Schedule from './Schedule'; // Import the new ContactMe screen

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [foods, setFoods] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    // Set the imported JSON data to state
    setFoods(foodsData);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderItem = ({ item }) => (
    <FoodCell
      name={item.name}
      description={item.description}
      price={item.price}
      image={item.image} // Pass image name to FoodCell
      onPress={() => navigation.navigate('MealDetail', { meal: item })}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.navySpace} />
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.brandText}>BC Meal Prep</Text>
      </View>
      <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1} // One cell per row
      />
      <MenuModal visible={menuVisible} onClose={() => setMenuVisible(false)} navigation={navigation} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Home',
            headerStyle: {
              backgroundColor: '#000a1a', // Dark navy color
            },
            headerTintColor: '#ffffff', // White text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Futura',
            },
          }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          options={{
            title: 'Meal Details',
            headerStyle: {
              backgroundColor: '#000a1a', // Dark navy color
            },
            headerTintColor: '#ffffff', // White text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Futura',
            },
          }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{
            title: 'Schedule',
            headerStyle: {
              backgroundColor: '#000a1a', // Dark navy color
            },
            headerTintColor: '#ffffff', // White text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Futura',
            },
          }}
        />
        <Stack.Screen
          name="AboutTheChef"
          component={AboutTheChef}
          options={{
            title: 'About the Chef',
            headerStyle: {
              backgroundColor: '#000a1a', // Dark navy color
            },
            headerTintColor: '#ffffff', // White text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Futura',
            },
          }}
        />
        <Stack.Screen
          name="ContactMe"
          component={ContactMe}
          options={{
            title: 'Contact Us',
            headerStyle: {
              backgroundColor: '#000a1a', // Dark navy color
            },
            headerTintColor: '#ffffff', // White text color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Futura',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9CDAB', // Background color
  },
  navySpace: {
    height: 50, // Height of the top bar
    backgroundColor: '#000a1a', // Dark navy color
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center',
    backgroundColor: '#000a1a', // Dark navy color
    width: '100%',
    paddingVertical: 10, // Space above and below the logo
    paddingHorizontal: 20, // Horizontal padding
    position: 'relative', // Allows positioning of the menu button
  },
  menuButton: {
    backgroundColor: '#ffffff', // White background for the button
    borderRadius: 5,
    padding: 10,
    position: 'absolute', // Absolute positioning within the container
    top: 40, // Distance from the top of the container
    right: 20, // Distance from the right edge of the container
    zIndex: 2, // Ensure button is on top of other elements
  },
  menuButtonText: {
    color: '#000a1a', // Dark navy text
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Futura',
  },
  logo: {
    width: Dimensions.get('window').width * 0.5, // Adjust as needed
    height: 100, // Adjust height as needed
    left: -60, // Distance from the left edge of the container
    resizeMode: 'contain', // Adjust image aspect ratio
  },
  brandText: {
    color: '#ffffff', // White text for brand name
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: -105, // Space between logo and text
    fontFamily: 'Futura', // Use the built-in Roboto font
  },
});

export default App;