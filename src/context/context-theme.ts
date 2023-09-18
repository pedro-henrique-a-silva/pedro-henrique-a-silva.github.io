import { createContext } from 'react';
import { ContextTheme } from '../type';

const ThemeContext = createContext({} as ContextTheme);

export default ThemeContext;