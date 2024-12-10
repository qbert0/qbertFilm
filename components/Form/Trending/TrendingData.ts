export interface TrendingData {
    image : string
    name : string
    id : string
    vote : string
    date : string
    poster : string
}


export const convertTrending = (data :any[]) : TrendingData[] => {

    const newData : TrendingData[] = data.map((item : any) => {
        return {
            image : item.backdrop_path,
            name : item.title || item.name,
            id : item.id,
            vote : item.vote_average,
            date : item.first_air_date || item.release_date,
            poster : item.poster_path
        }
    })

    return newData
}

export const convertTrendingItem = (data: any) => {
    const newdata : TrendingData = {
        image : data.backdrop_path,
        name : data.title || data.name,
        id : data.id,
        vote : data.vote_average,
        date : data.first_air_date || data.release_date,
        poster : data.poster_path
    }
    return newdata
}