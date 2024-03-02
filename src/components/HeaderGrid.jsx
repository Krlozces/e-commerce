import Dropdown from "./Dropdown";

export default function HeaderGrid({ title }) {
    return (
        <>
            <div className="w-full my-4">
                <h1 className="uppercase font-bold text-2xl px-6 py-4">{ title }</h1>
                <div className="border-b-2 border-t-2 p-2 flex justify-between">
                    <button className="border px-4 mx-20">FILTERS</button>
                    {/* Dropdown */}
                    <Dropdown />
                </div>
            </div>
        </>
    )
}
