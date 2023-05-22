import { isValid } from 'date-fns';

const isDate = (value) => {

    if(!value) {
        return false;
    }

    const isValidDate = isValid(value);


    if (isValidDate) {
        return true;
    } else {
        return false;
    }

}

export default isDate;