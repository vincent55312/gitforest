import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        breakpoints: {
            mobile: number;
        };
        colors: {
            black: string;
            whiteGray: string;
            blackLight: string;
            white: string;
            orange: string;
            gray: string;
            green: string;
            red: string;
            blue: string;
        };
        radius: {
            soft: string;
            extended: string;
            medium: string;
            hard: string;
        };
    }
}
