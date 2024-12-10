
interface Props {
    label : string
}

const ErrorMe = ({label} : Props) => {
    return (
        <div className="text-red-500 text-xs px-2 py-0.5 font-bold">
            {label}
        </div>
    )
}

export default ErrorMe