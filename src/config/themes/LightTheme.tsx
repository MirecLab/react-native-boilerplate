import { DefaultTheme } from '@react-navigation/native';
import CustomTheme from '../../types/CustomTheme';

const CustomLightTheme : CustomTheme = {
  dark : false,
  colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(170, 141, 91)',
      background: 'rgb(235, 235, 235)',
      card: 'rgb(235, 235, 235)',
      variant: 'rgb(200, 200, 200)',
      inversed: 'rgb(0, 0, 0)',

      text: 'rgb(40, 40, 40)',
      textOnPrimary: 'rgb(255, 255, 255)',
    },
    text: {
      lg: 24, 
      med: 18,
      sm: 14,  
    }
  };
export default CustomLightTheme 