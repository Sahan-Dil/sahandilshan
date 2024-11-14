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
    onThemeChange(theme);
  };

  return (
    <div className="fixed top-5 right-0.5 z-[100] flex items-center justify-end md:top-5 md:right-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
