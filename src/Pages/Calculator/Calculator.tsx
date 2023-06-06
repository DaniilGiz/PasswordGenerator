import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";

import "./calc.sass"
import { calculatorNum } from "../../Constants";

enum Operator {
  None = "",
  Addition = "+",
  Subtraction = '-',
  Multiplication = '*',
  Division = '/',
  Percentage = '%',
}

export const Calculator: FC = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(Operator.None);
  const [storedValue, setStoredValue] = useState(0);
  const [shouldClearDisplay, setShouldClearDisplay] = useState(false);

  const handleDigitClick = (digit: string) => {
    if (shouldClearDisplay) {
      setDisplayValue(digit);
      setShouldClearDisplay(false);
    } else {
      setDisplayValue(prevDisplayValue => {
        if (prevDisplayValue === "0") {
          return digit;
        } else {
          return prevDisplayValue + digit;
        }
      });
    }
  };

  const handleOperatorClick = (selectedOperator: Operator) => {
    if (operator !== Operator.None) {
      calculate();
    }
    setOperator(selectedOperator);
    setStoredValue(parseFloat(displayValue));
    setShouldClearDisplay(true);
  };
  const calculate = () => {
    const currentValue = parseFloat(displayValue);
    let result = storedValue;

    switch (operator) {
      case Operator.Addition:
        result += currentValue;
        break;
      case Operator.Subtraction:
        result -= currentValue;
        break;
      case Operator.Multiplication:
        result *= currentValue;
        break;
      case Operator.Division:
        result /= currentValue;
        break;
      case Operator.Percentage:
        result = (storedValue * currentValue) / 100;
        break;
      default:
        break;
    }
    setDisplayValue(result.toString());
  };

  const handleEqualsClick = () => {
    calculate();
    setOperator(Operator.None);
    setStoredValue(0);
    setShouldClearDisplay(true);
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(prevDisplayValue => prevDisplayValue + ".");
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setOperator(Operator.None);
    setStoredValue(0);
    setShouldClearDisplay(false);
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const digit = event.key;

    if (/^\d$/.test(digit)) {
      handleDigitClick(digit);
    } else if (digit === ".") {
      handleDecimalClick();
    } else if (digit === "+" || digit === "-" || digit === "*" || digit === "/") {
      const selectedOperator = Operator[digit as keyof typeof Operator];
      handleOperatorClick(selectedOperator);
    } else if (digit === "Enter") {
      handleEqualsClick();
    } else if (digit === "Escape") {
      handleClearClick();
    }
  }

  return (
    <Box className="wrapper_calculator" tabIndex={0} onKeyDown={handleKeyDown}>
      Calculator page
      <Box className="calc">
        <Box className="calc_display">
          <Typography>{displayValue}</Typography>
        </Box>
        <Box className="calc_refresh calc_grey">
          <button onClick={handleClearClick}>AC</button>
        </Box>
        <Box className="calc_percent calc_grey">
          <button onClick={() => handleOperatorClick(Operator.Percentage)}>%</button>
        </Box>
        <Box className="calc_divide operator">
          <button onClick={() => handleOperatorClick(Operator.Division)}>/</button>
        </Box>
        <Box className="calc_multiply operator">
          <button onClick={() => handleOperatorClick(Operator.Multiplication)}>X</button>
        </Box>
        <Box className="calc_minus operator">
          <button onClick={() => handleOperatorClick(Operator.Subtraction)}>-</button>
        </Box>
        <Box className="calc_plus operator">
          <button onClick={() => handleOperatorClick(Operator.Addition)}>+</button>
        </Box>
        <Box className="calc_equals operator">
          <button onClick={handleEqualsClick}>=</button>
        </Box>
        {calculatorNum.map((num, i) => {
          return (
            <Box className={num.class} key={`${num.value}-${i}`}>
              <button
                onClick={() => handleDigitClick(num.value)}
              >
                {num.value}
              </button>
            </Box>
          )
        })}
        <Box className="calc_dote">
          <button onClick={handleDecimalClick}>,</button>
        </Box>
      </Box>
    </Box>
  )
}