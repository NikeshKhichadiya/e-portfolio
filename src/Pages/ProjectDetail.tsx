import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectData } from '../Services/project';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from 'swiper';
import { useNavigate } from 'react-router-dom';

const ProjectDetail = () => {

    const params = useParams();
    const [data, setData] = useState<any>({});
    const navigate = useNavigate();

    useEffect(() => {

        const data = getProjectData(typeof (params.id) === 'string' ? params.id : '');
        if (!!data && data !== 'No data found') setData(data);
        else navigate('/');

    }, [params, navigate]);

    return (
        <div className={`projectDetails`}>
            <div className="project_heading_box">
                <h1 className="proeject_name">{data.name}</h1>
                <div className="project_name_line"></div>
                <p className="description">{data.shortDescription}</p>
            </div>
            <h3 className="sub_heading">Images</h3>
            <div className="images_box">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Navigation]}
                >
                    {Array.isArray(data.images) && data.images.map((src: string, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <img className='project_image' src={src} alt={'posters'} />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
            <div className='detail_box'>
                {
                    (Array.isArray(data.roles_and_resposibilities) && data.roles_and_resposibilities.length > 0) &&
                    <div className="roles_and_responsibilities_box">
                        <h3 className="sub_heading">My Roles and Responsibilities</h3>
                        <ul className="list">
                            {

                                data.roles_and_resposibilities.map((item: string, index: number) => {

                                    return (
                                        <li key={index} className="item">
                                            <b>{index + 1})</b>&nbsp;{item}.
                                        </li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                }
                <div>
                    {
                        (Array.isArray(data.technologies) && data.technologies.length > 0) &&
                        <div>
                            <h3 className="sub_heading">Frameworks and Libraries</h3>
                            <div className="technology_box">

                                {

                                    data.technologies.map((item: string, index: number) => {

                                        return (
                                            <p key={index} className="technology_name">
                                                {item}
                                            </p>
                                        )

                                    })
                                }

                            </div>

                        </div>
                    }
                    {
                        (Array.isArray(data.programming_languages) && data.programming_languages.length > 0) &&
                        <div>
                            <h3 className="sub_heading">Programming Languages</h3>
                            <div className="technology_box">

                                {

                                    data.programming_languages.map((item: string, index: number) => {

                                        return (
                                            <p key={index} className="technology_name">
                                                {item}
                                            </p>
                                        )

                                    })
                                }

                            </div>

                        </div>
                    }
                </div>
            </div>
            <h3 className="sub_heading">See Live</h3>
            <div className="button_box">
                <a href={data.live_link} target='_blank' rel="noreferrer" className="button">Live Link</a>
                <button onClick={() => { navigate('/'); setTimeout(() => window.scrollTo(0, 0), 10) }} className="button">Go Back</button>
            </div>
        </div>

    )

}

export default ProjectDetail