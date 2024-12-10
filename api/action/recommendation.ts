import { convertTrendingItem, TrendingData } from "@/components/Form/Trending/TrendingData"
import instance, { API_KEY } from "../axios"
import {  GET_RECOMMENDDATION, RECOMMENDATION_SERVICE } from "../service/Recommendation"
import { CardData, convertCardDataMe } from "@/components/Card/ViewCrad/cardData"
import { listId } from "@/lib/data"



export const getRecommentdation = async (id : string) => {
    try{
        const recom :any= await instance.get(`${RECOMMENDATION_SERVICE}${GET_RECOMMENDDATION}/${id}`) 
        const listId : string[] = recom['res']
        const listFilm = await Promise.all(
            listId.map(async (item: string) => {
                try {
                    const film = await instance.get(`/movie/${item}${API_KEY}`);
                    const films = convertTrendingItem(film);
                    return films;
                } catch {
                    // Nếu có lỗi, trả về null hoặc undefined để bỏ qua
                    return null; // hoặc return undefined;
                }
            })
        );
        const filteredListFilm : TrendingData[] = listFilm.filter(film => film !== null);
        return filteredListFilm
    } catch {
        return "error"
    }
}

export const convertTrain = async () => {
    const listFilm = await Promise.all(
        listId.map(async (item : string) => {
            try {
                const film = await instance.get(`/movie/${item}${API_KEY}`);
                const films = convertCardDataMe(film);
                return films;
            } catch {
                // Nếu có lỗi, trả về null hoặc undefined để bỏ qua
                return null; // hoặc return undefined;
            }
        })
    );
    const filteredListFilm : CardData[] = listFilm.filter(film => film !== null);
    return filteredListFilm
}