import { CircularProgress, Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="100%">
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
