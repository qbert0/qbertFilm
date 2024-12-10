export interface Authors {
    name : string
    userName : string
    avatar : string
    rating : number
}

export interface ReviewData {
    author?: string,
    authorDetail: Authors
    content : string,
    createAt : string,
    id? : string,
    url? : string,
    sentiment? : "negative" | "positive"
}

const convetAuthor = (data? : any) : Authors => {
    const newdata: Authors = {
        name : data? data.name : "qbert",
        userName : data? data.username : "qbert",
        avatar : data? data.avatar_path : "",
        rating : data? data.rating :"0"
    }
    return newdata
}


export const convertReview = (data : any[]) : ReviewData[] => {
    const newData : ReviewData[] = data.map((item : any) => {
        return {
            author : item.author,
            authorDetail: convetAuthor(item.author_details),
            content : item.content,
            createAt : item.created_at,
            id : item.id,
            url : item.url

        }
    })

    return newData
}

export const convertReviewMe = (data : any[]) : ReviewData[] => {
    const newData : ReviewData[] = data.map((item: any) => {
        return {
            author: "me",
            content:item['content'],
            sentiment: item['sentiment'],
            createAt: item['created_at'],
            authorDetail: convetAuthor()
        }
    })

    return newData
}

function formatDate(dateString : string) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
}