import Image from 'next/image';
import React from 'react';

function SiteCard({ link, label, img, desc }) {
	return (
		<div className="w-80 group overflow-hidden hover:-translate-y-3 transition-transform duration-200">
			<a target="_blank" href={link} className="w-full relative">
				<Image
					className="w-full h-auto mx-auto shadow shadow-slate-800 group-hover:scale-105 transition-transform duration-300"
					src={img}
					width={358}
					height={480}
					alt={`${label} site`}
				/>
				<p className="absolute left-0 top-0 p-3 bg-slate-950 bg-opacity-60 w-full h-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
					<span className="text-rose-50 no-underline text-2xl font-semibold m-auto">
						{label}
					</span>
				</p>
			</a>
			<p className="text-xs font-bold text-rose-50 mt-2 px-1 mx-auto">
				{label}
				{desc?.length > 0 ? (
					<>
						:<span className="text-lg font-normal"> {desc}</span>
					</>
				) : null}
			</p>
		</div>
	);
}

export default SiteCard;
