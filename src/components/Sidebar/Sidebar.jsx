import {
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

import { images } from "./../../constants";

import {
  OutboundOutlined,
  TimelineOutlined,
  Twitter,
} from "@mui/icons-material";

import "./Sidebar.css";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container
      className='sidebar'
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
      }}>
      <Box className='sidebar__top'>
        <img src={images.sidebarLogo} alt='sidebarLogo' />
        <h2>VAULT PASS</h2>
      </Box>

      <List
        className='sidebar__mid'
        sx={{ width: "100%", maxWidth: 360, mt: "2rem", p: 0 }}
        component='nav'
        aria-labelledby='nested-list-subheader'>
        <ListItemButton className='sidebar__mid-Links'>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <img src={images.dashboardIcon} alt='' />
          </ListItemIcon>
          <p className='text-normal'>Dashboard</p>
        </ListItemButton>
        <ListItemButton className='sidebar__mid-Links'>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <TimelineOutlined />
          </ListItemIcon>
          <p className='text-normal'>Analytics</p>
        </ListItemButton>
        <ListItemButton className='sidebar__mid-Links'>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <img src={images.stakeIcon} alt='' />
          </ListItemIcon>
          <p className='text-normal'>Stake</p>
        </ListItemButton>

        <ListItemButton onClick={handleClick} className='sidebar__mid-Links'>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <img src={images.bondIcon} alt='bond icon' />
          </ListItemIcon>
          <p className='text-normal'>Bond</p>
        </ListItemButton>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding sx={{ pl: 7 }}>
            <p className='text-header sidebar__bond--text'>Bond discounts</p>
            <div className='sidebar__mid-Text'>
              <p className='text-normal'>XIV-BNB LP</p>
              <p className='text-normal'>-16.28%</p>
            </div>
            <div className='sidebar__mid-Text'>
              <p className='text-normal'>PASS-BNB LP</p>
              <p className='text-normal'>-16.28%</p>
            </div>
            <div className='sidebar__mid-Text'>
              <p className='text-normal'>XIV</p>
              <p className='text-normal'>-16.28%</p>
            </div>
            <div className='sidebar__mid-Text'>
              <p className='text-normal'>BNB</p>
              <p className='text-normal'>-16.28%</p>
            </div>
            <div className='sidebar__mid-Text'>
              <p className='text-normal'>BUSD</p>
              <p className='text-normal'>-16.28%</p>
            </div>
          </List>
        </Collapse>

        <ListItemButton className='sidebar__mid-Links'>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <OutboundOutlined />
          </ListItemIcon>
          <p className='text-normal'>Buy PASS</p>
        </ListItemButton>
        <ListItemButton className='sidebar__mid-Links'>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <img src={images.priceChartIcon} alt='' />
          </ListItemIcon>
          <p className='text-normal'>Price Chart</p>
        </ListItemButton>
        <ListItemButton className='sidebar__mid-Links'>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <img src={images.documentationIcon} alt='' />
          </ListItemIcon>
          <p className='text-normal'>Documentation</p>
        </ListItemButton>
      </List>

      <Box className='sidebar__bottom' sx={{ my: 1 }}>
        <Button>
          <Twitter />
        </Button>
        <Button>
          <img src={images.discordIcon} alt='' />
        </Button>
        <Button>
          <img src={images.messageIcon} alt='' />
        </Button>
      </Box>
    </Container>
  );
};
export default Sidebar;
