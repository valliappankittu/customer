import React, { useState } from 'react';
import axios from 'axios';
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
const DropDownData = [
  { Label: "First Name", Value: "first_name" },
  { Label: 'Last Name', Value: 'last_name' },
  { Label: 'Gender', Value: 'gender' },
  { Label: 'Age', Value: 'age' },
  { Label: 'Account Name', Value: 'account_name' },
  { Label: 'City', Value: 'city' },
  { Label: 'State', Value: 'state' }
]

export default function TemporaryDrawer() {
  const [state, setState] = useState(false);
  const [Text, setText] = useState({
    "Segment_Name": '',
    'schema': []
  });

  const [Add, setAdd] = useState('');
  const [schema, setSchema] = useState([]);
  const [schemaList, setSchemaList] = useState([...DropDownData]);
  const [selectedSchema, setSelectedSchema] = useState([]);
  const handleAddChange = (event) => {
    if (Add != '') {
      let unSelected = [];
      let selected = []
      DropDownData.map((x) => {
        if (x.Value == Add) {
          selected.push(x);
        } else {
          unSelected.push(x);
        }
      })
      let list = schemaList.filter((x) => x.Value != Add)
      let newArr = [...schema, { ...selected[0] }]
      setSchemaList(list)
      setSchema(newArr)
      setAdd('')
    }
  };
  const handleRemoveChange = (item, index) => {
    let newArr = [...schema]
    newArr.splice(index, 1)
    setSchema(newArr)
    setSchemaList([...schemaList, { Label: item.Label, Value: item.Value }])

  };
  const Save = (item, index) => {
    let arr = []
    schema.map((x) => {
      let obj = {}
      obj[x.Value] = x.Label
      arr.push(obj)
    })

    let obj = {
      ...Text,
      schema: arr
    }
    console.log(obj)
    client(obj)
  };

  const handleChildSelect = (Add2, item, i) => {

    let newArr1 = [...schema]
    newArr1.splice(i, 1)
    setSchema(newArr1)
    let newlist = [...schemaList, { Label: item.Label, Value: item.Value }]
    setSchemaList(newlist)

    let unSelected = [];
    let selected = []
    DropDownData.map((x) => {
      if (x.Value == Add2) {
        selected.push(x);
      } else {
        unSelected.push(x);
      }
    })
    let list = newlist.filter((x) => x.Value != Add2)
    newArr1.splice(i, 0, { ...selected[0], schemaList: unSelected })
    setSchemaList(list)
    setSchema(newArr1)
    setAdd('')


  };
  function client(object){



    console.log("hajkfkgfkag",object)
    axios({
      method: 'post',
      url: 'https://webhook.site/bb008c9c-c85c-47c6-84ce-7f1ba98a4da6',
      data: {
        Data:object,
        
      }
    });

  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = (anchor) => (
    // Toolbar
    <Box
      sx={{ flexGrow: 1, width: 420, backgroundColor: "#f6f6f6" }}
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
            onClick={toggleDrawer(anchor, false)}
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
            hiddenLabel
            id="outlined-basic"
            label="Enter the Name of Segment"
            variant="outlined"
            fontSize={12}
            onChange={text => setText({
              ...Text,
              "Segment_Name": text.target.value
            })}
            sx={{ width: "100%", marginTop: 2, fontSize: 12 }}

          />
          <Typography sx={{ marginTop: 2, fontSize: 13 }} variant="h8"
            color="inherit"
            component="div">
            To Save Your Segment,you need to add the schemas to build the query
          </Typography>
          <List sx={{ display: "flex", flexDirection: "row" }}>
            <Circle sx={{ fontSize: 12, color: "#5ddb78", paddingLeft: 22, alignSelf: "center" }} />
            <Typography sx={{ fontSize: 10, alignSelf: "center", fontWeight: 500 }} variant="h8"
              color="inherit"
              component="div">
              - User Traits
            </Typography>
            <Circle sx={{ fontSize: 12, color: "#d44d78", paddingLeft: 3, alignSelf: "center" }} />
            <Typography sx={{ fontSize: 10, alignSelf: "center", fontWeight: 500 }} variant="h8"
              color="inherit"
              component="div">
              - Group Traits
            </Typography>

          </List>
          {/* dynamincdropdown */}

          {schema.map((item, index) => {
            var newarr = []
            // console.log(item)
            return (

              <List sx={{ display: "flex", flexDirection: "row", margin: 1, }}>
                {index % 2 === 0 ? <Circle sx={{ fontSize: 12, color: "#5ddb78", alignSelf: "center", }} /> :
                  <Circle sx={{ fontSize: 12, color: "#d44d78", alignSelf: "center" }} />}

                <FormControl sx={{ paddingLeft: 2 }} fullWidth>

                  <Select
                    sx={{ width: "93%", Left: 22, fontSize: 12 }}
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={item.Value}

                    onChange={(e) => { handleChildSelect(e.target.value, item, index,) }}
                  >

                    <MenuItem disabled value={item.Value}>
                      <em>{item.Label}</em>
                    </MenuItem>
                    {
                      schemaList.map((e) => {
                        // console.log("ghjk", e);
                        return (
                          <MenuItem value={e.Value}>{e.Label}</MenuItem>
                        )
                      })
                    }
                  </Select>
                </FormControl>

                <div style={{
                  width: ' 13%',
                  display: "flex",
                  flexdirection: "column",
                  height: 34,
                  borderRadius: 3,
                  alignSelf: "center",
                  backgroundColor: "#f2fbf9",
                  justifyContent: "center"
                }}
                  onClick={() => {
                    handleRemoveChange(item, index)
                  }}
                >
                  <HorizontalRule sx={{ alignSelf: "center" }} />
                </div>
              </List>

            )

          })}

          {/* default dropdown */}
          <List sx={{ display: "flex", flexDirection: "row", margin: 1, }}>
            <Circle sx={{ fontSize: 12, color: "#e2e4e6", alignSelf: "center", }} />
            <FormControl sx={{ paddingLeft: 2 }} fullWidth>
              <Select
                sx={{ width: "93%", Left: 22, color: "lightGery", fontSize: 12 }}
                size='small'
                value={Add}
                displayEmpty
                onChange={(e) => { setAdd(e.target.value) }}
              >
                <MenuItem disabled value="">
                  <em> Add Schema to segment</em>
                </MenuItem>
                {
                  schemaList.map((e) => {
                    return (
                      <MenuItem value={e.Value}>{e.Label}</MenuItem>
                    )
                  })
                }

              </Select>
            </FormControl>
            <div style={{
              width: ' 14%',
              display: "flex",
              flexdirection: "column",
              height: 34,
              borderRadius: 3,
              alignSelf: "center",
              backgroundColor: "#f2fbf9",
              justifyContent: "center"
            }}
            // onClick={() => {
            //   handleRemoveChange(index)
            // }}
            >
              <HorizontalRule sx={{ alignSelf: "center" }} />
            </div>
          </List>

          {/* onClickfunction */}
          <a onClick={handleAddChange}>
            <Typography
              sx={{ fontSize: 10, alignSelf: "center", fontWeight: 500, color: "#6cc8b1", textUnderlinePosition: "under" }}
              variant="h8"
              color="inherit"
              component="div">
              + add New schema
            </Typography>
          </a>

        </List>
      </div>
      <List sx={{ display: "flex", flexDirection: "row", alignItems: 'flex-start', margin: 2 }}>
        <Button
          onClick={() => {
            Save()
          }}
          variant="contained"
          sx={{ backgroundColor: "#6cc8b1", fontSize: 12 }}>
          Save Segment
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", color: "red", marginLeft: 3, fontSize: 12 }}>
          Cancel
        </Button>
      </List>
    </Box >
  );

  return (
    <div>

      <React.Fragment>
        <Button
          sx={{ marginLeft: 23, marginTop: 10 }}
          variant="outlined"
          onClick={toggleDrawer("right", true)}>
          save segment
        </Button>
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
