import { Box, styled } from "@mui/material";
import Weather from "./Weather";
import Today from "./Today";
import SearchSection from "./SearchSection";

const BoxFooter = styled(Box)({
  backgroundColor: "#080D11",
  display: "flex",
  columnGap: "2%",
  paddingTop: "0.5%",
  paddingBottom: "0.5%",
  alignItems: "center",
  width: "100%",
});

const DesktopFooter = () => {
  return (
    <BoxFooter>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Weather />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <SearchSection />
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          marginRight: 2,
        }}
      >
        <Today />
      </Box>
    </BoxFooter>
  );
};

export default DesktopFooter;
