import {defineStore} from "pinia";


export const useRegistrationStore = defineStore("registration-store", {
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
        isOverweightFormValid: state => state.healthReportDate.length > 0 && state.generalHealth.length > 0 && state.onDrugs !== "",
        isUnderweightFormValid: state => state.healthReportDate.length > 0 && state.generalHealth.length > 0 && state.onDiet !== "",
        postObject: state => ({
            firstName: state.firstName,
            lastName: state.lastName,
            DOB: state.DOB,
            gender: state.gender,
            vitalsDate: state.vitalsDate,
            centimeters: state.centimeters,
            kilograms: state.kilograms,
            healthReportDate: state.healthReportDate,
            generalHealth: state.generalHealth,
            onDiet: state.onDiet,
            onDrugs: state.onDrugs,
            comments: state.comments
        })
    },
    persist: true
})