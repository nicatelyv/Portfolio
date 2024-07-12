import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
// import Backdrop from '@mui/material/Backdrop';
// import Button from '@mui/material/Button';

export default function About() {
    const firstName = info.firstName.toLowerCase()

    // const [open, setOpen] = React.useState(false);
    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p style={{ fontSize: "20px" }}><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                <div style={{ lineHeight: "2rem", marginTop: "12px" }}>{info.bio}</div>
            </p>
        </>;
    }

    function educationText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd education
            </p>
            <p><span style={{ color: info.baseColor }}>education <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}>Bachelor's degree</p>
            <li style={{ listStyle: "none" }} className={Style.education}>
                {/* {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)} */}
                <p style={{ marginTop: "-2px" }}>Azerbaijan Technical University - Computer engineering</p>
            </li>
            <p style={{ color: info.baseColor, marginTop: "-10px" }}>Master's degree</p>
            <li style={{ listStyle: "none" }} className={Style.education}>
                {/* {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)} */}
                <p style={{ marginTop: "-2px" }}>University of Land of Fire - Computer engineering</p>
            </li>
            <p style={{ color: info.baseColor, marginTop: "-15px" }}>Programming</p>
            <li style={{ listStyle: "none" }} className={Style.education}>
                <p style={{ marginTop: "-2px" }}>Code Academy - Software Development (Diploma and certificate)</p>
                {/* {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)} */}
            </li>
        </>;
    }
    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Core Technologies:</p>
            <ul className={Style.skills}>
                {info.skills.coreTechnologies.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Others:</p>
            <ul className={Style.skills}>
                {info.skills.others.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }
    // function diploma() {
    //     return <>
    //         <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
    //             diploma</p>
    //         <p><span style={{ color: info.baseColor }}>diploma <span
    //             className={Style.green}>(main)</span> $</span></p>
    //         {/* <a target='/' href='https://drive.google.com/file/d/1-ZZcXbg_8bC5wRQDYglXPA2oj95Pl1qy/view?usp=sharing'><div className={Style.diplomaDiv}></div></a> */}
    //         <Button className={Style.diplomaDiv} onClick={handleOpen}></Button>
    //         <Backdrop
    //             sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    //             open={open}
    //             onClick={handleClose}

    //         >
    //             <div className={Style.diplomaDivOpen} onClick={handleOpen}></div>
    //         </Backdrop>
    //     </>;
    // }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={educationText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
            {/* <Terminal text={diploma()} /> */}
        </Box>
    )
}