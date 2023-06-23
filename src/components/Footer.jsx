import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<div className="w-full p-5">
			<ContactForm />
			<ul className="flex flex-col gap-y-2 my-10 text-rose-950">
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
			<hr className="mx-5 border-rose-200" />
			<ul className="flex gap-x-2 pt-2 text-rose-950 text-[10px]">
				<li>
					<Link href="/terminos-y-condiciones">
						Terminos y Condiciones
					</Link>
				</li>
				<li>
					<Link href="/Politica de privacidad">
						Politica de privacidad
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Footer;

function ContactForm() {
	return (
		<form
			className="overflow-hidden rounded shadow shadow-slate-200 bg-rose-50"
			action="/api/contact"
			method="post">
			<input
				placeholder="Correo Electrónico"
				type="text"
				className="block text-lg w-full border-none py-2 px-3 bg-transparent text-rose-950 outline-rose-900"
			/>
			<hr className="mx-3 border-rose-200" />
			<input
				placeholder="Nombre completo"
				type="text"
				className="block text-lg w-full border-none py-2 px-3 bg-transparent text-rose-950 outline-rose-900"
			/>
			<button type="submit" className="bg-fuchsia-900 w-full py-3">
				¡Contactenme!
			</button>
		</form>
	);
}
