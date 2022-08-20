import * as React from 'react';
import {
  Divider,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  List,
  Button,
  Drawer,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select, MenuItem
} from '@mui/material';
import { ArrowBack, Circle, HorizontalRule } from '@mui/icons-material';
import { height } from '@mui/system';
export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const [age, setAge] = React.useState();
  const [Add, setAdd] = React.useState([]);
  const handleChange = (event) => {
    // setAge(event.target.value);

    setAdd([Add++])
    console.log("llllllllll");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };
  const DropDownData = [
    { Label: "First Name", Value: "first_name" },
    { Label: 'Last Name', Value: 'last_name' },
    { Label: 'Gender', Value: 'gender' },
    { Label: 'Age', Value: 'age' },
    { Label: 'Account Name', Value: 'account_name' },
    { Label: 'City', Value: 'city' },
    { Label: 'State', Value: 'state' }
  ]
  const list = (anchor) => (
    <Box
      sx={{ flexGrow: 1, width: 400, backgroundColor: "#f6f6f6" }}
      role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >
      <AppBar position="static"
        sx={{
          height: "11%",
          justifyContent: "center",
          backgroundColor: "#39aebc"
        }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="ArrowBack"
            sx={{
              mr: 2,
              alignSelf: "center"
            }}>
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h7"
            color="inherit"
            component="div">
            Saving Segment
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{
        width: '99%',
        height: "75%",
        display: "flex",
        flexdirection: "column",
        // aligncontent: 'flex-start',
        marginBottom: 30,


        backgroundColor: "#fff",
      }}>
        <List
          sx={{

            margin: 2
          }}>
          <Typography sx={{ fontSize: 13 }} variant="h7"
            color="inherit"
            component="div">
            Enter the Name of the Segment
          </Typography>
          <TextField size="small"
            id="outlined-basic"
            label="Enter the Name of Segment"
            variant="outlined"
            fontSize='small'
            sx={{ width: "100%", marginTop: 2, fontSize: 12 }}

          />
          <Typography sx={{ marginTop: 2, fontSize: 13 }} variant="h8"
            color="inherit"
            component="div">
            To Save Your Segment,you need to add the schemas to build the query
          </Typography>
          <List sx={{ display: "flex", flexDirection: "row" }}>
            <Circle sx={{ fontSize: 12, color: "#5ddb78", paddingLeft: 24, alignSelf: "center" }} />
            <Typography sx={{ fontSize: 10, alignSelf: "center", fontWeight: 500 }} variant="h8"
              color="inherit"
              component="div">
              - User Traits
            </Typography>
            <Circle sx={{ fontSize: 12, color: "#d44d78", paddingLeft: 4, alignSelf: "center" }} />
            <Typography sx={{ fontSize: 10, alignSelf: "center", fontWeight: 500 }} variant="h8"
              color="inherit"
              component="div">
              - User Traits
            </Typography>

          </List>
          {Add.map((item, index) => {

            return (
              <div style={{border: '2px solid #76acde',marginTop: 12 }}>
              <List sx={{ display: "flex", flexDirection: "row",margin:1.2}}>
                <Circle sx={{ fontSize: 12, color: "#5ddb78", alignSelf: "center", marginTop: 1 }} />
                <FormControl sx={{ paddingLeft: 2 }} fullWidth>
                  {/*<InputLabel id="demo-S-select-label">Age</InputLabel>*/}
                  <Select
                    sx={{ width: "93%", marginTop: 1, Left: 22 }}
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={DropDownData}

                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <div style={{
                  width: ' 14%',
                  display: "flex",
                  flexdirection: "column",
                  // aligncontent: 'flex-start',
                  height: 34,
                  borderRadius: 3,
                  alignSelf: "center", marginTop: 8,
                  backgroundColor: "#f2fbf9", justifyContent: "center"
                }}>
                  <HorizontalRule sx={{ alignSelf: "center" }} />
                </div>
              </List>
              </div>
            )

          })}


          <List sx={{ display: "flex", flexDirection: "row",margin:1.2}}>
            <Circle sx={{ fontSize: 12, color: "#d44d78", alignSelf: "center", marginTop: 1 }} />
            <FormControl sx={{ paddingLeft: 2 }} fullWidth>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                sx={{ width: "93%", marginTop: 1, Left: 22 }}
                size='small'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}

                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <div style={{
              width: ' 14%',
              display: "flex",
              flexdirection: "column",
              // aligncontent: 'flex-start',
              height: 34,
              borderRadius: 3,
              alignSelf: "center", marginTop: 10,
              backgroundColor: "#f2fbf9", justifyContent: "center"
            }}>
              <HorizontalRule sx={{ alignSelf: "center" }} />
            </div>
          </List>
          <a onClick={handleChange}>
          <Typography  sx={{ fontSize: 10, alignSelf: "center", fontWeight: 500, color: "#6cc8b1" }} variant="h8"
            color="inherit"
            component="div">
            + add New schema
          </Typography>
          </a>

        </List>
      </div>
      <List sx={{ display: "flex", flexDirection: "row", alignItems: 'flex-start', margin: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: "#6cc8b1", fontSize: 12 }}>Save Segment</Button>
        <Button variant="contained" sx={{ backgroundColor: "white", color: "red", marginLeft: 3, fontSize: 12 }}>Cancel</Button>
        {/* <Button variant="contained" >
        Save Segment
        </Button> */}
      </List>
    </Box >
  );

  return (
    <div>

      <React.Fragment>
        <Button sx={{ marginLeft: 23, marginTop: 10 }} variant="outlined" onClick={toggleDrawer("right", true)}>save segment</Button>
        <Drawer
          anchor={'right'}
          open={state}
          onClose={toggleDrawer("right", false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>

    </div>
  );
}
