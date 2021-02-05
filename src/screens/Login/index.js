'use strict';
import type {Node} from 'react';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from '../../component/ImagePicker/index.js';
import styles from './styles.js';
const Login = (props): Node => {
  const [image, setImage] = useState(null);
  const handleImagePicker = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        // saveToPhotos: true,
      },
      (res) => {
        setImage(res.uri);
      },
    );
  };
  return (
    <>
      <ImagePicker uri={image} onPress={handleImagePicker} />
      <View style={styles.sectionContainer}>
        <Input
          placeholder="Name"
          errorStyle={{color: 'red'}}
          // errorMessage="create apk"
        />
      </View>
      <View style={styles.sectionContainer}>
        <Input placeholder="Family" errorStyle={{color: 'red'}} />
      </View>
      <View style={styles.sectionContainer}>
        <Input placeholder="Phone" errorStyle={{color: 'red'}} />
      </View>
      <View style={styles.sectionContainer}>
        <Button title="Submit"></Button>
      </View>
    </>
  );
};

export default Login;
