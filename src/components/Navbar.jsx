import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
	return (
		<div className="absolute z-40 w-navbar max-w-screen-xl top-0 left-0 right-0 mx-auto lg:fixed">
			<div className="flex items-center mx-auto mt-3 px-5 py-2 bg-slate-50 w-full max-w-none shadow-sm shadow-slate-400 rounded lg:py-4">
				<div className="text-md font-semibold basis-1/2 text-fuchsia-950">
					<Link
						href="/"
						className="flex items-center gap-x-2 lg:text-xl">
						<Image
							className="max-w-full w-12 h-auto lg:w-16"
							src={'/img/gg_logo.png'}
							width={256}
							height={128}
							alt="logo"
						/>
						Marketing
					</Link>
				</div>
				<div className="basis-1/2">
					<div className="ml-auto w-min space-y-1">
						<span className="block w-8 h-1 bg-fuchsia-950"></span>
						<span className="block w-8 h-1 bg-fuchsia-950"></span>
						<span className="block w-8 h-1 bg-fuchsia-950"></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
