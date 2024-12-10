import instance, { API_KEY, IMAGE } from "@/api/axios"
import ViewFilm from "@/components/Card/ViewFilm/ViewFilm";
import { convertMovie, Movie } from "@/components/Card/ViewFilm/ViewMovieData";
import AiComment from "@/components/Form/AiComment/AiComment";
import ListCast from "@/components/Form/ListCast/ListCast";
import Recomment from "@/components/Form/Recomment/Recomment";
import SideBar from "@/components/Form/sidebar/sidebar";
import Review from "@/components/Form/Socal/Review/Review";
import { FaStar } from "react-icons/fa";


const MoviePage = async ({ params }: { params: { id: string } }) => {
    const data : any = await instance.get(`movie/${params.id}${API_KEY}`)
    const newdata : Movie = convertMovie(data)
    return (
        <div className="w-full bg-white">
            <ViewFilm movie={newdata} />
            

            <div className=" flex gap-4">
                <div className=" w-3/4">
                    <div className=" bg-white w-full py-2 ">
                        <ListCast movieId={params.id} />
                    </div>
                    <div className="border-t-2 border-gray-200 ml-32  my-4"></div>
                    <div className="bg-white">
                        <Review movieId={params.id} />
                    </div>
                    <div className="border-t-2 border-gray-200 ml-32  my-4"></div>
                    <div className=" bg-white w-full py-2 ">
                        <Recomment movieId={params.id} />
                    </div>
                </div>

                <div className="w-1/4 bg-white pr-10">
                    <SideBar 
                    movideId={params.id} 
                    title={newdata.name} 
                    language={newdata.language} 
                    status={newdata.status}
                    revenue={newdata.revenue}
                    budget={newdata.budget}
                    homepage={newdata.homepage}
                    />
                    <div className="border-t-2 border-gray-200 pr-4 my-4 "></div>

                    <AiComment movieId={params.id} />

                </div>
            </div>
        </div>
    )
}

export default MoviePage


