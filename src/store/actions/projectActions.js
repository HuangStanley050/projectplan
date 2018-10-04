import * as actionTypes from "./actionTypes";

const success = () => {
    console.log("success");
    return {
        type: actionTypes.CREATE_SUCCESS,

    };
};

const fail = (err) => {
    console.log(err + " fail");
    return {
        type: actionTypes.CREATE_FAIL
    };
};

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //type: actionTypes.CREATE_PROJECT,
        //project: project
        const firestore = getFirestore();
        firestore.collection('projects').add({
                ...project,
                authorFirstName: 'Jake',
                authorLastName: 'Blow',
                authorId: 23,
                createdAt: new Date()

            })
            .then(dispatch(success()))
            .catch(err => { dispatch(fail(err)) });
    };
};
