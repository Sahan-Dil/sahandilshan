'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ThemeSwitchProps {
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ onThemeChange }) => {
  const { setTheme } = useTheme();

  const handleSetTheme = (theme: 'light' | 'dark') => {
    setTheme(theme);
    onThemeChange(theme); // Notify the parent component (Home) about the theme change
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-0 right-0"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleSetTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSetTheme('dark')}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSwitch;
