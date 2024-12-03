type FeaturedProject = {
    id: number;
    title: string;
    technologies: string[];
    description: string;
    code_url?: string;
    preview_url?: string;
}

export default function usePortfolio() {
    const data = [
        {
            id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            technologies: ["React","Tailwind CSS"],
            description: "Lorem ipsum dolor. Optio eaque at perspiciatis provident laboriosam iste, temporibus id assumenda itaque atque quidem voluptatibus! Reiciendis ipsum dolore blanditiis quaerat, tenetur inventore nulla laboriosam? Tenetur, nisi maxime. At quos saepe ab id consequatur placeat. Eius aperiam atque sint commodi!",
            code_url: "https://google.com",
            preview_url: "https://google.com"
        },
        {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            img: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            technologies: ["React","Python","Django"],
            description: "Lorem ipsum dolor. Optio eaque at perspiciatis provident laboriosam iste, temporibus id assumenda itaque atque quidem voluptatibus! Reiciendis ipsum dolore blanditiis quaerat, tenetur inventore nulla laboriosam? Tenetur, nisi maxime. At quos saepe ab id consequatur placeat. Eius aperiam atque sint commodi!",
            code_url: "https://google.com",
            preview_url: ""
        },
        
    ]
    return {data};
}