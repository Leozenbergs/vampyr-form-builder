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
        <Grid size={8} sx={{ pl: 2 }}>
          <Grid direction="column">
            <Typography variant="h4" noWrap sx={{ textAlign: 'left', mb: 1 }}>{title}</Typography>
            <Typography variant="h1" color='#fff' sx={{ textAlign: 'left' }}>{count}</Typography>
          </Grid>
        </Grid>
        <Grid size={4} sx={{ pr: 2, justifyContent: "end", display: 'flex', alignItems: 'start' }}>
          {icon}
        </Grid>
      </Grid>
    </Item>
)
};