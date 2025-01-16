import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      color="current"
      _hover={{ bg: colorMode === 'light' ? 'gray.100' : 'whiteAlpha.200' }}
    />
  );
};
