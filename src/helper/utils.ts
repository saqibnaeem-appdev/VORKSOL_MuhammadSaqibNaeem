import {Dimensions} from 'react-native'
const {width, height}=Dimensions.get('window')
const getWidth = (value: number) => {
 let decimal = value / 100;
  let newWidth = width * decimal;
  return newWidth;
};

const getHeight = (value: number) => {
  let decimal = value / 100;
  let newHeight = height * decimal;
  return newHeight;
};


export {
  getWidth,
  getHeight,
  
};