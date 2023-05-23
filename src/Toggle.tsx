import { useColorMode, IconButton} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';


const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default Toggle;
