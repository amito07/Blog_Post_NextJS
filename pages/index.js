import Link from "next/link";
import { Container, Card, TextField, Stack, Grid, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
// import Notification from "../utils/Notification";

const index = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [notification,setNotification] = useState('')
  const [valid,setValid] = useState(false)
  const router = useRouter();
  const handleChange =(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    if(inputs?.name && inputs?.email && inputs?.password){
      // console.log("OK")
      // Notification('User Login SuccessFully','success')
      setValid(true)
      router.push('/posts')
      
    }else{
      // Notification('User Credentials is not valid','warning')
      setValid(false)
    }
  }

  return (
    <>
    {notification !== '' && <Alert variant="outlined" severity={valid ? 'success' : 'warning'}> {notification}</Alert>}
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "90vh" }}
    >
      <Grid item xs={12}>
        <Card sx={{ padding: "10% 15%", minWidth: "400px" }}>
          <form onSubmit={formSubmit}>
            <Stack spacing={2}>
              <TextField
                name="name"
                value={inputs.name}
                onChange={handleChange}
                id="name"
                label="Name"
                variant="outlined"
                type="text"
              />
              <TextField
                name="email"
                value={inputs.email}
                onChange={handleChange}
                id="email"
                label="Email"
                variant="outlined"
                type="email"
              />
              <TextField
                name="password"
                value={inputs.password}
                onChange={handleChange}
                id="password"
                label="Password"
                variant="outlined"
                type="password"
              />
            <Button type="submit" variant="contained">Submit</Button>
            </Stack>
          </form>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};

export default index;
