import { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setRouterId } from "../../Store/navSlice";

const navList = ['home', 'about', 'work', 'experience', 'contact'];

const Navbar = () => {

    const [isTopScroll, setTopScroll] = useState(window.pageYOffset === 0);
    const [sidebar, setSideBar] = useState(false);
    const dispatch = useDispatch();
    const id = useSelector((state: any) => state.router.id);

    useEffect(() => {

        window.addEventListener('scroll', () => {
            window.pageYOffset === 0 && !isTopScroll ? setTopScroll(true) : setTopScroll(false)
        });

    });

    return (
        <Fragment>
            <div className={`navbar ${!isTopScroll ? 'active' : ''}`}>
                <div className="right_side">
                    <h3 className="name">NIKESH KHICHADIYA</h3>
                </div>
                <div className="left_side">
                    <ul className="nav_list desktop">
                        {
                            navList.map((item: string) => {
                                return (

                                    <li key={item} className="nav_item">
                                        <NavLink to={`/`} onClick={() => {
                                            if (id === item) {
                                                setTimeout(() => {
                                                    if (id === 'home') window.scrollTo(0, 0);
                                                    else {
                                                        let element = document.getElementById(id);
                                                        if (!!element && !!element.offsetTop) {
                                                            if (window.innerWidth > 1200) { window.scrollTo(0, element.offsetTop) }
                                                            else window.scrollTo(0, element.offsetTop - 20)
                                                        };
                                                    }
                                                }, 100);
                                            }
                                            else dispatch(setRouterId(item));
                                        }}
                                        >
                                            {item}
                                        </NavLink>
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
                <div className={`slide_button mobile ${sidebar ? 'active' : ''}`} onClick={() => setSideBar(!sidebar)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={`backdrop ${sidebar ? 'active' : ''}`} onClick={() => setSideBar(!sidebar)}></div>
            <ul className={`nav_list mobile ${sidebar ? 'active' : ''}`}>
                {
                    navList.map((item: string) => {
                        return (

                            <li key={item} className="nav_item">
                                <NavLink to={`/`} onClick={() => {
                                    if (id === item) {
                                        setTimeout(() => {
                                            if (id === 'home') window.scrollTo(0, 0);
                                            else {
                                                let element = document.getElementById(id);
                                                if (!!element && !!element.offsetTop) {
                                                    if (window.innerWidth > 1024) { window.scrollTo(0, element.offsetTop) }
                                                    else window.scrollTo(0, element.offsetTop - 40)
                                                };
                                            }
                                        }, 100);
                                    }
                                    else dispatch(setRouterId(item));
                                    setSideBar(!sidebar);
                                }}
                                >
                                    {item}
                                </NavLink>
                            </li>

                        )
                    })
                }
            </ul>
            <div className="navbar_box"></div>

        </Fragment>
    )
}

export default Navbar;