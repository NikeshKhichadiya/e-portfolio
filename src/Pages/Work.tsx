import { useState, useEffect } from 'react';
import { getProjectsData } from '../Services/project';

const Work = () => {

    const [projectData, setProjectData] = useState<any>({});

    useEffect(() => {

        const data = getProjectsData();
        if (!!data) { setProjectData(data); }

    }, [projectData]);



    return (
        <div id="work">

            <div className="section_heading_box">
                <h1 className="section_heading">Work</h1>
                <div className="line"></div>
                <p className="description">
                    Here you will find some of the projects that I created or continue projects and I have also done personal projects as well as client projects
                </p>
            </div>

            <div className="porject_box">
                {
                    (Object.keys(projectData).length > 0) && Object.keys(projectData).map((key: string) => {
                        return (
                            <div key={key} className="project">
                                <div className="imegesBox">
                                    <img src={projectData[key].poster || ''} alt={`poster_${key}`} />
                                </div>
                                <div className="description_box">
                                    <p className="name">{projectData[key].name}</p>
                                    <p className="description">{projectData[key].shortDescription}</p>
                                    <a href={`/project/${key}`} target='_blank' rel="noreferrer" className="button">View Details</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}

export default Work;