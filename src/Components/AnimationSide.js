import { Box } from "@mui/material";
import {
  PcAnimation,
  AsesorAnimation,
  AsesoraAnimation,
  MobileAnimation,
  StatsAnimation,
  DollarAnimation,
  MedicAnimation,
  NutritionAnimation,
  ConfigAnimation,
  TraningAnimation
} from "../assets/icons/config";

import image from "../assets/images/Background.png";
export default function AnimationSide() {
  return (
    <>
      <Box>
        <Box style={{ position: "absolute", top: "0" }}>
          <img
            src={image}
            alt="background"
            style={{ width: "100%", height: "99.6vh" }}
          />
        </Box>

        <Box style={{ position: "absolute", top: "30%" }}>
          <PcAnimation />
        </Box>

        <Box style={{ position: "absolute", top: "30%", left: "15%" }}>
          <AsesorAnimation />
        </Box>

        <Box style={{ position: "absolute", top: "35%", left: "25%" }}>
          <AsesoraAnimation />
        </Box>

        <Box style={{ position: "absolute", top: "15%", left: "12%" }}>
          <DollarAnimation />
        </Box>

        <Box style={{ position: "absolute", top: "7%", left: "30%" }}>
          <StatsAnimation />
        </Box>

        <Box style={{ position: "absolute", top: "25%", left: "42%" }}>
          <MobileAnimation />
        </Box>

        <Box style={{ position: "absolute", bottom: "25%", left: "45%" }}>
          <NutritionAnimation />
        </Box>

        <Box style={{ position: "absolute", bottom: "0", left: "35%" }}>
          <MedicAnimation />
        </Box>

        <Box style={{ position: "absolute", bottom: "0", left: "8%" }}>
          <ConfigAnimation />
        </Box>

        <Box style={{ position: "absolute", bottom: "30%", left: "0" }}>
          <TraningAnimation />
        </Box>
      </Box>

      <Box style={{
        position: "absolute",
        top: '0%',
        left: "50%",
        background: 'linear-gradient(90deg, #ffffff90, #ffffff)',
        width: '50vw',
        height: '70vh'
      }}>
      </Box>
    </>
  );
}
