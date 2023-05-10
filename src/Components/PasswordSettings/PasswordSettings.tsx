import { Button, Checkbox, FormControlLabel, FormGroup, Menu, MenuItem, TextField, Tooltip } from "@mui/material"
import { FC, useState } from "react";
import { PasswordConfig } from "../../Helpers/passwordGenerate";
import SettingsIcon from "@mui/icons-material/Settings";

interface IPasswordSettings {
  passwordConfig: PasswordConfig;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLengthChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordSettings: FC<IPasswordSettings> = ({
  passwordConfig,
  handleChange,
  handleLengthChange
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };


  return (
    <div>
      <Tooltip title="Settings">
        <Button
          sx={{ minWidth: 40, ml: 1 }}
          color="success"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <SettingsIcon/>
        </Button>
      </Tooltip>
      <Menu
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#222",
            color: "#fff"
          },
          "& .MuiMenuItem-root:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.14)"
          },
          "& .MuiOutlinedInput-root": {
            color: "#fff"
          }
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <FormGroup>
          <MenuItem onClick={handleMenuItemClick} >
            <FormControlLabel
              control={
                <Checkbox
                  color="success"
                  checked={passwordConfig.upperLetters}
                  onChange={handleChange}
                />
              }
              label="Upper case letters"
              name="upperLetters"
            />
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick} >
            <FormControlLabel
              control={
                <Checkbox
                  color="success"
                  checked={passwordConfig.lowerLetters}
                  onChange={handleChange}
                />
              }
              label="Lower case letters"
              name="lowerLetters"
            />
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick} >
            <FormControlLabel
              control={
                <Checkbox
                  color="success"
                  checked={passwordConfig.numbers}
                  onChange={handleChange}
                />
              }
              label="Numbers"
              name="numbers"
            />
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick} >
            <FormControlLabel
              control={
                <Checkbox
                  color="success"
                  checked={passwordConfig.symbols}
                  onChange={handleChange}
                />
              }
              label="Symbols"
              name="symbols"
            />
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick} >
            <FormControlLabel
              sx={{ margin: 0 }}
              labelPlacement="start"
              control={
                <TextField
                  sx={{
                    marginLeft: "10px",
                    maxWidth: 200,
                    "& input[type=number]": {
                      "-moz-appearance": "textfield",
                    },
                    "& input[type=number]::-webkit-outer-spin-button": {
                      "-webkit-appearance": "none",
                      margin: 0,
                    },
                    "& input[type=number]::-webkit-inner-spin-button": {
                      "-webkit-appearance": "none",
                      margin: 0,
                    },
                  }}
                  color="success"
                  type="number"
                  value={passwordConfig.length}
                  onChange={handleLengthChange}
                />
              }
              label="Length:"
            />
          </MenuItem>                       
        </FormGroup>
      </Menu>
    </div>
  )
}