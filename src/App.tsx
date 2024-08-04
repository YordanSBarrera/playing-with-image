import { Paper, Stack } from "@mui/material";
import UploadSignature from "./components/UploadImage";

const App = () => {
  return (
    <Stack pt={3} pb={3} width="100%" alignItems="center">
      <Paper
        variant="outlined"
        sx={{
          maxWidth: "400px",
          width: "400px",
        }}
      >
        <UploadSignature />
      </Paper>
    </Stack>
  );
};

export default App;
