import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    alert(`Message from ${name}: ${message}`);
  };

  const openFacebookPage = () => {
    Linking.openURL('https://www.facebook.com/people/BC-Meal-Prep/100094059345558/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

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
    flex: 1,
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
  formContainer: {
    marginBottom: 20,
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
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#000a1a',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
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

export default ContactMe;