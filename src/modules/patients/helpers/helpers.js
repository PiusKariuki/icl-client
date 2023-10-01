export const getBMI = ({kg, cm}) => {
    const bmi = kg / (Math.pow(cm / 100, 2))

    switch (true) {
        case (bmi <= 18.5):
            return 'underweight'
            break;

        case ((bmi > 18.5) && (bmi <= 24.9)):
            return 'normal'
            break;

        case ((bmi > 24.9) && (bmi <= 30)):
            return 'overweight'
            break;

        case (bmi > 30):
            return "Obese";
            break;

        default:
            return "Error";
    }
}

export const getAgeFromDOB = (DOB) => Math.abs(Math.floor((new Date() - new Date(DOB).getTime()) / 3.15576e+10))

export const getDateTime = (createdAt) =>{
    const dateObject = new Date(createdAt)
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const date = dateObject.getDate()

    const time = dateObject.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

    return `<p class="text-xs lg:text-sm">${date}.${month}.${year} <span class="text-xs font-semibold lg:ml-4">${time}</span></p>`
}