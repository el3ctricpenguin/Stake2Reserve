import { extendTheme } from "@chakra-ui/react";

const createTheme = () =>
    extendTheme({
        config: {
            initialColorMode: "light",
            useSystemColorMode: false,
        },
        colors: {},
        fontSizes: {
            "2xs": "0.5rem", // 8px
            xs: "0.625rem", // 10px
            sm: "0.75rem", // 12px
            md: "0.875rem", // 14px
            lg: "1rem", // 16px
            xl: "1.125rem", // 18px
            "2xl": "1.25rem", // 20px
            "3xl": "1.5rem", // 24px
            "4xl": "2rem", // 32px
        },
        styles: {
            global: {
                body: {
                    color: "brand.gray.600",
                    background: "red.500",
                },
                a: {
                    cursor: "pointer",
                },
            },
        },
        components: {},
    });

export default createTheme();
