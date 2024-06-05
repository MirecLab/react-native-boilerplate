declare type CustomTheme = {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        textOnPrimary: string;
        border: string;
        variant: string;
        notification: string;
        inversed: string;
    };
    text: {
        lg: number, 
        med: number,
        sm: number,  
    }
};
export default CustomTheme