import * as actionTypes from "./actionTypes";

export const createProject = (project) => {
    return {
        type: actionTypes.CREATE_PROJECT,
        project: project
    };
};
