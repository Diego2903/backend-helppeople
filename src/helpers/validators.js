import { body } from "express-validator/check"

export const validate = (method) => {
    switch (method) {
      case 'createCiudadano': {
       return [ 
          body('documento', "the document is required").not().isEmpty(),
          body("nombres", "the names is required").not().isEmpty(),
          body("apellidos", "the last name is required").not().isEmpty(),
          // body("fecha_nacimiento", "the date of birth must have a correct format").custom((value) => {
          //     return isDate(value)
          // }),
          body("profesion", "the profession is required").not().isEmpty(),
          body("aspiracion_salarial", "salary aspiration is required").isLength({min: 2}),
          body("correo_electronico", "the email is required").isEmail()
         ]   
      }
    }
}
  