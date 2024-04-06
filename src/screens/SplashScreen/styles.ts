import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../utils/theme';

const { width, height } = Dimensions.get('window');

const logoWidth = 0.5 * width; 
const logoHeight = logoWidth; 

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.white,
  },
  title: {
    fontSize: 0.05 * width, 
    fontWeight: 'bold',
    marginBottom: 0.05 * height, 
  },
  logo:{
    width: logoWidth,
    height: logoHeight,
    resizeMode: 'contain', 
    backgroundColor:theme.white
  }
});
