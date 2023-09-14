export type ContextTheme = {
  theme: 'dark' | 'light';
  updateTheme: (theme: 'dark' | 'light') => void;
}