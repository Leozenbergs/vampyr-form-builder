import { styled, type Theme } from '@mui/material/styles';




export const DrawerHeader = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const HeaderWrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  height: 105,
  padding: theme.spacing(1, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
