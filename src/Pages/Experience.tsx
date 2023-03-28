import { useEffect, useState } from "react";
import { getExperienceData } from "../Services/experience";

const Experience = () => {

    const [data, setData] = useState<any>({});

    useEffect(() => {

        const data: any = getExperienceData();
        if (!!data) { setData(data) }

    }, [data]);

    return (
        <div id="experience">
            <div className="section_heading_box">
                <h1 className="section_heading">Experience</h1>
                <div className="line"></div>
                <p className="description">
                    Here you will find my previous employment history as a web application developer, where I have learned many things and gained knowledge.
                </p>
            </div>

            <div className="experience_data">
                {
                    Object.keys(data).length > 0 && Object.keys(data).map((item: any, index: number) => {
                        return (
                            <div key={index} className="experience_data_box">
                                <div className="company_name_and_time_box">
                                    <h3 className="company_name">{data[item].company_name || ''}</h3>
                                    <h3 className="time_period">{data[item].time_period || ''}</h3>
                                </div>
                                <p className="details"><b>Position <span>:</span></b><span>{data[item].position || ''}</span></p>
                                <p className="details"><b>My Work <span>:</span></b><span>{data[item].work || ''}</span></p>
                                <p className="details boxes"><b>Tools and Technologies <span>:</span></b><span>{Array.isArray(data[item].technologies) && data[item].technologies.map((item: string, index: number) => <span key={index} className="tool_box">{item}</span>)}</span></p>
                                <p className="details boxes"><b>Programming Languages <span>:</span></b><span>{Array.isArray(data[item].programming_languages) && data[item].programming_languages.map((item: string, index: number) => <span key={index} className="tool_box">{item}</span>)}</span></p>
                            </div>
                        )
                    })
                }

            </div >
        </div >
    )
}

export default Experience;