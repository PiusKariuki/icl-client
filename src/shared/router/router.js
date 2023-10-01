import {createRouter, createWebHistory} from "vue-router";

export const routes = [
    {
        path: "/",
        name: "patients",
        meta: {
            icon: "fa-solid fa-rectangle-list"
        },
        component: () =>  import("@/modules/patients/views/Patients.vue")
    },
    {
        path: "/registration",
        name: "registration",
        meta: {
            icon: "fa-solid fa-user-plus"
        },
        children: [
            {
                path: "",
                name: "registration",
                component: () => import("@/modules/registration/views/Registration.vue"),

            },
            {
                path: "vitals",
                name: "vitals",
                component: () => import("@/modules/registration/views/Vitals.vue")
            },
            {
                path: "overweight",
                name: "overweight",
                component: () => import("@/modules/registration/views/Overweight.vue")
            },
            {
                path: "underweight",
                name: "underweight",
                component: () => import("@/modules/registration/views/Underwieght.vue")
            },
        ]
    },
    {
        path: "/visits",
        name: "visit",
        meta: {
            icon: "fa-solid fa-bandage"
        },
        children: [
            {
                path: "",
                name: "get-patient",
                component: () =>  import("@/modules/visits/views/SearchPatient.vue")
            },
            {
                path: "vitals/:patientId",
                name: "patient-vitals",
                component: () =>  import("@/modules/visits/views/VitalsVisit.vue")
            },
            {
                path: "underweight/:patientId",
                name: "visit-underweight",
                component: () =>  import("@/modules/visits/views/UnderWeight.vue")
            },
            {
                path: "overweight/:patientId",
                name: "visit-overweight",
                component: () =>  import("@/modules/visits/views/Overweight.vue")
            },

        ]
    },


]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;