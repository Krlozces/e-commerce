import { NavLink } from "react-router-dom"
import ImageTable from "./ImageTable"
export default function Content({ mainText, subText, button1, link1, button2, link2 }) {
    return (
        <>
            <section className="my-6 border lg:border-none p-4 w-full grid grid-cols-[minmax(400px,_1fr)_1fr] gap-4">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-2xl text-center lg:text-left pl-16 py-2">
                        {mainText}
                    </h1>
                    <h2 className="font-medium text-center lg:text-left pl-16 py-4">
                        {subText}
                    </h2>
                    <div className="flex flex-col text-center justify-center lg:justify-evenly lg:flex-row">
                        <NavLink to={link1} className="bg-white font-semibold py-2 px-4 my-2 border shadow hover:bg-slate-200">{button1}</NavLink>
                        <NavLink to={link2} className="bg-white font-semibold py-2 px-4 my-2 border shadow hover:bg-slate-200">{button2}</NavLink>
                    </div>
                </div>
                <ImageTable />
            </section>
        </>
    )
}
