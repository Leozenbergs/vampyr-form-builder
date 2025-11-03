import theme from "../../plugins/theme";

type DefaultIconProps = {
  icon: React.ReactNode;
  color?: string;
  mini?: boolean;
};

export const DefaultIcon = ({ icon, color = theme.palette.primary.main, mini = false }: DefaultIconProps) => {
  return (
    <div style={{
      backgroundColor: color,
      width: mini ? 35 : 55,
      height: mini ? 35 : 55,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8
    }}>
      {icon}
    </div>
  )
}