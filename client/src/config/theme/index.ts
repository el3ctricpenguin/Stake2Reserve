import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const createTheme = () =>
    extendTheme({
        config: {
            initialColorMode: "light",
            useSystemColorMode: false,
        },
        colors: {
            brand: {
                red: "#C81111",
                redHover: "#A10000",
                darkGray: "#2d2d2d",
                darkGrayHover: "#000",
            },
        },
        fonts: {
            heading: "Rokkitt, sans-serif;",
            body: "Rokkitt, sans-serif;",
        },
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
                    color: "gray.900",
                    background: "brand.red",
                },
                a: {
                    cursor: "pointer",
                },
            },
        },
        components: {
            Button: defineStyleConfig({
                baseStyle: {
                    border: "3px solid black",
                    borderRadius: 20,
                },
                variants: {
                    solid: {
                        fontSize: 20,
                        px: 4,
                        py: 2,
                    },
                    red: {
                        bgColor: "brand.red",
                        color: "white",
                        fontSize: 20,
                        px: 4,
                        py: 2,
                        _hover: {
                            bgColor: "brand.redHover",
                        },
                        _active: {
                            bgColor: "brand.redHover",
                        },
                    },
                    darkGray: {
                        bgColor: "brand.darkGray",
                        color: "white",
                        fontSize: 20,
                        px: 4,
                        py: 2,
                        _hover: {
                            bgColor: "brand.darkGrayHover",
                        },
                        _active: {
                            bgColor: "brand.darkGrayHover",
                        },
                    },
                },
            }),
        },
    });

export default createTheme();
