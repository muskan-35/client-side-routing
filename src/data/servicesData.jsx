import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import LinkIcon from "@mui/icons-material/Link";
import NavigationIcon from "@mui/icons-material/Navigation";
import SpeedIcon from "@mui/icons-material/Speed";
import ErrorIcon from "@mui/icons-material/Error";

export const servicesData = [
  {
    id: 1,
    icon: <AccountTreeIcon sx={{ fontSize: 45 }} className="text-blue-600" />,
    title: "BrowserRouter",
    description: "Provides routing functionality to the entire React application.",
  },
  {
    id: 2,
    icon: <AltRouteIcon sx={{ fontSize: 45 }} className="text-blue-600" />,
    title: "Routes",
    description: "Displays the matched route without reloading the browser.",
  },
  {
    id: 3,
    icon: <LinkIcon sx={{ fontSize: 45 }} className="text-blue-600" />,
    title: "NavLink",
    description: "Creates navigation links and highlights the active route.",
  },
  {
    id: 4,
    icon: <NavigationIcon sx={{ fontSize: 45 }} className="text-blue-600" />,
    title: "useNavigate",
    description: "Allows programmatic navigation between different pages.",
  },
  {
    id: 5,
    icon: <SpeedIcon sx={{ fontSize: 45 }} className="text-blue-600" />,
    title: "Fast Navigation",
    description: "Provides smooth and fast page navigation.",
  },
  {
    id: 6,
    icon: <ErrorIcon sx={{ fontSize: 45 }} className="text-blue-600" />,
    title: "404 Page",
    description: "Shows a custom page when the route is not found.",
  },
];