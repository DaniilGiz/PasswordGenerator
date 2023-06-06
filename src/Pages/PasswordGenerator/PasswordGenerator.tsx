import { FC, useState } from "react";
import { PasswordConfig, generatePassword } from "../../Helpers/passwordGenerate";
import { copyToClipboard } from "../../Helpers";
import { Box, Button, Typography } from "@mui/material";
import { PasswordSettings } from "../../Components/PasswordSettings/PasswordSettings";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

import "./passwordGenerator.sass"


export const PasswordGenerator:FC = () => {

  const [password, setPassword] = useState<string>("");
  const [isCopied, setCopied] = useState<boolean>(false);
  const [passwordConfig, setPasswordConfig] = useState<PasswordConfig>({
    upperLetters: true,
    lowerLetters: true,
    numbers: true,
    symbols: true,
    length: 8,
  })

  const onGenerate = () => {
    const password = generatePassword(passwordConfig);
    setPassword(password);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfig({ ...passwordConfig, [event.target.name]: event.target.checked })
  }

  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfig({ ...passwordConfig, length: parseInt(event.target.value, 10) })
  }

  const copy = () => {
    if (password) {
      setCopied(true);
      copyToClipboard(password)
    }

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }


  return (
    <Box className="generator">
      <Box display="flex">
        PasswordGenerator
        <PasswordSettings 
          passwordConfig={passwordConfig}
          handleChange={handleChange}
          handleLengthChange={handleLengthChange}
        />
      </Box>
      {password 
        ? 
          <Typography m={2} >
            {password}
          </Typography>
        : 
          <Typography m={2} color="#a1a1a17a">
            Your password would be here
          </Typography>
      }
      <Box sx={{ mb: 1 }}>
        <Button
          sx={{ m: 1 }}
          color="success"
          variant="contained"
          onClick={onGenerate}
        >
          Generate
        </Button>
        <Button
          sx={{ m: 1 }}
          disabled={!password}
          onClick={copy}
          color="primary"
          variant="contained"
        >
          {isCopied 
            ? 
              <>
                Copied<CheckIcon sx={{ ml: 1, width: 18, height: 18 }} />
              </>
            : 
              <>
                Copy<ContentCopyIcon sx={{ ml: 1, width: 18, height: 18 }} />
              </>
          }
        </Button>
      </Box>
      <Typography className="alert">
        If you use this password, remember to save it, because when you close this tab, the password will disappear.
      </Typography>
    </Box>
  )
}