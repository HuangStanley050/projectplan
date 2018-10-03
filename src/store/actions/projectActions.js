import * as actionTypes from "./actionTypes";

export const createProject = (project, { getFirebase, getFirestore }) => {
    return {
        type: actionTypes.CREATE_PROJECT,
        project: project
    };
};
