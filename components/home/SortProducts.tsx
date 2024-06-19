"use client";

import React, { useState } from "react";
import IconArrowDown from "../icons/IconArrowDown";
import Link from "next/link";
import IconPlus from "../icons/IconPlus";
import { PRODUCT_SORT_LIST } from "@/constants";
import SortProductsCard from "../cards/SortProductsCard";
import AddFeedbackLink from "../buttons/AddFeedbackLink";

function SortProducts() {
	const [activeSortItem, setActiveSortItem] = useState<string>(
		PRODUCT_SORT_LIST[0]
	);
	const [sortModalOpen, setSortModalOpen] = useState(false);

	return (
		<div className='flex justify-between items-center bg-dark-1 px-6 py-2 md:rounded-lg'>
			<div className='relative'>
				<button
					className='flex items-center gap-1 font-bold text-7 text-light-1 whitespace-nowrap hover:text-light-3 transition duration-300'
					onClick={() => setSortModalOpen(prev => !prev)}>
					<span className='font-normal text-light-3'>Sort by:</span> 
                    {activeSortItem}
                    <div className={`${sortModalOpen ? "rotate-180" : "rotate-0"} transition-all duration-300`}>
                        <IconArrowDown />
                    </div>
				</button>

				<ul
					className={`flex flex-col absolute top-12 left-0 bg-light-1 w-[250px] rounded-lg ${
						sortModalOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					} transition-all duration-300`}>
					{PRODUCT_SORT_LIST.map(item => {
						return (
							<SortProductsCard
								key={item}
								sortItem={item}
								activeSortItem={activeSortItem}
								setActiveSortItem={setActiveSortItem}
								setSortModalOpen={setSortModalOpen}
							/>
						);
					})}
				</ul>
			</div>

			<AddFeedbackLink />
		</div>
	);
}

export default SortProducts;
