import React from "react";
import "../../style/customer/customer.css";
import AcceptButton from "../common-view/AcceptButton";
import BasicSelect from "../common-view/BasicSelect";
import Export from "../common-view/Export";
import FilterSelect from "../common-view/FilterSelect";
import PerPageSelect from "../common-view/PerPageSelect";
import Search from "../common-view/Search";
import Sync from "../common-view/Sync";
import { Button, Grid, IconButton, Pagination, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CustomerUpdate from "./CustomerUpdate";

const style = {
  position: "absolute",
  top: "50%",
  left: "59%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "99%",
  overflow: "scroll",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#FAFCFB",
  boxShadow: 24,
  p: 4,
};

const CustomerCard = ({ text }) => {
  const hoveredstyle = {
    cursor: "initial",
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="customerCard">
      <div className="customerHeader">
        <h3>Musderiler</h3>
        <Search />
        <Export />
        <Sync />
      </div>
      <div className="addCustomer">
        <div className="customerFilter">
          <BasicSelect />
          <FilterSelect />
          <PerPageSelect />
        </div>
        <div onClick={handleOpen} className="AddCustomerButton">
          <AcceptButton text={"Musderi gos"} />
        </div>
      </div>
      <div className="customerCardContainer">
        <div className="customerCardContainerHeader">
          <div className="CCCHtitle">
            <label>+99363430338</label>
            <label>Gayypov Halil Cherkezovich</label>
          </div>
          <CustomerUpdate />
          {/* <IconButton tooltip="Description here" hoveredstyle={hoveredstyle}>
            <EditIcon style={{ color: "#5E9CCE", cursor: "pointer" }} />
          </IconButton> */}
        </div>
        <div className="customerCardTable">
          <div className="CCTfirstRow">
            <label>Musderinin statusy</label>
            <label>Sargytlar:</label>
            <label>Yasayan yeri</label>
          </div>
          <div className="CCTsecondRow">
            <label>Yonekey</label>
            <label
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "2px",
                color: "#5E9CCE",
              }}
            >
              10 gezek
            </label>
            <label>
              Ashgabat saher, olimpiya kochesi
              <br />
              4-nji jay, 202-nji oy
            </label>
          </div>
        </div>
      </div>

      {/* Musderi gosmak modal section starts here!!! */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="CCMtitle">
            <label>Musderi gosmak</label>
          </div>
          <div className="MGbutton">
            <IconButton
              onClick={handleClose}
              tooltip="Description here"
              hoveredstyle={hoveredstyle}
            >
              <ClearIcon style={{ color: "#B1B1B1", cursor: "pointer" }} />
            </IconButton>
          </div>
          <Grid container mt={3}>
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <div className="CAname">
                {/* <Stack direction="row" spacing={3}> */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <label style={{ fontWeight: "600" }}>Ady :</label>
                  <input type="text" />
                </Stack>
                <hr />{" "}
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12} pl={3}>
              <div className="CAname">
                <Stack direction="row" spacing={2} alignItems="center">
                  <label style={{ fontWeight: "600" }}>Telefon belgisi :</label>
                  <input type="text" />
                </Stack>
                <hr />{" "}
              </div>
            </Grid>
          </Grid>
          <Grid container mt={1}>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <div className="CAname">
                <Stack direction="row" spacing={2} alignItems="center">
                  <label style={{ fontWeight: "400" }}>
                    Gyzyklanyan harydy :
                  </label>
                  <input type="text" />
                </Stack>
                <hr />{" "}
              </div>
            </Grid>
          </Grid>
          <Grid container mt={1}>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <div className="CAname">
                <Stack direction="row" spacing={2} alignItems="center">
                  <label style={{ fontWeight: "400" }}>Yasayan yeri :</label>
                  <input type="text" />
                </Stack>
                <hr />{" "}
              </div>
            </Grid>
          </Grid>
          <Grid container mt={1}>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <div className="CAname">
                <Stack direction="row" spacing={2} alignItems="center">
                  <label style={{ fontWeight: "400" }}>Is yeri :</label>
                  <input type="text" />
                </Stack>
                <hr />{" "}
              </div>
            </Grid>
          </Grid>
          <Grid container mt={1}>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <div className="CAname">
                <Stack direction="row" spacing={2} alignItems="center">
                  <label style={{ fontWeight: "400" }}>
                    Sorag sowda gatnasygy
                  </label>
                  <input type="text" />
                </Stack>
                <hr />{" "}
              </div>
            </Grid>
          </Grid>{" "}
          <Grid container mt={1} pb={2}>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <div className="CAname">
                <Stack direction="row" spacing={2} alignItems="center">
                  <label style={{ fontWeight: "400" }}>
                    Gosmaca maglumatlar :
                  </label>
                  <input type="text" />
                </Stack>
              </div>
            </Grid>
          </Grid>
          {/* Haryt barada section starts here !!!  */}
          <div className="aboutGoods">
            <Stack direction="row" justifyContent={"center"}>
              <label style={{ color: "#282828", fontWeight: "600" }}>
                Haryt barada
              </label>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 5 }}
            >
              <Stack direction="column" spacing={1} width="100%">
                <label>Harydyn ady</label>
                <input type="text" />
              </Stack>
              <Stack direction="column" spacing={1} width="100%">
                <label>olcegi</label>
                <input type="number" />
              </Stack>
              <Stack direction="column" spacing={1} width="100%">
                <label>Renki</label>
                <input type="text" />
              </Stack>
            </Stack>
          </div>
          <div className="aboutGoods">
            <Stack
              direction="row"
              justifyContent={"flex-end"}
              alignItems="center"
            >
              <Stack direction="row" justifyContent={"center"} width="110%">
                <label style={{ color: "#282828", fontWeight: "600" }}>
                  Haryt barada
                </label>
              </Stack>
              <Stack direction="row" alignItems={"center"}>
                <label style={{ color: "#5E9CCE" }}>Haryt gos</label>
                <IconButton
                  tooltip="Description here"
                  hoveredstyle={hoveredstyle}
                >
                  <AddCircleOutlineIcon
                    style={{ color: "#5E9CCE", fontSize: "16px" }}
                  />
                </IconButton>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 5 }}
            >
              <Stack direction="column" spacing={1} width="100%">
                <label>Harydyn ady</label>
                <input type="text" />
              </Stack>
              <Stack direction="column" spacing={1} width="100%">
                <label>olcegi</label>
                <input type="number" />
              </Stack>
              <Stack direction="column" spacing={1} width="100%">
                <label>Renki</label>
                <input type="text" />
              </Stack>
            </Stack>
          </div>
          {/* Haryt barada section ends here !!! */}
          {/* Status of Customer section starts here !!! */}
          <div className="AGinfo">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 5 }}
              p={1}
            >
              <Stack direction="column" width="100%" spacing={1}>
                <label>Musderinin statusy :</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #5e9cce",
                    boxShadow: "0px 0px 10px rgba(129,129,129,0.15)",
                    padding: "8px 16px",
                    height: "35px",
                    background: "#f1f1f1",
                  }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Stack>
              <Stack direction="column" width="100%" spacing={1}>
                {" "}
                <label>Gepleyis sekili :</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #5e9cce",
                    boxShadow: "0px 0px 10px rgba(129,129,129,0.15)",
                    padding: "8px 16px",
                    height: "35px",
                    background: "#f1f1f1",
                  }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Stack>
              <Stack direction="column" width="100%" spacing={1}>
                {" "}
                <label>Nahili ahende gurlesyar :</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #5e9cce",
                    boxShadow: "0px 0px 10px rgba(129,129,129,0.15)",
                    padding: "8px 16px",
                    height: "35px",
                    background: "#f1f1f1",
                  }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 5 }}
              p={1}
            >
              <Stack direction="column" width="100%" spacing={1}>
                {" "}
                <label>
                  Nahili ahende yuzlenilse <br /> gowy gorya :
                </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #5e9cce",
                    boxShadow: "0px 0px 10px rgba(129,129,129,0.15)",
                    padding: "8px 16px",
                    height: "35px",
                    background: "#f1f1f1",
                  }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Stack>
              <Stack direction="column" width="100%" spacing={1}>
                {" "}
                <label>Gurleyis tony :</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #5e9cce",
                    boxShadow: "0px 0px 10px rgba(129,129,129,0.15)",
                    padding: "8px 16px",
                    height: "35px",
                    background: "#f1f1f1",
                  }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Stack>
              <Stack direction="column" width="100%" spacing={1}>
                {" "}
                <label>Bizi nireden tapdy :</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  style={{
                    borderRadius: "16px",
                    border: "1px solid #5e9cce",
                    boxShadow: "0px 0px 10px rgba(129,129,129,0.15)",
                    padding: "8px 16px",
                    height: "35px",
                    background: "#f1f1f1",
                  }}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Stack>
            </Stack>
          </div>
          {/* Delete all and Yatda sakla buttons section starts here */}
          <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
            <Button
              style={{
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "600",
                color: "#5e9cce",
              }}
              variant="outlined"
            >
              Delete all
            </Button>
            <Button
              style={{
                bacground: "#5e9cce",
                borderRadius: "16px",
                fontWeight: "600",
                color: "#fefefe",
                textTransform: "none",
              }}
              variant="contained"
            >
              Yatda sakla
            </Button>
          </Stack>
          {/* Delete all and Yatda sakla buttons section ends here */}
          {/* Status of Customer section ends here !!! */}
        </Box>
      </Modal>

      {/* Musderi gosmak modal section ends here!!! */}
      <Stack mt={10} justifyContent="center" direction="row">
        <Pagination color="primary" count={10} />
      </Stack>
    </div>
  );
};

export default CustomerCard;