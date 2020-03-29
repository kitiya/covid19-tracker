import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const MuiSandboxPage = () => {
  const urlPath = process.env.PUBLIC_URL;
  return (
    <Box style={{ textAlign: "center" }}>
      <img
        alt=""
        src={`${urlPath}/images/svg/wash_hands.svg`}
        style={{ maxHeight: "50vh", margin: 50 }}
      />
      <Typography
        variant="h4"
        color="secondary"
        style={{ textTransform: "uppercase" }}
      >
        Handwashing
      </Typography>
      <Typography
        variant="body1"
        style={{
          width: 600,
          margin: "20px auto",
          color: "#616074"
        }}
      >
        Regular handwashing, particularly before and after certain activities,
        is one of the best ways to remove germs, avoid getting sick, and prevent
        the spread of germs to others. It’s quick, it’s simple, and it can keep
        us all from getting sick. Handwashing is a win for everyone, except the
        germs.
      </Typography>
    </Box>
  );
};

export default MuiSandboxPage;
