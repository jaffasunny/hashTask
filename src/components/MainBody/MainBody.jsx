import { Box, Button, Card, CardContent, Container } from "@mui/material";
import "./MainBody.css";

const MainBody = () => {
  return (
    <Container className='mainBody'>
      <div className='mainBody__top'>
        <Button
          variant='contained'
          sx={{
            borderRadius: "90px",
            fontFamily: "unset",
            backgroundColor: "#F89E1B",
            outline: "none",
            textTransform: "Capitalize",
            "&:hover": { backgroundColor: "#faba5e" },
          }}>
          Buy PASS
        </Button>
        <Button
          variant='outlined'
          sx={{
            borderRadius: "47px",
            fontFamily: "unset",
            border: "2px solid #F89E1B",
            backdropFilter: "blur(15px)",
            color: "white",
            outline: "none",
            textTransform: "Capitalize",
            ml: 2,
            "&:hover": {
              border: "2px solid #F89E1B",
              boxShadow: "0 0 0 2em #feae4b inset",
              transition: "box-shadow 0.3s ease-in-out",
            },
          }}>
          Connect Wallet
        </Button>
      </div>
      <Box className='mainBody__bottom' sx={{ mt: 3 }}>
        <h1>EPOCH STAKING</h1>

        <Box
          className='mainBody__cards-wrapper'
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            mt: 3,
          }}>
          <div className='mainBody__cards-row'>
            <Card
              className='mainBody__card'
              sx={{
                width: "40%",
                minWidth: "100px",
                p: 2,
                height: "fit-content",
                background: "rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "15px",
                m: 1,
              }}>
              <CardContent sx={{ p: "0 !important", p: "0 !important" }}>
                <p className='text-normal price-text'>PASS Price</p>
                <h1>$1520.33</h1>
              </CardContent>
            </Card>
            <Card
              className='mainBody__card'
              sx={{
                width: "40%",
                minWidth: "100px",
                p: 2,
                background: "rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "15px",
                m: 1,
              }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  p: "0 !important",
                }}>
                <div className='mainBody__card--month'>
                  <p className='text-normal price-text'>APR </p>
                  <h1>3280%</h1>
                </div>
                /
                <div className='mainBody__card--epo'>
                  <p className='text-normal price-text'>EPR </p>
                  <h1>3%</h1>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='mainBody__cards-row'>
            <Card
              className='mainBody__card'
              sx={{
                width: "40%",
                minWidth: "100px",
                p: 2,
                background: "rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "15px",
                m: 1,
              }}>
              <CardContent sx={{ p: "0 !important" }}>
                <p className='text-normal price-text'>Market Cap</p>
                <h1>$1520.33</h1>
              </CardContent>
            </Card>
            <Card
              className='mainBody__card'
              sx={{
                width: "40%",
                minWidth: "100px",
                p: 2,
                background: "rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "15px",
                m: 1,
              }}>
              <CardContent sx={{ p: "0 !important" }}>
                <p className='text-normal price-text'>Total Value Locked</p>
                <h1>$1520.33</h1>
              </CardContent>
            </Card>
          </div>
          <div className='mainBody__cards-row'>
            <Card
              className='mainBody__card'
              sx={{
                width: "40%",
                minWidth: "100px",
                p: 2,
                background: "rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "15px",
                m: 1,
              }}>
              <CardContent sx={{ p: "0 !important" }}>
                <p className='text-normal price-text'>Treasury Balance</p>
                <h1>$1520.33</h1>
              </CardContent>
            </Card>
            <Card
              className='mainBody__card'
              sx={{
                width: "40%",
                minWidth: "100px",
                p: 2,
                background: "rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "15px",
                m: 1,
              }}>
              <CardContent sx={{ p: "0 !important" }}>
                <p className='text-normal price-text'>PASS Supply</p>
                <h1>$1520.33</h1>
              </CardContent>
            </Card>
          </div>
          <div className='mainBody__cards-row'>
            <Card
              className='mainBody__card'
              sx={{
                width: "40%",
                minWidth: "100px",
                p: 2,
                background: "rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "15px",
                m: 1,
              }}>
              <CardContent sx={{ p: "0 !important" }}>
                <p className='text-normal price-text'>Backing per PASS</p>
                <h1>$1520.33</h1>
              </CardContent>
            </Card>
            <Card
              className='mainBody__card'
              sx={{
                width: "40%",
                minWidth: "100px",
                p: 2,
                background: "rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "15px",
                m: 1,
              }}>
              <CardContent sx={{ p: "0 !important" }}>
                <p className='text-normal price-text'>Current Index</p>
                <h1>3.48x</h1>
              </CardContent>
            </Card>
          </div>
        </Box>
      </Box>
    </Container>
  );
};
export default MainBody;
