import type { Metadata } from "next";
import "@mantine/core/styles.css";
import './layout.css';
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@/theme";
import Script from 'next/script';
import { AuthProvider } from "./Provider";
import SessionChecker from "./SessionChecker";
import Homebar from './HomeLayout';

export const metadata: Metadata = {
  title: "Dosy Colorectal Cancer",
  description: "Dosy Health Operation",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <Script
          src="https://cdn.anychart.com/releases/8.11.0/js/anychart-core.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <AuthProvider>
          <MantineProvider theme={theme}>
            <SessionChecker />
            <Homebar>
              {children}
            </Homebar>
          </MantineProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
