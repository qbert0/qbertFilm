
interface Props {
    children : React.ReactNode;
}

const TopRateLayout = ({children}: Props) => {

    return (
        <>    
            {children}
        </>
    )
}

export default TopRateLayout;