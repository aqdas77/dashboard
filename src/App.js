import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "platinum",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "gray",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const drawerWidth = 240;

function App() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div style={{ backgroundColor: "#F9FAF7" }}>
      <Box style={{ margin: "20px" }}>
        <img
          src="/brandlogo.png"
          alt=""
          style={{ height: "50px", width: "160px" }}
        />
      </Box>

      <List>
        <ListItemText
          primary={"MAIN MENU"}
          sx={{
            marginLeft: "1rem",
            marginBottom: "1rem",
            color: "gray",
            fontSize: "3px",
          }}
        />

        <ListItem key="dashboard" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} sx={{ color: "gray" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="recruitment" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonAddAlt1Icon />
            </ListItemIcon>
            <ListItemText primary={"Recruitment"} sx={{ color: "gray" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="schedule" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary={"Schedule"} sx={{ color: "gray" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="employee" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary={"Employee"} sx={{ color: "gray" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="department" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DonutLargeIcon />
            </ListItemIcon>
            <ListItemText primary={"Department"} sx={{ color: "gray" }} />
          </ListItemButton>
        </ListItem>

        <ListItemText
          primary={"OTHER"}
          sx={{ marginLeft: "1rem", marginY: "1rem", color: "gray" }}
        />
        <ListItem key="support" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HeadsetMicIcon />
            </ListItemIcon>
            <ListItemText primary={"Support"} sx={{ color: "gray" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key="setting" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Setting"} sx={{ color: "gray" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="gray"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "gray" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton size="large" aria-label="show 4 new mails" color="gray">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="gray"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="gray"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
        <Divider />
      </AppBar>
      {renderMenu}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#F9FAF7",
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#F9FAF7",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography variant="h5" sx={{ paddingBottom: "2rem" }}>
          Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1, padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid item  sx={{  padding: "1rem" }}>
              <Grid container spacing={1}>
                <Grid item>
                <Box
                    sx={{
                      
                      backgroundColor :"#FFEFE7",
                      borderRadius : "5px",
                      width : "204px"
                    }}
                  >
                    <Typography sx={{padding:"0.5rem",fontWeight :"600"}}>Available Position</Typography>

                    <Typography sx={{paddingLeft :"0.5rem",fontWeight:"600",fontSize:"20px"}}>24</Typography>

                    <Typography sx={{padding:"0.5rem",fontWeight:"300",color : "red",fontSize:"14px"}}>4 Urgently Needed</Typography>
                  </Box>
                </Grid>

                <Grid item>
                <Box
                    sx={{
                     
                      backgroundColor :"#E8F0FB",
                      borderRadius : "5px",
                      width : "204px"
                    }}
                  >
                    <Typography sx={{padding:"0.5rem",fontWeight :"600"}}>Job Open</Typography>

                    <Typography sx={{paddingLeft :"0.5rem",fontWeight:"600",fontSize:"20px"}}>10</Typography>

                    <Typography sx={{padding:"0.5rem",fontWeight:"300",color : "#0096FF",fontSize:"14px"}}>4 Active Hiring</Typography>
                  </Box>
                </Grid>
                <Grid item>
                <Box
                    sx={{
                      
                      backgroundColor :"#FDEBF9",
                      borderRadius : "5px",
                      width : "204px"
                    }}
                  >
                    <Typography sx={{padding:"0.5rem",fontWeight :"600"}}>New Employees</Typography>

                    <Typography sx={{paddingLeft :"0.5rem",fontWeight:"600",fontSize:"20px"}}>24</Typography>

                    <Typography sx={{padding:"0.5rem",fontWeight:"300",color : "#FF00FF",fontSize:"14px"}}>4 Department</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={1} marginTop={1}>
                <Grid item >
                  <Grid container  sx={{
                      border:"1px solid ",
                      borderRadius : "5px",
                      width : "312px",
                       padding:"2px"
                    }} >
                      <Grid item xs={8} >
                        <Typography padding={1} variant="h6" fontWeight={400}>Total Employees</Typography>
                        <Typography padding={1} variant="h4" fontWeight={600}>216</Typography>
                        <Typography paddingLeft={1} color="text.secondary" variant="body2">120 Men</Typography>
                        <Typography paddingLeft={1} color="text.secondary" variant="body2">96 Women</Typography>
                      </Grid>
                      <Grid item xs={4} display="flex" alignItems="center">
                        <img style={{width:"100px"}} src="/frame52.png" alt="" />
                      </Grid>
                  </Grid>
                  
                </Grid>
                <Grid item >
                  <Grid container  sx={{
                      border:"1px solid ",
                      borderRadius : "5px",
                      width : "312px",
                      padding:"2px"
                    }} >
                      <Grid item xs={8} >
                        <Typography padding={1} variant="h6" fontWeight={400}>Talent Request</Typography>
                        <Typography padding={1} variant="h4" fontWeight={600}>16</Typography>
                        <Typography paddingLeft={1} color="text.secondary" variant="body2">6 Men</Typography>
                        <Typography paddingLeft={1} color="text.secondary" variant="body2">10 Women</Typography>
                      </Grid>
                      <Grid item xs={4} display="flex" alignItems="center">
                        <img style={{width:"100px"}} src="/frame52.png" alt="" />
                      </Grid>
                  </Grid>
                  
                </Grid>
              </Grid>
            </Grid>

            <Grid item  sx={{  padding: "1rem" }}>
              <Grid container spacing={1}>
                <Grid item>
                <Box
                    sx={{
                      borderRadius: "5px",
                      width:"400px",
                      backgroundColor:"#161E54",
                    }}
                  >
                    <Typography color="white" variant="h6" sx={{padding:"0.5rem"}}>Recently Activity</Typography>

                    <Typography color="gray" variant="body2" sx={{padding:"0.5rem"}}>10:40 AM, Fri 10 Sep 2021</Typography>

                    <Typography color="white" sx={{padding:"0.5rem"}}>You Posted A New Job</Typography>
                    <Typography color="gray" variant="body2" sx={{padding:"0.5rem"}}>Kindly Check the requirements and terms of work and make sure every thing is right.</Typography>
                     <Grid container spacing={1} sx={{padding:"0.5rem",display:"flex", alignItems:"center"}}>
                      <Grid item >
                        <Typography color="white">
                          Today you makes 12 Activity
                        </Typography>
                      </Grid>
                      <Grid item >
                        <Button variant="contained" style={{backgroundColor:"red"}}>See All Activity</Button>
                      </Grid>
                     </Grid>
                  </Box>
                </Grid>
                
               
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
