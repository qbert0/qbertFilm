
interface genres {
    id : string,
    name : string,
}
export interface Movie {
    image: string
    name : string
    date : string
    vote : number
    overView: string
    id : string
    voteCount : string
    poster : string
    tagline : string
    time : string
    genres : genres[]
    language : string
    status : string
    budget : number
    revenue : number
    homepage : string
}

export const  convertMovie = (data : any) : Movie=> {
    const newdata = {
        
            image : data.backdrop_path,
            name : data.original_title,
            date : data.release_date,
            vote : data.vote_average,
            overView : data.overview,
            id : data.id,
            voteCount : data.vote_count,
            poster : data.belongs_to_collection != null ? data.belongs_to_collection.poster_path : data.poster_path,
            tagline : data.tagline,
            time : data.time || data.runtime,
            genres : data.genres.map((item : any) => { return {
                id : item.id,
                name : item.name,
            }}),
            language : data.original_language,
            status : data.status,
            revenue : data.revenue,
            budget : data.budget,
            homepage : data.homepage,
      
    }

    return newdata
}