export interface CardData {
    image : string
    name : string
    date : string
    vote : string
    overView: string
    id : string
    poster : string
}

export const convertCardData = (data : any[]) : CardData[] => {
    const newdata : CardData[] = data.map((item : any) => {
        return {
            image : item.backdrop_path,
            name : item.original_title,
            date : item.release_date,
            vote : item.vote_average,
            overView : item.overview,
            id : item.id,
            poster : item.poster_path,
        }
    })

    return newdata
}

export const convertCardDataMe = (data : any) : CardData => {
    const newdata : CardData =  {
            image : data.backdrop_path,
            name : data.original_title,
            date : data.release_date,
            vote : data.vote_average,
            overView : data.overview,
            id : data.id,
            poster : data.poster_path,
    }

    return newdata
}

