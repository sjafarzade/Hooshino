/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import type {Node} from 'react';
import {Text, ImageBackground, View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.js';

const ImagePicker = (props): Node => {
  const {uri = null, onPress = null} = props;
  const image = uri ? {uri: uri} : require('../../../assets/img/account.png');
  return (
    <>
      <View style={styles.imageBackgroundParent}>
        <Pressable
          onPress={() => {
            onPress && onPress();
          }}>
          {({pressed}) => (
            <ImageBackground
              accessibilityRole={'image'}
              source={image}
              style={styles.background}
              imageStyle={styles.logo}></ImageBackground>
          )}
        </Pressable>
      </View>
    </>
  );
};

export default ImagePicker;
