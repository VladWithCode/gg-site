import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-slate-200">
			{/* NavBar */}
			<div className="fixed w-navbar max-w-screen-2xl top-0 left-0 right-0 mx-auto">
				<div className="flex items-center mx-auto mt-3 px-5 py-2 bg-slate-50 w-full max-w-none shadow-sm shadow-slate-300 rounded">
					<div className="flex items-center text-md font-semibold gap-x-2 basis-1/2 text-fuchsia-950">
						<Image
							className="max-w-full w-12 h-auto"
							src={'/img/gg_logo.png'}
							width={256}
							height={128}
						/>
						Marketing
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
			<section className="pt-48 pb-5 px-5 w-full bg-purple-200 text-rose-900">
				<h1 className="text-6xl mb-16">Tu negocio en digital.</h1>
				<p className="w-[30ch] text-lg">
					Para ti que quieres expandir tus horizontes y alcanzar a
					todas las personas que te estan buscando. GG Marketing te
					sube a Internet.
				</p>
			</section>
			{/* <section className="py-5 px-5 w-full bg-slate-800 text-rose-50">
				<h1 className="text-2xl font-bold mb-4">¿El porqué?</h1>
				<p className="w-[35ch] text-lg">
					<span className="block text-uppercase text-2xl pb-2">
						La actualidad es el internet.
					</span>
					Por la facilidad, agilidad y comodidad que le ofrece al
					usuario, el Internet es el lugar en que tu negocio debe de
					estar.
				</p>
			</section> */}
			<section className="p-5 w-full bg-teal-800">
				<h1 className="relative text-2xl text-uppercase text-center font-semibold mb-10">
					Nuestros trabajos
					<div className="absolute top-full left-1/2 w-5 h-2 bg-rose-50 -translate-x-1/2 mt-2"></div>
				</h1>
				p.text-md
				<div className="py-5 flex flex-col items-center">
					<div className="relative w-fit shadow-sm shadow-slate-800 group overflow-hidden">
						<a
							target="_blank"
							href="https://elkilate.com.mx"
							className="w-full h-full">
							<Image
								className="w-80 h-auto mx-auto group-hover:scale-105 transition-transform duration-300"
								src="/img/site_1.webp"
								width={358}
								height={480}
							/>
							<div className="absolute left-0 top-0 p-3 bg-slate-950 bg-opacity-60 w-full h-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
								<p className="text-rose-50 no-underline text-2xl font-semibold m-auto">
									elkilate.com.mx
								</p>
							</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
