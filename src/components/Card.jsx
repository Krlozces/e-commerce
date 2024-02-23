import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Card({  title, description, precio, image }) {
    return (
        <>
            <div className="max-w-sm relative overflow-hidden bg-gray-400 mx-2">
                <img className="w-full" src={image} alt={title} />
                <div className="px-2 py-4 relative bg-white">
                    <div className="mb-2"> {title} </div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                    <div className='flex justify-end'>
                        <button className="px-6 py-2 bg-slate-200 rounded hover:bg-slate-400" type="button">Add to cart</button>
                    </div>
                </div>
                <span className="absolute top-52 mx-2 my-4 py-2 px-4 bg-slate-200 rounded"> S/.{precio} </span>
                
                <a className="absolute top-4 right-6 m-2"> <FontAwesomeIcon icon={faHeart} /> </a>
            </div>
        </>
    )
}
