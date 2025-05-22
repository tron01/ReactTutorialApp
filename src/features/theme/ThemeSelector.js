import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';
import { Button } from 'react-bootstrap';

const ThemeSelector = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <Button
      variant={theme === 'dark' ? 'light' : 'dark'}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

export default ThemeSelector;
