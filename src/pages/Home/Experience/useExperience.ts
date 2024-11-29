type Experience = {
    id: number;
    job: string;
    company: string;
    time: string;
    description: string;
}

export default function useExperience() {
    const data = [
        {
            id: 1,
            job: "Análista 1 Desarrolador de Sistemas informáticos",
            company: "GAD - BENI",
            time: "Actualmente...",
            description: "Responsable del desarrollo continuo y mantenimiento del sistema de almacen. Refactorización de código, resolución de bugs y despliegue de nuevas funcionalidades según los requerimientos."
        },
        {
            id: 2,
            job: "Técnico IV Desarrolador de Sistemas",
            company: "GAD - BENI",
            time: "Octubre - Diciembre 2023",
            description: "Responsable del desarrollo continuo y mantenimiento del sistema de almacen. Refactorización de código, resolución de bugs y despliegue de nuevas funcionalidades según los requerimientos."
        },
        {
            id: 3,
            job: "Desarrolador Web",
            company: "AUTÓNOMO",
            time: "Desde 2023",
            description: "Responsable del desarrollo continuo y mantenimiento del sistema de almacen. Refactorización de código, resolución de bugs y despliegue de nuevas funcionalidades según los requerimientos."
        }
        
    ]
    return {data};
}