import { Titre } from "../component/Titre";

const LegalMentions = () => {
    return (
      <div style={{ fontFamily: 'Roboto'}} className="min-h-screen bg-gray-300 font-sans flex flex-col justify-center items-center p-6">
        <main className="text-center w-full max-w-3xl">
          <Titre title={"Mentions Légales"}/>
          
          <section className="bg-white p-6 rounded-lg shadow-lg text-left space-y-6">
            <div>
              <h2 className="text-xl font-semibold">1. Éditeur du site</h2>
              <p>Nom : Cisterne Yrieix</p>
              <p>Statut : Étudiant en Bachelor de Chefs de Projets Digitaux</p>
              <p>Adresse mail : ycisterne@normandiewebschool.fr</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">2. Propriété intellectuelle</h2>
              <p>
                Les contenus présents sur ce site (textes, images, graphismes, logos, vidéos, etc.) sont protégés
                par les lois relatives à la propriété intellectuelle.
              </p>
              <p>
                Si vous êtes l’auteur d’une image et que vous estimez que son utilisation sur ce site
                n’est pas conforme à vos droits, veuillez me contacter.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">3. Responsabilité</h2>
              <p>L’éditeur du site décline toute responsabilité concernant :</p>
              <ul className="list-disc pl-6">
                <li>Les éventuelles erreurs ou omissions dans les contenus publiés.</li>
                <li>Les dommages causés à l’utilisateur en raison de l’accès ou de l’utilisation du site.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">4. Liens externes</h2>
              <p>
                Le site peut contenir des liens hypertextes vers d’autres sites Internet. L’éditeur du site
                ne peut être tenu responsable du contenu de ces sites.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">5. Données personnelles</h2>
              <p>Ce site ne collecte aucune donnée personnelle et ne possède aucun cookie.</p>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default LegalMentions;
  