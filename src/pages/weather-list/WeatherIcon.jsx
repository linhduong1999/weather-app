import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import GrainIcon from "@mui/icons-material/Grain";
import StormIcon from "@mui/icons-material/Storm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UmbrellaIcon from "@mui/icons-material/Umbrella";

const WeatherIcon = ({ code }) => {
  switch (code) {
    case "01d":
      return <Brightness5Icon />;
    case "01n":
      return <Brightness2Icon />;
    case "02d":
    case "02n":
      return <CloudQueueIcon />;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return <CloudIcon />;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return <UmbrellaIcon />;
    case "11d":
    case "11n":
      return <StormIcon />;
    case "13d":
    case "13n":
      return <AcUnitIcon />;
    case "50d":
    case "50n":
      return <GrainIcon />;
    default:
      return <>no icon</>;
  }
};

export default WeatherIcon;
