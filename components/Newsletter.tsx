// components/Newsletter.tsx
export default function Newsletter() {
  return (
    <section className="bg-hemmes-dark py-32 px-8 text-cloud-dancer text-center">
      <div className="max-w-2xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter">
          Join The Archive
        </h2>
        <p className="text-xs md:text-sm tracking-widest opacity-60 uppercase leading-relaxed">
          Receive priority access to seasonal drops, private atelier events, and editorial journals.
        </p>
        <div className="flex flex-col md:flex-row gap-4 pt-6">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="flex-1 bg-transparent border-b border-cloud-dancer/20 py-4 text-[10px] tracking-widest outline-none focus:border-cloud-dancer transition-all uppercase"
          />
          <button className="px-12 py-4 bg-cloud-dancer text-hemmes-dark text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}