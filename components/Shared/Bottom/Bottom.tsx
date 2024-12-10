
const Bottom = () => {

    return (
        <div className=" w-full bg-[#03233E] px-48 grid grid-cols-4 py-5 shadow-md">
            {
                infor.map((item, index) => {
                    return (
                        <div key={index} className=" col-span-1 text-white ">
                            <div className="font-bold ">
                                {item.name}
                            </div>
                            {
                                item.sub.map((items, indexs) => {
                                    return (
                                        <div key={indexs}>
                                            {items.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Bottom

const infor = [
    {
        name : "The Basics",
        sub : [
            {
                name : "TMDB"
            },
            {
                name : "Contact Us"
            },
            {
                name : "Support Forums"
            },
            {
                name : "API"
            },
            {
                name : "System Status"
            }
        ]
    },
    {
        name : "Get Involved",
        sub : [
            {
                name : "Contribution Bible"
            },
            {
                name : "Add new film"
            },
            {
                name : "Add new show TV"
            }
        ]
    },
    {
        name : "Community",
        sub : [
            {
                name : "Guidelines"
            },
            {
                name : "Discussions"
            },
            {
                name: "Leaderboard"
            }
        ]
    },
    {
        name : "Legal",
        sub : [
            {
                name : "Terms of Use"
            },
            {
                name : "API Terms of Use"
            },
            {
                name : "Privacy Policy"
            },
            {
                name: "DMCA Policy"
            }
        ]
    }
]