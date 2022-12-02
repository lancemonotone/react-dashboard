import { Box, Button, TextField, useTheme } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../global/Header'
import { tokens } from '../../theme'

const Form = () => {
  const theme = useTheme()
  const colors = tokens( theme.palette.mode )
  const isNonMobile = useMediaQuery( '(min-width:800px)' )

  const handleFormSubmit = ( values, { resetForm } ) => {
    console.log( values )
    resetForm()
  }

  const fields = [
    {
      name        : 'firstName',
      initialValue: '',
      label       : 'First Name',
      type        : 'text',
      span        : 2,
    },
    {
      name        : 'lastName',
      initialValue: '',
      label       : 'Last Name',
      type        : 'text',
      span        : 2,
    },
    {
      name        : 'email',
      initialValue: '',
      label       : 'Email',
      type        : 'text',
      span        : 4,
    },
    {
      name        : 'contact',
      initialValue: '',
      label       : 'Contact Number',
      type        : 'text',
      span        : 4,
    },
    {
      name        : 'address1',
      initialValue: '',
      label       : 'Address 1',
      type        : 'text',
      span        : 4,
    },
    {
      name        : 'address2',
      initialValue: '',
      label       : 'Address 2',
      type        : 'text',
      span        : 4,
    },
  ]

  const formFields = ( handleBlur, handleChange, values, touched, errors ) => fields.map( ( field ) => {
    return <TextField
        key={ field.name }
        fullWidth
        variant={ 'filled' }
        type={ 'text' }
        label={ field.label }
        onBlur={ handleBlur }
        onChange={ handleChange }
        value={ values[ field.name ] }
        name={ field.name }
        autoComplete={ 'off' }
        error={ Boolean( touched[ field.name ] ) && Boolean( errors[ field.name ] ) }
        helperText={ touched[ field.name ] && errors[ field.name ] }
        sx={ {
          gridColumn              : `span ${ isNonMobile ? field.span : 4 }`,
          '& .MuiFilledInput-root': {
            backgroundColor: `${ colors.grey[ 700 ] } !important`,
          },
        } }
    />
  } )

  // return an object with each fields name and initialValue
  const initialValues = fields.reduce( ( acc, field ) => {
    acc[ field.name ] = field.initialValue
    return acc
  }, {} )

  // phone number regex with parentheses, dashes, and periods allowed
  const phoneRegex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/

  const userSchema = Yup.object().shape( {
    firstName: Yup.string().required( 'First Name is required' ),
    lastName : Yup.string().required( 'Last Name is required' ),
    email    : Yup.string().email( 'Invalid email' ).required( 'Email is required' ),
    contact  : Yup.string().matches( phoneRegex, 'Invalid phone number' ).required( 'Contact is required' ),
    address1 : Yup.string().required( 'Address is required' ),
    address2 : Yup.string().required( 'Address is required' ),
  } )

  return (
      <>
        <Header title={ 'Create User' }
                subtitle={ 'Create a new user profile' }/>
        <Formik onSubmit={ handleFormSubmit }
                initialValues={ initialValues }
                validationSchema={ userSchema }>
          { ( { values, errors, touched, handleChange, handleBlur, handleSubmit } ) => (
              <form onSubmit={ handleSubmit }>
                <Box display={ 'grid' }
                     maxWidth={ isNonMobile ? '50vw' : '100%' }
                     gap={ 3 }
                     sx={ { gridColumn: isNonMobile ? undefined : 'span 4' } }
                     gridTemplateColumns={ 'repeat(4, minmax(0, 1fr))' }>

                  { formFields( handleBlur, handleChange, values, touched, errors ) }

                </Box>

                <Box display={ 'flex' }
                     marginY={ 2 }
                     justifyContent={ 'end' }
                     maxWidth={ isNonMobile ? '50vw' : '100%' }>
                  <Button type={ 'submit' }
                          sx={ { backgroundColor: colors.blue[ 500 ] } }
                          variant={ 'contained' }>Submit</Button>
                </Box>

              </form>
          ) }
        </Formik>
      </>
  )
}

export default Form