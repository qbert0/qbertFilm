
export interface SearchData {
    path : string,
    name : string,
    id : string ,
}

export const convertSearchData = (data : any[], quan : number) => {
    const newData : SearchData[] = []
    data.forEach((item) => {
        if (!item.poster_path) return
        if (newData.length >= quan ) return 
        const movie : SearchData = {
            path : item.poster_path,
            name : item.original_title,
            id : item.id
        }
        newData.push(movie)
    })
    return newData
}

// export const convertSearchMovie = (data : any[]) : 