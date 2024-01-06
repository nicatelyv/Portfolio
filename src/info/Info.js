import self from "../img/me.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Nijat",
    lastName: "Aliyev",
    initials: "Nijat",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'Based in the Azerbaijan'
        },
        {
            emoji: '💻',
            text: 'I love writing code'
        },
        // {
        //     emoji: "💼",
        //     text: "Systems Engineer at Google"
        // },
        {
            emoji: "📧",
            text: "nicateliyevv03@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/nicatelyv",
            icon: "fa fa-github",
            label: 'Github'
        },
        {
            link: "https://www.linkedin.com/in/nicat-%C9%99liyev-4a627b262/",
            icon: "fa fa-linkedin",
            label: 'LinkedIn'
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
        {
            link: "https://instagram.com/nicatelyv",
            icon: 'fa fa-instagram',
            label: 'Instagram'
        },
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
    bio: "Hello! I am Nijat. I graduated from Code Academy with a diploma in Full Stack Web Programming. I graduated from Azerbaijan Technical University with a degree in Computer Engineering.Apart from being a web developer, I enjoy most of my time being outdoors and sometimes play game. I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.",
    skills:
    {
        proficientWith: ['JavaScript', 'HTML', 'CSS', 'Sass', 'React', 'Git', 'Github', 'Bootstrap', 'Figma', 'Windows Office Programms'],
        exposedTo: ['Nodejs', 'MongoDB', 'MsSQL']
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
            title: "Swiss Delight",
            live: "https://swissdelight.vercel.app",
            desc: "Chocolate & Cake shop",
            source: "https://github.com/nicatelyv/Swiss-Delight",
            image: mock1
        },
        {
            title: "Electronics Store",
            live: "https://electronicsstore.vercel.app/",
            desc: "Online electronics shop",
            source: "https://github.com/nicatelyv/ElectronicsStore",
            image: mock2
        },
        {
            title: "My Portfolio",
            live: "https://nijataliyev.vercel.app/",
            desc: "My 2nd Portfolio",
            source: "https://github.com/nicatelyv/",
            image: mock3
        },
        {
            title: "Tic Tac Toe",
            live: "https://tic-tac-toe-theta-peach.vercel.app/",
            desc: 'Game',
            source: "https://github.com/nicatelyv/TicTacToe",
            image: mock4
        },
        {
            title: "Grayscale",
            live: "https://grayscale-nicatelyv.vercel.app/",
            desc: "Template",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}