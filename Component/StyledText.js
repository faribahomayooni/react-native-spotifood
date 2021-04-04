import * as React from 'react';
import {Text} from 'react-native'
// import { Text, TextProps } from './Themed. js';

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
