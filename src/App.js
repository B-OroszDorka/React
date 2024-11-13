import React from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Csak betűk és számok engedélyezettek")
    .min(3, "Minimum 3 karakter")
    .max(20, "Maximum 20 karakter")
    .required("Kötelező mező"),
  email: Yup.string()
    .email("Érvénytelen email formátum")
    .required("Kötelező mező"),
  password: Yup.string()
    .min(5, "Minimum 5 karakter")
    .matches(/[a-z]/, "Tartalmaznia kell kisbetűt")
    .matches(/[A-Z]/, "Tartalmaznia kell nagybetűt")
    .matches(/[0-9]/, "Tartalmaznia kell számot")
    .required("Kötelező mező"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "A jelszavak nem egyeznek")
    .required("Kötelező mező"),
});

function RegistrationInfo() {
  const { values, errors } = useFormikContext();
  console.log(errors);
  if (Object.keys(errors).length > 0) {
      return null;
  }
  const { username, email, password } = values;

  return (<>
  <Typography variant={"h6"}>Felhasználónév: {username}</Typography>
  <Typography variant={"h6"}>Email: {email}</Typography>
  <Typography variant={"h6"}>Jelszó: {password}</Typography></>)
}

function App() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    console.log("Regisztrációs adatok:", values);
    alert("Sikeres regisztráció!");
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Regisztráció
        </Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <RegistrationInfo/>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                name="username"
                label="Felhasználónév"
                variant="outlined"
                error={touched.username && !!errors.username}
                helperText={touched.username && errors.username}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                variant="outlined"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                name="password"
                type="password"
                label="Jelszó"
                variant="outlined"
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                type="password"
                label="Jelszó újra"
                variant="outlined"
                error={touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
            </Box>
            <Box textAlign="center" mt={3}>
              <Button variant="contained" color="primary" type="submit">
                Regisztráció
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default App;
