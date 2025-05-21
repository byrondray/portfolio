export type Theme = 'light' | 'dark' | 'system';

export const themes: Theme[] = ['light', 'dark', 'system'];

export interface ThemeColors {
  light: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
  dark: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
}

// Default theme colors - these match what's in your globals.css
export const themeColors: ThemeColors = {
  light: {
    background: '0 0% 100%',
    foreground: '0 0% 3.9%',
    card: '0 0% 100%',
    cardForeground: '0 0% 3.9%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 3.9%',
    primary: '0 0% 9%',
    primaryForeground: '0 0% 98%',
    secondary: '0 0% 96.1%',
    secondaryForeground: '0 0% 9%',
    muted: '0 0% 96.1%',
    mutedForeground: '0 0% 45.1%',
    accent: '0 0% 96.1%',
    accentForeground: '0 0% 9%',
    destructive: '0 84.2% 60.2%',
    destructiveForeground: '0 0% 98%',
    border: '0 0% 89.8%',
    input: '0 0% 89.8%',
    ring: '0 0% 3.9%',
  },
  dark: {
    background: '0 0% 3.9%',
    foreground: '0 0% 98%',
    card: '0 0% 3.9%',
    cardForeground: '0 0% 98%',
    popover: '0 0% 3.9%',
    popoverForeground: '0 0% 98%',
    primary: '0 0% 98%',
    primaryForeground: '0 0% 9%',
    secondary: '0 0% 14.9%',
    secondaryForeground: '0 0% 98%',
    muted: '0 0% 14.9%',
    mutedForeground: '0 0% 63.9%',
    accent: '0 0% 14.9%',
    accentForeground: '0 0% 98%',
    destructive: '0 62.8% 30.6%',
    destructiveForeground: '0 0% 98%',
    border: '0 0% 14.9%',
    input: '0 0% 14.9%',
    ring: '0 0% 83.1%',
  },
};
