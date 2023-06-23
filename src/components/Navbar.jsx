import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
	const [isMenuActive, setIsMenuActive] = useState(false);

	return (
		<div className="absolute z-40 w-navbar max-w-screen-xl top-0 left-0 right-0 mx-auto lg:fixed">
			<div className="relative flex items-center mx-auto mt-3 px-5 py-2 bg-slate-50 w-full max-w-none shadow-sm shadow-slate-400 rounded lg:py-4">
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
				<div className="w-0 lg:w-auto"></div>

				<div className="basis-1/2 overflow-hidden lg:w-0">
					<div
						className="ml-auto w-min space-y-1"
						role="button"
						onClick={() => setIsMenuActive(state => !state)}>
						<span className="block w-8 h-1 bg-fuchsia-950"></span>
						<span className="block w-8 h-1 bg-fuchsia-950"></span>
						<span className="block w-8 h-1 bg-fuchsia-950"></span>
					</div>
				</div>

				<ul
					className={`absolute py-4 text-2xl top-10 left-0 right-0 flex flex-col justify-center items-center gap-y-4 bg-slate-50 text-rose-950 rounded-bl rounded-br transition-opacity duration-300 ${
						isMenuActive
							? 'opacity-100 pointer-events-auto'
							: 'opacity-0 pointer-events-none'
					}`}>
					<li>
						<Link href="#start">Inicio</Link>
					</li>
					<li>
						<Link href="#sites">Portafolio</Link>
					</li>
					<li>
						<Link href="#sites">Sobre nosotros</Link>
					</li>
					<li>
						<Link href="#service">Nuestro servcio</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
