import Bottom from "@/components/Shared/Bottom/Bottom";
import Header from "@/components/Shared/header/Header";
import { ToastContainer } from "react-toastify";

interface Props {
    children : React.ReactNode;
}

const UserLayout = ({children}: Props) => {

    return (
        <>   
        <Header />
        <ToastContainer />
          {children}
        <Bottom />
            
        </>
    )
}

export default UserLayout;