import { Titre } from "../component/Titre";

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Roboto'}}  className="min-h-screen bg-gray-300 font-sans flex flex-col items-center">


        <Titre title={"Pour me contacter"}/>
      <section className="p-6 bg-white rounded-lg shadow-lg mx-6 text-center">
        <p>
          <a href="mailto:ycisterne@normandiewebschool.fr" className="text-blue-500 underline">Me contacter par mail</a>
          <br /><br />
          Je suis actuellement sur Rouen
        </p>
      </section>
    </div>
  );
};

export default Contact;