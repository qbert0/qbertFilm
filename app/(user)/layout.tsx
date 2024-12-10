import Bottom from "@/components/Shared/Bottom/Bottom";
import Header from "@/components/Shared/header/Header";

interface Props {
    children : React.ReactNode;
}

const UserLayout = ({children}: Props) => {

    return (
        <>   
        <Header />
          {children}
        <Bottom />
            
        </>
    )
}

export default UserLayout;