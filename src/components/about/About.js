import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

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
                <p style={{ marginTop: "-2px" }}>Azerbaijan Technical University - Computer Engineer</p>
            </li>
            <p style={{ color: info.baseColor, marginTop: "-15px" }}>Programming</p>
            <li style={{ listStyle: "none" }} className={Style.education}>
                <p style={{ marginTop: "-2px" }}>Code Academy - Full Stack Web Development</p>
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
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
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

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={educationText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}