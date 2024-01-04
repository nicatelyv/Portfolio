import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Projects',
        to: '/projects',
        active: 'projects'
    },
    {
        name: 'Resume',
        to: '/resume',
        active: 'resume'
    },
]

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={{ md: "center", xs: "space-between" }} alignItems={'center'} textAlign={'center'} marginLeft={'20px'} marginRight={'20px'}
                gap={{ xs: '1rem', md: '5rem' }}
                fontSize={{ xs: "14px", md: '1rem' }}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5 rem 0', marginTop: "15px" }}>{link.name}</p>}
                            {link.type && <h1 style={{ fontSize: "27px", marginTop: "15px" }}>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15px" }}>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    )
}