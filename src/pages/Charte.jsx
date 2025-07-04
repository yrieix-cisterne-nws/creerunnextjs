import { Titre } from "../component/Titre";

const Charte = () => {
    return (
        <div style={{ fontFamily: 'Roboto'}} className="min-h-screen bg-fond dark:bg-fondDark font-sans flex flex-col items-center">
            <Titre title={"Comment le logo est formée ?"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-blanc dark:bg-blancDark dark:text-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
                <div><img src="/charte/logoycbw.jpg" alt="Logo Yrieix Cisterne"/></div>
                <div><p>Couleur : 
                    <ul className="list-disc list-inside">
                        <li>Noir #00000 (Couleur des lettres),</li>
                        <li>Blanc #FFFFF(background).</li>
                    </ul>
                </p>
                <p>Éléments graphiques : 
                    <ul className="list-disc list-inside">
                        <li>Les initiales YC qui représent les initiales de mon prénom Yrieix Cisterne,</li>
                        <li>Le rond qui forme aussi la lettre i grâce à la barre droite de la lettre Y.</li>
                    </ul>
                </p></div>
            </div>
            <Titre title={"Typographie"}/>
            <div className="p-6 bg-blanc dark:bg-blancDark dark:text-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
            <div style={{ fontFamily: 'Prata'}} className="flex justify-center"><p className="text-2xl whitespace-nowrap">Felix Tilting</p></div>
            <div style={{ fontFamily: 'Prata'}} className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tincidunt massa, in tempus ante.</div>
            </div>
            <Titre title={"Logo et ses variantes :"}/>
            <div className="p-6 bg-blanc dark:bg-blancDark dark:text-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div><img src="/charte/logoycbwt.jpg" alt="Logo Yrieix Cisterne horizontal nom"/><p>Logo horizontal avec le nom</p></div>
                <div><img src="/charte/logoycwb.jpg" alt="Logo Yrieix Cisterne Variante Noir"/><p>Logo avec les couleurs inversé</p></div>
            </div>
            </div>
            <Titre title={"Les interdits du logo"}/>
            <div className="p-6 bg-blanc dark:bg-blancDark dark:text-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div><img src="/charte/logoycbwtd.jpg" alt="Interdit logo texte déplacé"/><p>Interdiction de déplacé le texte</p></div>
                <div><img src="/charte/logoycbwc.jpg" alt="Interdit couleur modifié"/><p>Interdiction de modifié les couleurs</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="bg-fond dark:bg-fondDark dark:text-white"><img src="/charte/logoycno_bg.png" alt="Interdit logo sans fond"></img><p>Interdiction de ne pas avoir de fond</p></div>
                <div><img src="/charte/logoycbool.jpg" alt="Interdit la boule est tombé"></img><p>Interdiction de retirer la boule</p></div>
            </div>
            </div>
        </div>
    );
};

export default Charte;