const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-300 font-sans flex flex-col justify-center items-center">

      <main className="text-center p-6">
        <h1 className="bg-gray-700 text-white text-2xl font-bold py-4 rounded-lg">Pour me contacter</h1>
      </main>
      

      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 text-center">
        <p>
          <a href="mailto:ycisterne@normandiewebschool.fr" className="text-blue-500 underline">Me contacter par mail</a>
          <br />
          <span id="tel" className="relative top-6 block font-semibold">Mon Téléphone: 06 18 03 13 27</span>
          <br /><br />
          Je suis actuellement sur Rouen
        </p>
      </section>
    </div>
  );
};

export default Contact;