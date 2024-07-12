import self from "../img/me.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Nijat",
    lastName: "Aliyev",
    initials: "Nijat",
    position: "a Frontend developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'Based in the Baku, Azerbaijan'
        },
        {
            emoji: '💻',
            text: 'I love writing code'
        },
        // {
        //     emoji: "💼",
        //     text: ""
        // },
        {
            emoji: "📧",
            text: "nicateliyevv03@gmail.com"
        },
        {
            emoji: "🎂",
            text: "30.01.2003"
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/nicatelyv/",
            icon: "fa fa-linkedin",
            label: 'LinkedIn'
        },
        {
            link: "https://github.com/nicatelyv",
            icon: "fa fa-github",
            label: 'Github'
        },
        // {
        //     link: "https://nijataliyev.vercel.app/",
        //     icon: "fa fa-address-card",
        //     label: '2nd portfolio'
        // },
        {
            link: "mailto:nicateliyevv03@gmail.com",
            icon: "fa fa-envelope",
            label: 'Mail'
        },
        // {
        //     link: "https://instagram.com/nicatelyv",
        //     icon: 'fa fa-instagram',
        //     label: 'Instagram'
        // },
        {
            link: "https://wa.me/+994705002045",
            icon: "fa fa-whatsapp",
            label: 'Whatsapp'
        },
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
    ],
    bio: "I, Aliyev Nijat, was born in Baku. In the years 2009-2020, I received secondary education in full secondary school No. 301. In 2020-2024, I completed my bachelor's degree at AzTU and 2024-2026 study my master's degree at OYU. My specialty was 'Computer engineering' in both. I have more than 1 year of experience in frontend programming. I have continuous learning interests in programming and web design.",
    skills:
    {
        coreTechnologies: ['JavaScript', 'HTML', 'CSS/SCSS', 'React.js', 'Redux/Redux Toolkit', 'Node.js', 'MongoDB', 'Bootstrap', 'Material UI', 'Figma', 'Git/Github'],
        others: ['MsSQL', 'Microsoft Office Programs', 'PowerBI', 'Canva'],
    }
    ,
    hobbies: [
        {
            label: 'Coding',
            emoji: '💻'
        },
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Walking',
            emoji: '🚶‍♂️'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
    ],
    portfolio: [
        {
            title: "Electronics Store",
            live: "https://electronicsstore.vercel.app/",
            desc: "Online electronics shop",
            source: "https://github.com/nicatelyv/ElectronicsStore",
            image: mock2
        },
        {
            title: "Swiss Delight",
            live: "https://swissdelight.vercel.app",
            desc: "Chocolate & Cake shop",
            source: "https://github.com/nicatelyv/Swiss-Delight",
            image: mock1
        },
        {
            title: "To Do",
            live: "https://todo-nijat.vercel.app/",
            desc: "Todo app with React",
            source: "https://github.com/nicatelyv/ToDo",
            image: mock3
        },
        {
            title: "Space Tourism",
            live: "https://spacetourism-nijat.vercel.app/",
            desc: "Website",
            source: "https://github.com/nicatelyv/SpaceTourism",
            image: mock4
        },
        {
            title: "Notes",
            live: "https://ideapad.vercel.app/",
            desc: "Notes app with React Redux",
            source: "https://github.com/nicatelyv/NotesApp",
            image: mock5
        },
        {
            title: "My Portfolio",
            live: "https://nijataliyev.vercel.app/",
            desc: "My 2nd Portfolio",
            source: "https://github.com/nicatelyv/Portfolio1",
            image: mock6
        },
        {
            title: "Grayscale",
            live: "https://grayscale-nicatelyv.vercel.app/",
            desc: "Template",
            source: "https://github.com/nicatelyv/Grayscale",
            image: mock7
        },
        {
            title: "Tic Tac Toe",
            live: "https://tictactoe-nijat.vercel.app/",
            desc: 'Game',
            source: "https://github.com/nicatelyv/TicTacToe",
            image: mock8
        },
    ]
}