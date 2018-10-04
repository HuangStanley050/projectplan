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
    return (dispatch, getState, { getFirestore }) => {
        //type: actionTypes.CREATE_PROJECT,
        //project: project

        const firestore = getFirestore();
        dispatch(startCreate());
        firestore.collection('projects').add({
                ...project,
                authorFirstName: 'Jason',
                authorLastName: 'Chew',
                authorId: 89,
                createdAt: new Date()

            })
            .then(dispatch(success()))
            .catch(err => dispatch(fail(err)));
    };
};
