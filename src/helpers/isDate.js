import moment from 'moment';

export const isDate = (value) => {
    console.log(value);
    if (!value) {
        return false;
    }
console.log(value);
    const date = moment( value );
    console.log(date);
    if (date.isValid()) {
        return true;
    }else {
        return false;
    }
}

