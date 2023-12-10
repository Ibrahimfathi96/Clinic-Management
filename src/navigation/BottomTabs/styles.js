import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Theme';
const styles = StyleSheet.create({
  image: {
    width: 28,
    height: 28,
  },
  imageWrapper: {
    width: 32,
    height: 32,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonStyle: {
    backgroundColor: COLORS.primaryColor,
    marginBottom: 50,
    borderWidth: 5,
    borderColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
