import { Casino, Dashboard, Group, LibraryBooks } from "@mui/icons-material";

export const routes = [
  { text: 'Dashboard', route: "/", icon: Dashboard },
  { text: 'Characters', route: "/characters", icon: Group },
  { text: 'Campaigns', route: "/campaigns", icon: LibraryBooks },
  { text: 'Dice Rolls', route: "/rolls", icon: Casino },
  { text: 'Documentation', route: "/documentation", icon: LibraryBooks },
]