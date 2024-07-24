import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const mealsSchedule = [
  {
    week: 'Week 1: Jul 28 - Aug 3 ',
    meals: [
      'Chicken Salad',
      'Beef Stir-Fry',
      'Grilled Salmon',
    ],
  },
  {
    week: 'Week 2: Aug 4 - Aug 9',
    meals: [
      'Turkey Wraps',
      'Shrimp Tacos',
      'Lentil Curry',
    ],
  },
  {
    week: 'Week 3: Aug 10 - Aug 15',
    meals: [
      'Beef Tacos',
      'Veggie Stir-Fry',
      'Chicken Alfredo',
    ],
  },
  // Add more weeks as needed
];

const Schedule = () => {
  const openFacebookPage = () => {
    Linking.openURL('https://www.facebook.com/people/BC-Meal-Prep/100094059345558/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weekly Meal Schedule</Text>
      
      {mealsSchedule.map((week, index) => (
        <View key={index} style={styles.scheduleContainer}>
          <Text style={styles.weekTitle}>{week.week}</Text>
          {week.meals.map((meal, i) => (
            <Text key={i} style={styles.mealItem}>{meal}</Text>
          ))}
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Email: bcmealprep.lkn@gmail.com</Text>
        <Text style={styles.footerText}>Phone: (123) 456-7890</Text>
        <TouchableOpacity style={styles.facebookButton} onPress={openFacebookPage}>
          <Text style={styles.facebookButtonText}>Visit Us on Facebook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allows the ScrollView to expand
    padding: 20,
    backgroundColor: '#E9CDAB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000a1a',
    fontFamily: 'Futura',
    marginBottom: 20,
  },
  scheduleContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000a1a',
  },
  weekTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000a1a',
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  mealItem: {
    fontSize: 16,
    color: '#000a1a',
    fontFamily: 'Futura',
    marginBottom: 5,
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
  footerText: {
    fontSize: 16,
    color: '#000a1a',
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  facebookButton: {
    backgroundColor: '#4267B2', // Facebook blue
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  facebookButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Futura',
  },
});

export default Schedule;