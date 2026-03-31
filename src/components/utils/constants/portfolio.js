import intech from "../../../assets/intech.png";
import AlsifAquarium from "../../../assets/alsif-aquarium.png";
import MovieApp from "../../../assets/movie-app.png";
import CovidId from "../../../assets/covid-id.png";
import Gunungku from "../../../assets/gunungku.png";
import DrShoes from "../../../assets/drShoes.png";

const Portfolios = [
    {
        id: 1,
        title: "Alsif Aquarium",
        desc: "A real UMKM ornamental fish shop made easy with a Laravel & MySQL web system.",
        img: AlsifAquarium,
        link: "https://github.com/dandirasyid/alsif-aquarium",
        tags: [
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap",
            "PHP",
            "Laravel",
            "MySQL",
        ],
        year: "2025",
    },
    {
        id: 2,
        title: "INTECH",
        desc: "An e-learning platform designed for students to learn online anytime.",
        img: intech,
        link: "https://github.com/dandirasyid/intech",
        tags: [
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap",
            "PHP",
            "Laravel",
            "MySQL",
        ],
        year: "2024",
    },
    {
        id: 3,
        title: "Movie App",
        desc: "Discover movies instantly through a sleek TMDB-connected website.",
        img: MovieApp,
        link: "https://frontend-programming-pearl.vercel.app/",
        tags: ["HTML", "CSS", "Javascript", "React JS"],
        year: "2023",
    },
    {
        id: 4,
        title: "Covid ID",
        desc: "A college project website built to display selected Covid-19 data from 2022.",
        img: CovidId,
        link: "https://covid-app-pearl.vercel.app/",
        tags: ["HTML", "CSS", "Javascript", "React JS"],
        year: "2023",
    },
    {
        id: 5,
        title: "GunungKu",
        desc: "Explore Indonesia mountains on an interactive frontend website.",
        img: Gunungku,
        link: "https://gunungku.netlify.app/",
        tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
        year: "2023",
    },
    {
        id: 6,
        title: "DrShoes",
        desc: "Modern e-commerce prototype for shoes with intuitive design.",
        img: DrShoes,
        link: "https://www.figma.com/proto/jWsrfP4SMa77gFzndpTh5c/DrShoes?node-id=387-2&t=Ctp5qN5D1X41yvCS-1&scaling=scale-down&content-scaling=fixed&page-id=8%3A3&starting-point-node-id=387%3A2",
        tags: ["UI/UX"],
        year: "2022",
    },
];

export default Portfolios;
