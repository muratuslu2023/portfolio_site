import { Helmet } from 'react-helmet-async';

const About = () => {

  return (
    <>

        <Helmet>
            <title>About | Murat Uslu</title>
            <meta name="description" content="Boğaziçi CMPE student specializing in low-level systems." />
        </Helmet>

        <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        <p className="mt-4 text-slate-400">CMPE student at Boğaziçi University...</p>
        </main>
    
    </>

  );
};

export default About;