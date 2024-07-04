import { useDispatch } from "react-redux";
import { setRouterId } from "../Store/navSlice";

const skills = ['Html', 'css', 'javascript', 'typescript', 'python', 'scss', 'react', 'angular', 'node', 'express', 'sql', 'mongo db', 'redux', 'ngrx', 'firebase', 'git', 'git hub', 'git lab', 'bootstrap', 'material ui', 'tailwind css', 'primefaces', 'responsive design', 'no sql', 'database design', 'database query'];

const About = () => {

    const dispatch = useDispatch();

    return (
        <div id="about">
            <div className="section_heading_box">
                <h1 className="section_heading">About Me</h1>
                <div className="line"></div>
                <p className="description">
                    Here you will find more information about me, like my education, my background, and my current skills mostly in terms of programming and technology
                </p>
            </div>
            <div className="detail_box">
                <div className="detail">
                    <h3 className="sub_heading">
                        Get to know me!
                    </h3>
                    <div className="description_box">
                        <p className="description">
                            Hello! My name is Nikesh Khichadiya and I enjoy creating <strong>Web-Applications</strong> that live on the internet. My interest in web development started back in 2020 when I decided to try converting wireframes into code which taught me a lot about <strong>HTML, CSS</strong> and <strong>JAVASCRIPT!</strong>
                        </p>
                        <p className="description">
                            Fast-forward to today and I've done and I've worked on, many projects such as an E-Commerce website, E-Portfolio, Templates, Admin-Panels, Corporate Website, etc.
                        </p>
                        <p className="description">
                            Feel free to Connect or Follow me on my <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nikesh-khichadiya-45611917a/">Linkedin</a> where I post information about my experiences like Web Development and Programming and, My education and My Skills.
                        </p>
                        <p className="description">
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </p>
                    </div>
                    <div className="button_box desktop">
                        <a href={'./Resume.pdf'} target="_blank" rel="noreferrer" className="button">Resume</a>
                        <p onClick={() => dispatch(setRouterId('contact'))} className="button">Contact Me</p>
                    </div>
                </div>
                <div className="detail gap">

                    <div>
                        <h3 className="sub_heading">
                            My Skills
                        </h3>
                        <div className="skills_box">
                            {skills.map((item: string) => {
                                return (
                                    <p key={item} className="skill_name">{item}</p>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="sub_heading">
                            My Education
                        </h3>
                        <div className="education_box">
                            <div className="education_detail_box">
                                <h4 className="collage_name">
                                    <strong>Institute</strong> : Gandhinagar Institute of Technology - India
                                </h4>
                                <h4 className="year">
                                    <strong>Year</strong> : July 2016 - Aug 2020
                                </h4>
                                <h4 className="course_name">
                                    <strong>Course</strong> : Bachelor's in Information Technology
                                </h4>
                            </div>
                            <div className="education_detail_box">
                                <h4 className="collage_name">
                                    <strong>Institute</strong> : New York Institute of Technology - Canada
                                </h4>
                                <h4 className="year">
                                    <strong>Year</strong> : Jan 2023 - July 2024
                                </h4>
                                <h4 className="course_name">
                                    <strong>Course</strong> : M.S. in CyberSecurity
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="button_box mobile">
                <a href={'./Resume.pdf'} download={true} className="button">Resume</a>
                <p onClick={() => dispatch(setRouterId('contact'))} className="button">Contact Me</p>
            </div>
        </div>
    )

}

export default About;