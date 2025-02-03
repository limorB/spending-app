import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  maxWidth: 400,
  margin: "auto",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const AddExpenseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to handle form submission
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Typography variant="h5" align="center">
        Add Expense
      </Typography>

      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Amount"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{ shrink: true }}
        required
      />

      <FormControl fullWidth required>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Travel">Travel</MenuItem>
          <MenuItem value="Shopping">Shopping</MenuItem>
          <MenuItem value="Utilities">Utilities</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Expense
      </Button>
    </StyledForm>
  );
};

export default AddExpenseForm;
