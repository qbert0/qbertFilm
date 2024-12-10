import instance, { API_KEY } from "@/api/axios"
import Link from "next/link"
import { FaCaretRight } from "react-icons/fa";
interface Props {
    movideId : string
    title : string
    status : string
    language : string
    revenue : number,
    budget : number,
    homepage : string
}

const SideBar = async ({movideId, title, status, language, revenue, budget, homepage} : Props) => {
    const key : any = await instance.get(`/movie/${movideId}/keywords${API_KEY}`)
    return (
        <div className="w-full flex flex-col gap-4 pt-4 mt-2">
            <div className=" flex justify-start mb-4 ">
                <Link href={homepage} className=" px-2 py-1 flex items-center bg-blue-400 text-white font-bold rounded-xl">
                    <FaCaretRight color="white" size={20} />Play now
                </Link >
            </div>
            <div>
                <div className="font-semibold mb-1">
                    Original title
                </div>
                <div>
                    {title}
                </div>
            </div>

            <div>
                <div className=" font-semibold mb-1">
                    Status
                </div>
                <div>
                    {status}
                </div>
            </div>
            <div>
                <div className=" font-semibold mb-1">
                    Original Language
                </div>
                <div>
                    {getLanguageName(language)}
                </div>
            </div>
            <div>
                <div className=" font-semibold mb-1">
                 Budget
                </div>
                <div>
                    {formatCurrency(budget)}
                </div>
            </div>
            <div>
                <div className=" font-semibold mb-1">
                 Revenue
                </div>
                <div>
                    {formatCurrency(revenue)}
                </div>
            </div>
            <div>
                <div className=" font-semibold mb-1 pb-2 ">
                    Key word
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                    {
                        key.keywords.map((item : any , index : any ) => {
                            return (
                                <div key={index} className="px-2 py-1 bg-[#E5E5E5] rounded-xl">
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )

}

export default SideBar

function formatCurrency(amount: number): string {
    return `$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`;
}


function getLanguageName(code: string): string {
    const languageMap: { [key: string]: string } = {
        "en": "English",
        "vi": "Vietnamese",
        "fr": "French",
        "de": "German",
        "es": "Spanish",
        "ja": "Japanese",
        "zh": "Chinese",
        "ru": "Russian"
        // Thêm các mã ngôn ngữ khác nếu cần
    };

    return languageMap[code.toLowerCase()] || "Language not found";
}