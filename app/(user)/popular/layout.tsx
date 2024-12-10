
interface Props {
    children : React.ReactNode;
}

const PopularLayout = ({children}: Props) => {

    return (
        <>    
            {children}
        </>
    )
}

export default PopularLayout;