import { useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from '@mui/material';


const DRAWER_WIDTH = 240;


export const TopBar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
        borderRadius: '0px',
        borderLeft: "0px !important",
        pt: 1,
        px: 4,
        height: 100,
      }}
      elevation={0}
    >
      <Toolbar>
        <div>
          <Typography variant="h2" noWrap component="div">
            <b>{(location.pathname.replace("/", "") || "Dashboard").toLocaleUpperCase()}</b>
          </Typography>
          <Typography variant="caption" noWrap component="div">
            Welcome back to the World of Darkness
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}