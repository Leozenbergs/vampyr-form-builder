import * as React from 'react';
import Box from '@mui/material/Box';
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
import { DefaultIcon } from '../icons/DefaultIcon';
import { TopBar } from './TopBar';
import { DrawerHeader, HeaderWrapper } from './drawer/DrawerHeader';
import { DRAWER_WIDTH } from './globals';
import { AppDrawer } from './drawer/AppDrawer';


export const ApplicationBar = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box component="nav" sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppDrawer
        variant="permanent"
        anchor='left'
        open
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH, borderRadius: '0px' },
        }}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
      >
        <HeaderWrapper>
          <DrawerHeader>
            <DefaultIcon mini icon={<WaterDropIcon />} />
            <div style={{ marginLeft: '12px', marginRight: '12px' }}>
              <Typography variant="h4" noWrap component="div">
                Vampyr Requiem
              </Typography>
              <Typography variant="h6" noWrap component="div" color='primary'>
                Chronicles of Darkness
              </Typography>
            </div>
          </DrawerHeader>
        </HeaderWrapper>
        <Divider />
        <List>
          {routes.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: 'block' }}
              onClick={() => navigate(item.route)}
            >
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  {
                    bgcolor: location.pathname === (item.route === "/" ? "/dashboard": item.route) ? 'rgba(211, 47, 47, 0.08)' : 'inherit',
                    justifyContent: 'center',
                    borderRadius: 5,
                    mx: 2,
                    mb: 1,
                  }
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
                  <Typography variant="body2" noWrap component="div">
                    {item?.text}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        <Divider />
        </List>
      </AppDrawer>
      <TopBar />
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
