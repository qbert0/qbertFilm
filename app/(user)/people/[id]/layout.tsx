
interface Props {
    children : React.ReactNode;
}

const PeopleLayout = ({children}: Props) => {

    return (
        <>    
            {children}
        </>
    )
}

export default PeopleLayout;