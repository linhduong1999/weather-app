import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import GrainIcon from "@mui/icons-material/Grain";
import StormIcon from "@mui/icons-material/Storm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UmbrellaIcon from "@mui/icons-material/Umbrella";

const WeatherIcon = ({ code }) => {
  const getImageUrl = (iconCode) => {
    const baseUrl = "https://openweathermap.org/img/wn/";
    const imageUrl = `${baseUrl}${iconCode}@2x.png`;
    return imageUrl;
  };

  return <img src={getImageUrl(code)} alt="Weather Icon" />;
};

export default WeatherIcon;
