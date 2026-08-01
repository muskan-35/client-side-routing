import SpeedIcon from "@mui/icons-material/Speed";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LinkIcon from "@mui/icons-material/Link";
import DevicesIcon from "@mui/icons-material/Devices";

export const featuresData = [
  {
    id: 1,
    icon: <SpeedIcon sx={{ fontSize: 50 }} className="text-blue-600" />,
    title: "Fast Navigation",
    description: "Navigate between pages instantly without reloading the browser.",
  },
  {
    id: 2,
    icon: <AutorenewIcon sx={{ fontSize: 50 }} className="text-blue-600" />,
    title: "Dynamic Routing",
    description: "Supports dynamic routes for flexible navigation.",
  },
  {
    id: 3,
    icon: <LinkIcon sx={{ fontSize: 50 }} className="text-blue-600" />,
    title: "Easy Navigation",
    description: "Provides simple navigation using Link and NavLink.",
  },
  {
    id: 4,
    icon: <DevicesIcon sx={{ fontSize: 50 }} className="text-blue-600" />,
    title: "Responsive Design",
    description: "Works smoothly across mobile, tablet, and desktop devices.",
  },
];