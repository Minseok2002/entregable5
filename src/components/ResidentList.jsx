import { useEffect, useState } from "react";
import ResidenCard from "./ResidentCard";
import { paginationLogic } from "./utils/pagination";

const ResidentList = ({ residents }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { pages, residentsInCurrentPage } = paginationLogic(
        currentPage,
        residents
    );

    const handleNewPage = (newPage) => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        setCurrentPage(1);
        console.log("cambiaron los residentes");
    },[residents]);

    return (
        <section className=" max-w-[1000px] mx-auto">
            <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)] justify-center">
                {residentsInCurrentPage.map((resident) => (
                    <ResidenCard key={resident} residentURL={resident} />
                ))}
            </section>

            {/*pagination */}
            <ul className="flex justify-center p-4 gap-6 flex-wrap items-center">
                {pages.map((page) => (
                    <li key={page}>
                        <button
                            className={`${ currentPage === page
                                 && "bg-black text-white rounded-xl hover:bg-blue-400 transition-all uppercase hover:tracking-widest p-2"}`}
                            onClick={() => handleNewPage(page)}
                            >
                                {page}
                                </button>
                    </li>
                ))}
            </ul>
        </section>

    );
};
export default ResidentList;


//bg-green-800 text-white rounded-xl hover:bg-blue-500 transition-all uppercase hover:tracking-widest p-2