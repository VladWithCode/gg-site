import Image from 'next/image';
import { Inter } from 'next/font/google';
import SiteCard from '@/components/SiteCard';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

const sites = [
	{
		link: 'https://elkilate.com.mx',
		label: 'elkilate.com.mx',
		img: '/img/site_1.webp',
		desc: 'Sitio de venta en linea de Joyeria',
	},
	{
		link: 'https://langavi.com',
		label: 'langavi.com',
		img: '/img/site_2.webp',
	},
	{
		link: 'https://mcad.edu/',
		label: 'mcad.edu',
		img: '/img/site_3.webp',
	},
	{
		link: 'https://redbrick.coffee/',
		label: 'redbrick.coffe',
		img: '/img/site_4.webp',
	},
];

export default function Home() {
	return (
		<div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto ">
			<div className="max-w-[1400px] shadow-content shadow-slate-300 mx-auto">
				<section className="pt-40 pb-12 px-5 w-full bg-purple-200 text-rose-900 lg:px-20 lg:pt-96">
					<h1 className="text-5xl mb-16 lg:text-8xl">
						Tu negocio en digital.
					</h1>
					<p className="w-[30ch] text-lg lg:text-2xl">
						Para ti que quieres expandir tus horizontes y alcanzar a
						todas las personas que te estan buscando. GG Marketing
						te sube a Internet.
					</p>
				</section>
				<section className="p-5 w-full bg-teal-800">
					<h1 className="text-2xl text-uppercase text-center font-semibold mb-4">
						Nuestros trabajos
					</h1>
					<p className="relative text-md text-center mb-10">
						Conoce los sitios web que hemos creado.
						<span className="block absolute top-full left-1/2 w-5 h-2 bg-rose-50 -translate-x-1/2 mt-2"></span>
					</p>
					<Gallery sitesData={sites} />
				</section>
			</div>
		</div>
	);
}

function Gallery({ sitesData }) {
	return (
		<div className="py-5 flex flex-col items-center gap-y-12">
			{sitesData.map(site => (
				<SiteCard {...site} key={site.link} />
			))}
		</div>
	);
}
