import React from 'react';

const Dropdown = ({ handleRegionChange }) => {
	return (
		<div className="filterdropdown h-[50px] w-[200px] rounded-xl bg-white flex justify-start items-center p-[30px] relative text-darker-blue dark:bg-dark-blue dark:text-to-white group 1card:h-[70px] 1card:ml-[12.5px] 1card:mr-auto">
			Filter by Region
			<div className="dropdown-content hidden absolute bg-white w-[200px] z-[1] top-[60px] left-0 rounded-xl border border-solid border-[hsla(0,0%,100%,0.075)] dark:bg-dark-blue group-hover:block 1card:top-[75px]">
				<a
					className="block no-underline py-[15px] px-[30px] rounded-t-xl hover:bg-to-white dark:hover:bg-darker-blue dark:text-white"
					onClick={() => handleRegionChange(null)}
				>
					All
				</a>
				<a
					className="block no-underline py-[15px] px-[30px] hover:bg-to-white dark:hover:bg-darker-blue dark:text-white"
					onClick={() => handleRegionChange('Americas')}
				>
					Americas
				</a>
				<a
					className="block no-underline py-[15px] px-[30px] hover:bg-to-white dark:hover:bg-darker-blue dark:text-white"
					onClick={() => handleRegionChange('Asia')}
				>
					Asia
				</a>
				<a
					className="block no-underline py-[15px] px-[30px] hover:bg-to-white dark:hover:bg-darker-blue dark:text-white"
					onClick={() => handleRegionChange('Europe')}
				>
					Europe
				</a>
				<a
					className="block no-underline py-[15px] px-[30px] hover:bg-to-white dark:hover:bg-darker-blue dark:text-white"
					onClick={() => handleRegionChange('Africa')}
				>
					Africa
				</a>
				<a
					className="block no-underline py-[15px] px-[30px] rounded-b-xl hover:bg-to-white dark:hover:bg-darker-blue dark:text-white"
					onClick={() => handleRegionChange('Oceania')}
				>
					Oceania
				</a>
			</div>
		</div>
	);
};

export default Dropdown;
