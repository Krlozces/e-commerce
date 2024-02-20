import ImageTable from "./ImageTable"
export default function Content({ mainText, subText, button1, link1, button2, link2 }) {
    return (
        <>
            <section className="w-full grid grid-cols-[minmax(400px,_1fr)_1fr] gap-4">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-2xl text-left pl-16 py-2">
                        {mainText}
                    </h1>
                    <h2 className="font-medium text-left pl-16 py-4">
                        {subText}
                    </h2>
                    <div className="flex justify-evenly">
                        <a href={link1} className="bg-white font-semibold py-2 px-4 border shadow hover:bg-slate-200">{button1}</a>
                        <a href={link2} className="bg-white font-semibold py-2 px-4 border shadow hover:bg-slate-200">{button2}</a>
                    </div>
                </div>
                <ImageTable />
            </section>
        </>
    )
}
