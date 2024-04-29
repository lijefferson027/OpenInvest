import React, { useState } from "react";
import {
  Button,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Allocater() {
  const initialCategories = [
    "Stocks",
    "Crypto",
    "ETFs",
    "Index Funds",
    "Bonds",
    "Mutual Funds",
    "Roth IRA",
    "401k",
    "Travel",
    "Miscellaneous",
  ];
  const [budget, setBudget] = useState("");
  const [categories, setCategories] = useState(initialCategories);
  const [allocations, setAllocations] = useState(
    initialCategories.reduce((acc, category) => ({ ...acc, [category]: 0 }), {})
  );
  const [priorities, setPriority] = useState(
    initialCategories.reduce((acc, category) => ({ ...acc, [category]: 1 }), {})
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const prioritiesList = ["Omit", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handlePriorityChange = (category, value) => {
    if (value === "Omit") {
      setPriority({ ...priorities, [category]: 0 });
    } else {
      setPriority({ ...priorities, [category]: parseInt(value) });
    }
    handleClose();
  };

  const handleClick = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const distributeFunds = (method) => {
    if (!budget || isNaN(budget) || parseFloat(budget) <= 0) {
      setAllocations(
        categories.reduce((acc, category) => ({ ...acc, [category]: 0 }), {})
      );
      return;
    }

    const totalPriority = Object.values(priorities).reduce(
      (sum, num) => sum + num,
      0
    );

    switch (method) {
      case "even":{
        const evenAllocation = parseFloat(budget) / categories.length;
        setAllocations(
          categories.reduce(
            (acc, category) => ({ ...acc, [category]: evenAllocation }),
            {}
          )
        );
        break;}
      case "random":{
        let totalAllocated = 0;
        const randomAllocations = categories.map((category, index) => {
          const remaining = parseFloat(budget) - totalAllocated;
          const allocation =
            index < categories.length - 1
              ? Math.random() * remaining
              : remaining;
          totalAllocated += allocation;
          return { category, allocation };
        });
        setAllocations(
          randomAllocations.reduce(
            (acc, { category, allocation }) => ({
              ...acc,
              [category]: allocation,
            }),
            {}
          )
        );
        break;}
      case "priority":
        if (totalPriority === 0) return;
        setAllocations(
          categories.reduce((acc, category) => {
            const allocatedAmount =
              (priorities[category] / totalPriority) * parseFloat(budget);
            return { ...acc, [category]: allocatedAmount };
          }, {})
        );
        break;
      default:
        break;
    }
  };

  const resetDefaults = () => {
    setCategories(initialCategories);
    setPriority(
      initialCategories.reduce(
        (acc, category) => ({ ...acc, [category]: 1 }),
        {}
      )
    );
    setBudget("");
    setAllocations(
      initialCategories.reduce(
        (acc, category) => ({ ...acc, [category]: 0 }),
        {}
      )
    );
  };

  return (
    <div >
      <input
        type="number"
        value={budget}
        onChange={handleBudgetChange}
        placeholder="Enter your budget"
        style={{
          width: "30vw",
          height: "5vh",
          backgroundColor: "transparent",
          color: "black",
          borderRadius: 5,
        }}
      />
      <div>
        {/* Buttons to distribute funds */}
        <Button
          onClick={() => distributeFunds("even")}
          style={{
            backgroundColor: "#8DDAB8",
            border: "solid",
            borderColor: "#37be83",
            color: "white",
            fontWeight: "bold",
            padding: "5px 22px",
            textAlign: "center",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Distribute Evenly
        </Button>
        <Button
          onClick={() => distributeFunds("random")}
          style={{
            backgroundColor: "#8DDAB8",
            border: "solid",
            borderColor: "#37be83",
            color: "white",
            fontWeight: "bold",
            padding: "5px 22px",
            textAlign: "center",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Distribute Randomly
        </Button>
        <Button
          onClick={() => distributeFunds("priority")}
          style={{
            backgroundColor: "#8DDAB8",
            border: "solid",
            borderColor: "#37be83",
            color: "white",
            fontWeight: "bold",
            padding: "5px 22px",
            textAlign: "center",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Distribute by Priority
        </Button>
      </div>
      <div >
        <List>
          {categories.map((category, index) => (
            <React.Fragment key={category}>
              <ListItem sx={{ fontWeight: "bold" }}>
                <Button
                  aria-controls={anchorEl ? "priority-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={anchorEl ? "true" : undefined}
                  onClick={(e) => handleClick(e, category)}
                >
                  <KeyboardArrowDownIcon />
                  Priority: {priorities[category] || "Set"}
                </Button>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      style={{
                        fontFamily: "sans-serif",
                        color: "#565254",
                        fontWeight: "bold",
                        fontSize: "18px",
                        marginLeft: "1rem",
                      }}
                    >
                      {category}
                    </Typography>
                  }
                />
                <div style={{ marginLeft: "1rem" }}>
                  Allocation: $
                  {allocations[category]
                    ? allocations[category].toFixed(2)
                    : "0.00"}
                </div>
              </ListItem>
              {index < categories.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </div>
      <Menu
        id="priority-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "priority-button" }}
      >
        {prioritiesList.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handlePriorityChange(selectedCategory, option)}
            disableRipple
          >
            Priority {option}
          </MenuItem>
        ))}
      </Menu>
      <Button
        onClick={resetDefaults}
        style={{
          backgroundColor: "#e84855",
          border: "solid",
          borderColor: "#565254",
          color: "white",
          fontWeight: "bold",
          padding: "5px 22px",
          textAlign: "center",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "5px",
          left: "20em",
        }}
      >
        Reset
      </Button>
    </div>
  );
}

export default Allocater;
