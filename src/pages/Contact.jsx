import { ContactUs } from "../component/Formulaire";
import { Titre } from "../component/Titre";

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Roboto'}}  className="min-h-screen bg-fond font-sans flex flex-col items-center">


        <Titre title={"Pour me contacter"}/>
      <section className="sm:flex flex p-6 bg-blanc rounded-lg text-center items-center">
        <ContactUs/>
        <p className="">
        <a href="mailto:ycisterne@normandiewebschool.fr" className="text-blue-500 underline">ycisterne@normandiewebschool.fr</a>
        <br /><br />
        Actuellement sur Rouen
        </p>

      </section>
      </div>

  );
};

export default Contact;