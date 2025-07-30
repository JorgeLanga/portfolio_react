

import { contactDetails } from "../types/details";

export const Contact=()=> {
  const { email, phone } = contactDetails;
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 px-4 py-16">
      <section className="w-full max-w-lg bg-black bg-opacity-80 rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center tracking-wide">Entre em Contacto</h1>
        <p className="text-gray-300 text-center mb-8">Fique à vontade para enviar uma mensagem, sugestão ou proposta!</p>
        <div className="w-full flex flex-col gap-6 mb-8">
          <a href={`mailto:${email}`} className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 transition-colors text-white py-3 px-5 rounded-lg shadow-lg font-semibold justify-center">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v15h23.98v-15l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z"/></svg>
            {email}
          </a>
          <a href={`tel:${phone}`} className="flex items-center gap-3 bg-green-700 hover:bg-green-800 transition-colors text-white py-3 px-5 rounded-lg shadow-lg font-semibold justify-center">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1.003 1.003 0 01-.21 1.11l-2.2 2.2z"/></svg>
            {phone}
          </a>
        </div>
        <div className="flex gap-6 text-2xl mb-6">
          <a href="https://github.com/JorgeLanga" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/jorge-langa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </a>
        </div>
        <div className="w-full mt-4">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Seu nome" className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" placeholder="Seu email" className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea placeholder="Sua mensagem" rows={4} className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg">Enviar Mensagem</button>
          </form>
        </div>
      </section>
    </main>
  );
}

