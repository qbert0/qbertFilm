import CurrentHeader from "@/components/Card/Current";

interface Props {
    children : React.ReactNode;
}

const CurrentCurrentLayout = ({children}: Props) => {

    return (
        <div>   
        <CurrentHeader />
          {children}
            
        </div>
    )
}

export default CurrentCurrentLayout;