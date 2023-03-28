import { projectData } from "../Helper/ProjectData"

export const getProjectsData = (): any => projectData;

export const getProjectData = (id: string): any => {

    if (projectData.hasOwnProperty(id)) { return projectData[id] }
    return 'No data found'

}