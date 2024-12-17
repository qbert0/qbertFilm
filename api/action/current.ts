import instance, { FAVORITE, TOKEN, WATCHLIST } from "../axios"


export const getWatchlist =async () => {
    try {
        const list = await instance.get(`${WATCHLIST}`, {
            headers : {
                Authorization : `Bearer ${TOKEN}` ,
                Accept: 'application/json'
            }
        })
        return list
    } catch {
        return 'error'
    }
}

export const getFavorite =async () => {
    try {
        const list = await instance.get(`${FAVORITE}`, {
            headers : {
                Authorization : `Bearer ${TOKEN}` ,
                Accept: 'application/json'
            }
        })
        return list
    } catch {
        return 'error'
    }
}

export const postAddWatchlist = async (id : string) => {
    try {
        await instance.post(`account/21674007/watchlist`, {
           "media_type": "movie",
            "media_id": id,
            "watchlist": true 
        }, {
            headers : {
                Authorization : `Bearer ${TOKEN}` ,
                Accept: 'application/json'
            }
        })
    } catch {
        return 'error'
    }
}

export const postClearWatchlist = async (id : string) => {
    try {
        await instance.post(`account/21674007/watchlist`, {
           "media_type": "movie",
            "media_id": id,
            "watchlist": false 
        }, {
            headers : {
                Authorization : `Bearer ${TOKEN}` ,
                Accept: 'application/json'
            }
        })
    } catch {
        return 'error'
    }
}

export const postAddFavorite = async (id : string) => {
    try {
        await instance.post(`account/21674007/favorite`, {
           "media_type": "movie",
            "media_id": id,
            "favorite": true 
        }, {
            headers : {
                Authorization : `Bearer ${TOKEN}` ,
                Accept: 'application/json'
            }
        })
    } catch {
        return 'error'
    }
}

export const postClearFavorite = async (id : string) => {
    try {
        await instance.post(`account/21674007/favorite`, {
           "media_type": "movie",
            "media_id": id,
            "favorite": false 
        }, {
            headers : {
                Authorization : `Bearer ${TOKEN}` ,
                Accept: 'application/json'
            }
        })
    } catch {
        return 'error'
    }
}