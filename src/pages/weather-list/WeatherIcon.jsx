import { styled } from "@mui/material/styles";

const WeatherIcon = ({ code }) => {
  const getImageUrl = (iconCode) => {
    const baseUrl = "https://openweathermap.org/img/wn/";
    const imageUrl = `${baseUrl}${iconCode}@2x.png`;
    return imageUrl;
  };

  return (
    <StyledImg
      src={getImageUrl(code)}
      alt="Weather Icon"
      style={{ width: "40px", height: "40px" }}
    />
  );
};

export default WeatherIcon;

const StyledImg = styled("img")(
  () => `
  width: 40px;
  height: 40px;

`
);
