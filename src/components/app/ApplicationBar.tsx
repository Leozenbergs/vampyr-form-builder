import * as React from 'react';
import { styled, useTheme, type Theme, type CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';
import { AppBar, Toolbar } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export const ApplicationBar = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme();

  return (
    <Box component="nav" sx={{ display: 'flex' }} >
      <CssBaseline />
      <Drawer
        variant="permanent"
        anchor='left'
        open
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRadius: '0px' },
        }}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
      >
        <DrawerHeader>
          <div style={{ marginRight: '8px' }}>
            <WaterDropIcon style={{ color: theme.palette.primary.main }} />
          </div>
          <div style={{ marginRight: '12px' }}>
            <Typography variant="h4" noWrap component="div" sx={{ fontFamily: "Caudex" }}>
              Vampyr Requiem
            </Typography>
            <Typography variant="h6" noWrap component="div" color='primary' sx={{ fontFamily: "Caudex" }}>
              Chronicles of Darkness
            </Typography>
          </div>
        </DrawerHeader>
        <Divider style={{ borderTop: `1px solid ${theme.palette.primary.main}` }} />
        <List>
          {routes.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }} onClick={() => navigate(item.route)}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  {justifyContent: 'center'}
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    {mr: 3}
                  ]}
                >
                  {item.icon && <item.icon />}
                </ListItemIcon>
                <ListItemText
                  sx={
                    [
                      {opacity: 1}
                    ]
                  }
                >
                  <Typography variant="body2" noWrap component="div" sx={{ fontFamily: "Caudex" }}>
                    {item?.text}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          borderRadius: '0px',
          borderLeft: "0px !important"
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div" sx={{ fontFamily: "Caudex" }}>
            <b>{(location.pathname.replace("/", "") || "Dashboard").toLocaleUpperCase()}</b>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'row',// or 'flex-start', 'flex-end', 'stretch', 'baseline'
          gap: 2, // Spacing between items
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
