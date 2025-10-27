import { styled, Paper, Grid, Typography} from '@mui/material';



type InfoCardProps = {
  count: number;
  title: string;
  color?: string;
  icon?: React.ReactNode;
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  textAlign: 'center',
  height: 120,
}));


export const InfoCard = ({ count, title, icon }: InfoCardProps) => {
  return (
    <Item>
      <Grid container size={12}>
        <Grid size={8}>
          <Grid direction="column">
            <Typography variant="h4" noWrap>{title}</Typography>
            <Typography variant="h4">{count}</Typography>
          </Grid>
        </Grid>
        <Grid size={4} sx={{ justifyContent: "center", display: 'flex', alignItems: 'center' }}>
          {icon}
        </Grid>
      </Grid>
    </Item>
)
};