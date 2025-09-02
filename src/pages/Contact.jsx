import { ContactUs } from "../component/Formulaire";
import { Titre } from "../component/Titre";

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Roboto'}}  className="min-h-[81vh] bg-fond dark:bg-fondDark font-sans flex flex-col items-center">


        <Titre title={"Pour me contacter"}/>
      <section className="flex flex-col sm:flex-row sm:items-center p-6 rounded-lg items-start gap-5 bg-blanc dark:bg-blancDark dark:text-white ">
        
        <ContactUs/>
        <p className="text-center sm:text-left">
        <a href="mailto:ycisterne@normandiewebschool.fr" className="text-blue-500 underline">ycisterne@normandiewebschool.fr</a>
        <br /><br />
        Actuellement sur Rouen
        </p>

      </section>
      </div>

  );
};

export default Contact;