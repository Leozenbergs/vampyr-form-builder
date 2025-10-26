import { Box, Container, Typography } from "@mui/material";



function Campaigns() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Campaigns Page
        </Typography>
        {/* Add your campaigns page content here */}
      </Box>
    </Container>
  );
}

export default Campaigns;