
export interface People {
    adult : string | null,
    alsoKnowAs : string[],
    biography : string,
    birday : string,
    deathday : string | null,
    gender : number,
    id : string,
    name : string,
    profilePath : string,
    knowFor : string[],
    placeOfBirth : string[]
}

export interface MovieCast {
    id : string,
    path : string,
    name : string,
}

export interface PeopleCast {
    id : string,
    path : string,
    year : number,
    name : string,
    char : string,
}

export interface Recode {
    year : number,
    people : PeopleCast,
}


export const filterActorsByYear = (actors: PeopleCast[]): Record<number, PeopleCast[]> => {

    return actors.reduce<Record<number, PeopleCast[]>>((acc, actor) => {
        // Nếu năm đã tồn tại trong accumulator, thêm tên vào mảng
        if (!acc[actor.year]) {
            acc[actor.year] = []; // Khởi tạo mảng nếu chưa tồn tại
        }
        acc[actor.year].push(actor);
        return acc;
    }, {});
};

export const convertPeopleCast = (data : any[]) : PeopleCast[] => {
    const newData : PeopleCast[] = data.map((item : any) => {
        return {
            id : item.id,
            year :  getYearFromDate(item.release_date),
            name : item.title,
            char : item.character,
            path : item.backdrop_path,
        }
    })

    return newData
}



export const convertMovieCast = (data : any) : MovieCast[] => {
    const newdata : MovieCast[] = data.cast.map((item : any) => {
        return {
            id : item.id,
            path : item.poster_path,
            name : item.original_title
        }
    }) 
    return newdata
}
export const convertPeople = (data : any) : People => {
    const newData : People =  {
            adult : data.adult,
            alsoKnowAs : data.also_known_as,
            biography : data.biography,
            birday : data.birthday,
            deathday : data.deathday,
            gender : data.gender,
            id : data.id,
            knowFor : data.known_for_department,
            name : data.name,
            profilePath : data.profile_path,
            placeOfBirth : data.place_of_birth
    }
    return newData
}

function getYearFromDate(dateString: string): number {
    const year = dateString.split('-')[0]; // Tách chuỗi và lấy phần năm
    const yearNumber = parseInt(year, 10);
    return yearNumber;
}