
const Badge = ({label,className}:{label:string; className: string}) =>{
    return (
        <span 
        className={`font-semibold text-[12px] first-letter:text-[12px] py-1 px-2 rounded-lg ${className}`}>
            {label}
        </span>
    )
}

type Props = {
    type: 'React' | 'Tailwind CSS' | 'Python' | "Django" | string
}

const BadgeTecno = ({type}: Props) => {
    switch(type){
        case 'React': 
            return (
                <Badge 
                    className="text-black bg-yellow-400"
                    label="React"
                />
            )
        case 'Tailwind CSS': 
            return (
                <Badge 
                        className="text-white bg-blue-900"
                        label="Tailwind CSS"
                    />
            )
        case 'Django': 
            return (
                <Badge 
                        className="text-white bg-gradient-to-r from-green-800 to-green-950"
                        label="Django"
                    />
            )
        case 'Python': 
            return (
                <Badge 
                        className="text-white bg-gradient-to-r from-sky-700 to-slate-900"
                        label="Python"
                    />
            )
        default:
            return (
                <Badge 
                        className="text-white bg-black"
                        label={type}
                    />
            )
    }
        
}

export default BadgeTecno