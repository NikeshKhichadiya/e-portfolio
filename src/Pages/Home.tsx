import { useDispatch } from "react-redux";
import { setRouterId } from "../Store/navSlice";

const Home = () => {

    const dispatch = useDispatch();

    return (
        <div id="home" className="home">
            <h2 className="name stroke_text">
                HII, I'M NIKESH KHICHADIYA
            </h2>
            <p className="description">
                A passionate and dedicated <strong>Full-stack Developer</strong> with a keen interest in crafting seamless, innovative, and user-centric digital solutions. With almost <strong>5 years</strong> of experience in the field, I thrive on bringing ideas to life through clean, efficient, and scalable code.
            </p>
            <p className="button" onClick={() => dispatch(setRouterId('work'))}>WORK</p>
            <div onClick={() => dispatch(setRouterId('about'))}
                style={{ bottom: window.screen.height - window.screen.availHeight < 32 && window.screen.height - window.screen.availHeight > 16 ? window.screen.height - window.screen.availHeight : 32 }}
                className="down_arrow_box">
                <p className="text">About Me</p>
                <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330">
                    <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                             c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                             s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                </svg>
            </div>
        </div>
    )
}

export default Home;