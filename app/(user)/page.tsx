import instance, { API_KEY } from "@/api/axios";
import Embla from "@/components/Card/CarouselDot/tsx";
import { convertEmbla } from "@/components/Card/CarouselDot/tsx/EmblaData";
import GridCardFilm from "@/components/Card/ViewCrad/GridCardFilm";
import Trending from "@/components/Form/Trending/Trending";
import { convertTrending } from "@/components/Form/Trending/TrendingData";

const Home = async () => {
  const data : any  = await instance.get(`/movie/popular${API_KEY}`)
  const listdata : any = await instance.get(`/trending/all/day${API_KEY}`)
  const newdata = convertEmbla(data.results)
  const listTren = convertTrending(listdata.results)
  return (
    <div className="w-full">
      <div className="w-full bg-blue-400 p-0">
        <Embla Embla={newdata}/>
      </div>
      
      <div className="text-white text-5xl font-bold my-8 mx-20">
          OLD LIST
      </div>
      <div className="w-full px-48 my-4">
        <GridCardFilm type="train"/>
      </div>


      <div className="w-full bg-white px-48 mt-10">
        <Trending listTrending={listTren} />
      </div>
      
    </div>
  );
}

export default Home
