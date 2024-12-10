import h1 from "@/public/icon/h1.png"
import h2 from "@/public/icon/h2.png"
import h3 from "@/public/icon/h3.png"
import h4 from "@/public/icon/h4.png"
import h5 from "@/public/icon/h5.png"
import h6 from "@/public/icon/h6.png"
import i1 from "@/public/icon/i1.png"
import i3 from "@/public/icon/i3.png"
import i4 from "@/public/icon/i4.png"
import i6 from "@/public/icon/i6.png"
import s1 from "@/public/icon/s1.png"
import s2 from "@/public/icon/s2.png"
import s3 from "@/public/icon/s3.png"
import s4 from "@/public/icon/s4.png"
import sad1 from "@/public/icon/sad1.png"
import sad2 from "@/public/icon/sad2.png"
import sad3 from "@/public/icon/sad3.png"
import sad4 from "@/public/icon/sad4.png"
import sad5 from "@/public/icon/sad5.png"
import sad6 from "@/public/icon/sad6.png"
import d1 from "@/public/icon/d1.png"
import d2 from "@/public/icon/d2.png"
import d3 from "@/public/icon/d3.png"
import d4 from "@/public/icon/d4.png"
import af1 from "@/public/icon/af1.png"
import af2 from "@/public/icon/af2.png"
import af3 from "@/public/icon/af3.png"
import af4 from "@/public/icon/af4.png"
import { StaticImageData } from "next/image"

export interface Mood {
    mood : string | StaticImageData
}
export interface MoodShopda {
    name : string
    sub : Mood[]
}

export const shop : MoodShopda[] = [
    {
        name : "Happy",
        sub : [
            {
                mood : h1 
            },
            {
                mood : h2
            },
            {
                mood : h3 
            },
            {
                mood : h4
            },
            {
                mood : h5 
            },
            {
                mood : h6
            }
            
        ]
    },
    {
        name : "Interested",
        sub : [
            {
                mood : i1
            },
            {
                mood : i3
            },
            {
                mood : i4
            },
            {
                mood : i6
            }
        ]
    },
    {
        name : "Surprised",
        sub : [
            {
                mood : s1
            },{
                mood : s2
            },
            {
                mood : s3
            },{
                mood : s4
            },
        ]
    },
    {
        name : "Sad",
        sub : [
            {
                mood : sad1
            },
            {
                mood : sad2
            },
            {
                mood : sad3
            },
            {
                mood : sad4
            },
            {
                mood : sad5
            },
            {
                mood : sad6
            },
        ]
    },
    {
        name : "Disgusted",
        sub : [
            {
                mood : d1
            },
            {
                mood : d2
            },
            {
                mood : d3
            },
            {
                mood : d4
            },
        ]
    },
    {
        name : "Afraid" ,
        sub : [
            {
                mood : af1
            },
            {
                mood : af2
            },
            {
                mood : af3
            },
            {
                mood : af4
            },
        ]
    }
]

