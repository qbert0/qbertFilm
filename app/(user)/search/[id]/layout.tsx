
interface Props {
    children : React.ReactNode;
}

const SearchLayout = ({children}: Props) => {

    return (
        <>    
            {children}
        </>
    )
}

export default SearchLayout;