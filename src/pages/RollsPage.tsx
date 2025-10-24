import { Refresh } from '@mui/icons-material';
import { Box, Container, Fab, Grid, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function RollsPage() {
  const [dice, setDice] = useState<number>(0)
  const [tab, setTab] = useState<number>(6)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container
      sx={{
        minWidth: '80vw',
        minHeight: "70vh"
      }}
    >
      <Grid container spacing={2}>
        <Stack direction={'column'}>
          <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="6" value={6} {...a11yProps(0)} />
            <Tab label="10" value={10} {...a11yProps(1)} />
            <Tab label="20" value={20} {...a11yProps(2)} />
          </Tabs>
        </Stack>

        <CustomTabPanel value={tab} index={tab}>
          <Grid size={12}>
            <Stack>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                Dice roll 
                <Tooltip title="Click to roll the dice">
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => console.log("roll")}
                  >
                    <Refresh onClick={() => setDice(Math.floor(Math.random() * tab))} />
                  </Fab>
                </Tooltip>
              </Box>
            </Stack>
          </Grid>
          <Grid size={12}>
            <Stack>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row', // or 'column', 'row-reverse', 'column-reverse'
                  justifyContent: 'center', // or 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'
                  alignItems: 'center', // or 'flex-start', 'flex-end', 'stretch', 'baseline'
                  gap: 2, // Spacing between items
                }}
              >
                <Typography variant="h1">{dice}</Typography>
              </Box>
            </Stack>
          </Grid>
        </CustomTabPanel>
      </Grid>      
    </Container>
  );
}

export default RollsPage;