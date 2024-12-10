
export interface Cast {
    adult: boolean,
    gender: number,
    id: string,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: string,
    character: string,
    credit_id: string,
    order: string
}


export const convertListCast = (data : any[]) : Cast[] => {
    const newdata : Cast[] = data.map((item : any) => {
        return {
            adult: item.adult,
            gender: item.gender,
            id: item.id,
            known_for_department: item.known_for_department,
            name: item.name,
            original_name: item.original_name,
            popularity: item.popularity,
            profile_path: item.profile_path,
            cast_id: item.cast_id,
            character: item.character,
            credit_id: item.credit_id,
            order: item.order
        }
    })

    return newdata
}