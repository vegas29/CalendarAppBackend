import { isValid, parseISO } from 'date-fns';

const isDate = (value) => {

    if(!value) {
        return false;
    }

    const isValidDate = isValid(parseISO(value));

    if (isValidDate) {
        return true;
    } else {
        return false;
    }

}

export default isDate;