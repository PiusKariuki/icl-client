import {defineStore} from "pinia";


export const useRegistrationStore = defineStore("registration", {
    state: () => ({
        firstName: "",
        lastName: "",
        DOB: "",
        gender: "",
        vitalsDate: "",
        centimeters: "",
        kilograms: "",
        healthReportDate: "",
        generalHealth: "",
        onDiet: "",
        onDrugs: "",
        comments: ""
    }),
    getters: {
        isBasicFormValid: state => state.firstName && state.lastName && state.DOB && state.gender,
        bmi: state => Math.round(state.kilograms / (Math.pow(state.centimeters / 100, 2))),
        isVitalsFormValid: state => state.vitalsDate && state.centimeters && state.kilograms,
        isOverweightFormValid: state => state.healthReportDate.length>0 && state.generalHealth.length>0 &&  state.onDrugs !== "",
        isUnderweightFormValid: state => state.healthReportDate.length>0 && state.generalHealth.length>0 && state.onDiet  !== "",

    },
    persist: true
})