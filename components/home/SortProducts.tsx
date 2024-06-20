"use client";

import React, { useState } from "react";
import IconArrowDown from "../icons/IconArrowDown";
import { PRODUCT_SORT_LIST } from "@/constants";
import SortProductsCard from "../cards/SortProductsCard";
import AddFeedbackLink from "../buttons/AddFeedbackLink";
import IconSuggestions from "../icons/IconSuggestions";

function SortProducts() {
	const [activeSortItem, setActiveSortItem] = useState<string>(
		PRODUCT_SORT_LIST[0]
	);
	const [sortModalOpen, setSortModalOpen] = useState(false);

	return (
		<div className='flex justify-between items-center bg-dark-1 px-6 py-2 md:rounded-lg'>
			<div className='flex gap-10'>
				<div className="hidden md:flex items-center gap-3">
					<IconSuggestions />
					<span className="text-3 font-bold text-light-1">0 Suggestions</span>
				</div>

				<div className="relative flex items-center">
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
						className={`flex flex-col absolute top-12 left-0 bg-light-1 w-[250px] rounded-lg shadow-lg ${
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
			</div>

			<AddFeedbackLink />
		</div>
	);
}

export default SortProducts;
