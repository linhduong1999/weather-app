import { styled } from "@mui/material/styles";
import { getBaseUrlWeatherIcon } from "../utils/environment";

const WeatherIcon = ({ code, isIcon = true }) => {
  const getImageUrl = (iconCode) => {
    const imageUrl = `${getBaseUrlWeatherIcon()}${iconCode}@2x.png`;
    return imageUrl;
  };

  const size = isIcon ? 40 : 200;

  return <StyledImg src={getImageUrl(code)} alt="Weather Icon" size={size} />;
};

export default WeatherIcon;

const StyledImg = styled("img")(({ size }) => ({
  width: `${size}px`,
  height: `${size}px`,
}));
