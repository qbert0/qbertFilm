export interface EmblaData {
    image: string
    name : string
    date : string
    vote : string
    overView: string
    id : string
    poster : string
}

export const  convertEmbla = (data : any[]) : EmblaData[] => {
    const newdata = data.map((item : any) => {
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

