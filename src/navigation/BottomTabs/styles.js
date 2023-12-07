import {StyleSheet} from 'react-native';
import {FONTSIZE} from '../../utils/Theme';
const styles = StyleSheet.create({
  icon: {
    fontSize: 22,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: FONTSIZE.size_10,
  },
  tabBar: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 60,
    paddingTop: 10,
  },
});
export default styles;
