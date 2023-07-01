import { Typography,Button, FormControl, FormControlLabel, FormLabel, Radio, MenuItem,
  Checkbox,Box } from '@mui/material'
import { TextField, Select, RadioGroup } from 'formik-material-ui';
import {Form, Formik,Field} from 'formik';
import * as yup from 'yup';
import React from 'react'

const FormSection = () => {


  const countries = [
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
  ];

const defaultValue = {
  name:"",
  address:"",
  country: "",
  gender: "",
  hobbies: ""
}


const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  address: yup.string().required('Address is required'),
  country: yup.string().required('Country is required'),
  gender: yup.string().required('Gender is required'),
  hobbies: yup.array().min(1, 'At least one hobby must be selected')

})


const handleSubmit =(values)=>{
  alert(JSON.stringify(values, null, 2));
}

  return (
    <div className='App'>

    
      <Typography gutterBottom variant='h3' align='center'> Form </Typography>
      <Formik initialValues={defaultValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form >

{/* name */}

<Box sx={{width:500,margin:'auto',border:'1px solid black',borderRadius:'15px' ,backgroundColor:'rgb(192, 192, 224)',padding:'30px'}}>
        <Field sx={{backgroundColor:'white', color:'black'}}
          component={TextField}
          name="name"
          label="Name"
          margin="normal"
          fullWidth
        />

{/* address         */}
        <Field sx={{backgroundColor:'white', color:'black'}}
          component={TextField}
          name="address"
          label="Address"
          multiline
          rows={4}
          margin="normal"
          fullWidth
        />

{/* country */}

<FormControl fullWidth margin="normal" sx={{backgroundColor:'white', color:'black'}}>
          <FormLabel component="legend">Country</FormLabel>
          <Field component={Select} name="country" label="countries" inputProps={{ 'aria-label': 'Country' }}>
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
        </FormControl>

{/* gender */}

<FormControl component="fieldset" fullWidth margin="normal" sx={{backgroundColor:'white', color:'black'}}>
          <FormLabel component="legend">Gender</FormLabel>
          <Field component={RadioGroup} name="gender">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </Field>
        </FormControl>

{/* hobbies/interest         */}
    
<FormControl component="fieldset" fullWidth margin="normal" sx={{backgroundColor:'white', color:'black'}}>
<FormLabel component="legend" name="hobbies">Hobbies/Interest</FormLabel>
  <FormControlLabel control={<Checkbox  />}  label="Reading" />
  <FormControlLabel  control={<Checkbox />} label="Cricket" />
  <FormControlLabel control={<Checkbox />} label="Football" />
</FormControl>



        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
</Box>
        </Form>
      </Formik>

    </div>
  )
}

export default FormSection;