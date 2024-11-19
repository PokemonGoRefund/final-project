'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';  // ใช้ MantineProvider
import { theme as defaultTheme } from "@/theme";  // import theme ของคุณ

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // ตรวจสอบธีมที่เก็บไว้หรือใช้ค่าเริ่มต้นเป็น light
    const storedScheme = localStorage.getItem('color-scheme');
    if (storedScheme) {
      setColorScheme(storedScheme as 'light' | 'dark');
    }
  }, []);

  return (
    <MantineProvider 
    theme={{ 
        ...defaultTheme,  // ใช้ defaultTheme ที่คุณตั้งค่าไว้
      }} 
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;