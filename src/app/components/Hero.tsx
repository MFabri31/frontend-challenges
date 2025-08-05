import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full px-4 py-20 bg-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          ¡Hola, humanos! 👋 Bienvenidos.
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          En esta web encontrarás una colección de desafíos{" "}
          <span className="font-bold">Frontend</span> desarrollados por mí,
          inspirados en situaciones reales que se encuentran en plataformas como{" "}
          <Link
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            Frontend Mentor
          </Link>{" "}
          y
          <Link
            href="https://devchallenges.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            {" "}
            devChallenges.io
          </Link>{" "}
          Cada proyecto es parte de un proceso de aprendizaje continuo para
          seguir perfeccionando mis habilidades técnicas y creativas en
          Desarrollo web.
        </p>
      </div>
    </section>
  );
};

export default Hero;
