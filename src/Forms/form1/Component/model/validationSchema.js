import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';

const {
  formField: {
    ufContrato,
    cidadeContrato,
    dataIniContrato,
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    ufContrato: Yup.string().required(`${ufContrato.requiredErrorMsg}`),
    cidadeContrato: Yup.string().required(`${cidadeContrato.requiredErrorMsg}`),
    dataIniContrato: Yup.string()
      .nullable()
      .required(`${dataIniContrato.requiredErrorMsg}`)
      .test('expDate', dataIniContrato.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),

    //   [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),

    //   [city.name]: Yup.string()
    //     .nullable()
    //     .required(`${city.requiredErrorMsg}`),
    //   [zipcode.name]: Yup.string()
    //     .required(`${zipcode.requiredErrorMsg}`)
    //     .test(
    //       'len',
    //       `${zipcode.invalidErrorMsg}`,
    //       val => val && val.length === 5
    //     ),
    //   [country.name]: Yup.string()
    //     .nullable()
    //     .required(`${country.requiredErrorMsg}`)
    // }),
    // Yup.object().shape({
    //   [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    //   [cardNumber.name]: Yup.string()
    //     .required(`${cardNumber.requiredErrorMsg}`)
    //     .matches(visaRegEx, cardNumber.invalidErrorMsg),

    //   [cvv.name]: Yup.string()
    //     .required(`${cvv.requiredErrorMsg}`)
    //     .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  })
];
