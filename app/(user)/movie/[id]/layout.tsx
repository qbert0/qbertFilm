
interface Props {
    children : React.ReactNode;
}

const MovieLayout = ({children}: Props) => {

    return (
        <>    
            {children}
        </>
    )
}

export default MovieLayout;