
const Hero = () => {

  const text_gradient = "bg-gradient-to-l from-black via-slate-500 via-pink-600 to-black inline-block text-transparent pb-2 bg-clip-text";
  const hero_image_sample = "https://shorturl.at/uWjhU";

  return (
    <div className="mx-40 my-24 flex flex-col text-center justify-center items-center gap-8">

        <div className="p-2 border bg-muted">
            <p> simple. customisable. fast. </p>
        </div>

        <div className="space-y-2">
            <h1 className="text-7xl font-semibold tracking-tighter"> 
            <span className={`${text_gradient}`}> Supercharge </span> your SaaS </h1>
            <h1 className="text-7xl font-semibold"> with Snow </h1>
            <h3 className="text-xl text-subtitle"> Bring your ideas to Life, ASAP. Ship your idea in a day, without worrying about the setup. </h3>
        </div>

        <div>
            <button className="p-4 px-8 shadow-md bg-primary text-primary-foreground hover:shadow-gray-500/50"> Get Started </button>
        </div>

        <div className="p-16">
            <img src={hero_image_sample} 
            className="rounded-md shadow-lg hover:shadow-2xl h-2/3"/>
        </div>
    </div>
  )
}

export default Hero;