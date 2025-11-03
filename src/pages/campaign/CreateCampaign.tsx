import { Box, Container, Typography } from "@mui/material";

function CreateCampaign() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Campaign
        </Typography>
        {/* Add your create campaign form here */}
      </Box>
    </Container>
  );
}

export default CreateCampaign;
