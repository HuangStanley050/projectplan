import * as actionTypes from "./actionTypes";

const startCreate = () => {
    return {
        type: actionTypes.CREATE_START

    };
}

const success = () => {
    //console.log("success");
    return {
        type: actionTypes.CREATE_SUCCESS

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
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        dispatch(startCreate());

        firestore.collection('projects').add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date()

            })
            .then(dispatch(success()))
            .catch(err => dispatch(fail(err)));
    };
};
