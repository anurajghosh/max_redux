import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

const Output = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    // setForm(form);
    setForm({ name: "", email: "" });
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div>
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_output">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_output">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  variant="contained"
                  color="error">
                  <DeleteForeverIcon variant="delete" color="red" />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Output;