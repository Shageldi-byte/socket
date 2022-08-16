import React from "react";
import {
  Button,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import MapLocation from "./MapLocation";

const style = {
  position: "absolute",
  top: "50%",
  left: "59%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#FAFCFB",
  boxShadow: 24,
  p: 2,
};

const PlaceChange = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const hoveredstyle = {
    cursor: "initial",
  };
  return (
    <div>
      <Stack spacing={2} direction="row" alignItems={"center"}>
        <label style={{ color: "#3570A2" }}>Uytget</label>
        <IconButton
          onClick={handleOpen}
          tooltip="Description here"
          hoveredstyle={hoveredstyle}
        >
          <EditIcon style={{ color: "#5E9CCE", fontSize: "26px" }} />
        </IconButton>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack textAlign={"center"}>
            <label style={{ fontSize: "18px", fontWeight: "600" }}>
              Eltip bermeli yeri
            </label>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            mt={1}
            className="eltipBermeli"
          >
            <Stack width="100%">
              <Select
                id="demo-simple-select"
                // value={address}
                style={{
                  background: "#f0eefc",
                  border: "1px solid #5e9cce",
                  borderRadius: "16px",
                  height: "35px",
                }}
                // onChange={(e) => setAddress(e.target.value)}
              >
                <MenuItem>Bashga yere</MenuItem>
              </Select>
            </Stack>
            <Stack width="100%">
              <input type="text" />
            </Stack>
            <Stack width="100%">
              <MapLocation />
            </Stack>
          </Stack>

          <Stack direction={"column"} className="eltipBermeli">
            <Stack direction={"row"}>
              <label style={{ fontWeight: "600" }}>Sebabi :</label>
              <input
                type="text"
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                }}
              />
            </Stack>
            <hr />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent={"flex-end"} mt={2}>
            <Button
              onClick={handleClose}
              variant="outlined"
              style={{
                borderRadius: "16px",
                textTransform: "none",
                color: "#282828",
                fontWeight: "600",
              }}
            >
              Yatyr
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: "16px",
                textTransform: "none",
                background: "#5E9CCE",
                fontWeight: "600",
              }}
            >
              OK
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default PlaceChange;
