"use client";

import {createTheme, MantineColorsTuple} from "@mantine/core";

const brand: MantineColorsTuple = [
    '#e1fefc',
    '#d2f8f4',
    '#abede6',
    '#80e1d7',
    '#5dd8cb',
    '#45d2c4',
    '#34cfc0',
    '#1fb8a9',
    '#04a396',
    '#008e82'
];

export const theme = createTheme({
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontFamilyMonospace: 'IBM Plex Mono, monospace',
    headings: {fontFamily: 'IBM Plex Sans, sans-serif'},
    primaryColor: 'brand',
    colors: {
        brand,
    }
});
