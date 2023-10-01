import {validate} from "email-validator";


export const formRules = {
    emailRules: [
        emailAddress => !!emailAddress || "Please enter a valid email address",
        emailAddress => (emailAddress && validate(emailAddress)) || "Please enter a valid email address"
    ],
    passwordRules: [pass => !!pass || "Password is required"],
    requiredString: [input => !!input || "This field is required"],
    addressRules: [(location) => !!location || "Address is required"],
}

/**
 *
 * @param rules {array}
 * @param inputVal
 * @returns {boolean}
 */
export const rulesChecker = ({rules = [], inputVal}) => {
    if (rules && rules.length > 0) {
        for (let i = 0; i < rules.length; i++) {
            if (rules[i](inputVal) !== true) {
                return false;
            }
        }
        return true;
    } else return true
}