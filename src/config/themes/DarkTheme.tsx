import { DefaultTheme } from '@react-navigation/native';
import CustomTheme from '../../types/CustomTheme';

const CustomDarkTheme : CustomTheme = {
    dark : true,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(170, 141, 91)',
      background: 'rgb(30, 30, 30)',
      card: 'rgb(30, 30, 30)',
      variant: 'rgb(65, 65, 65)',
      inversed: 'rgb(255, 255, 255)',

      text: 'rgb(240, 240, 240)',
      textOnPrimary: 'rgb(0, 0, 0)',
  },
  text: {
    lg: 24, 
    med: 18,
    sm: 14,  
  }
  };
export default CustomDarkTheme