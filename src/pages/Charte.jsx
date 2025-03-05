const Charte = () => {
    return (
        <div className="min-h-screen bg-gray-300 font-sans flex flex-col items-center">
            <div className="w-full bg-gray-700 text-white py-4 text-center font-bold text-2xl rounded-lg my-6">Comment le logo est formée ?</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
                <div><img src="/logoycbw.jpg" alt="Logo Yrieix Cisterne"/></div>
                <div><p>Couleur : 
                    <ul className="list-disc list-inside">
                        <li>Noir #00000 (Couleur des lettres),</li>
                        <li>Blanc #FFFFF(background).</li>
                    </ul>
                </p>
                <p>Éléments graphiques : 
                    <ul className="list-disc list-inside">
                        <li>Les initiales YC qui représent les initiales de mon prénom Yrieix Cisterne,</li>
                        <li>Le rond sur la boucle haut de la lettre C qui représente une boucle infinie.</li>
                    </ul>
                </p></div>
            </div>
            <div className="w-full bg-gray-700 text-white py-4 text-center font-bold text-2xl rounded-lg my-6">Typographie</div>
            <div className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
            <div className="flex justify-center"><p className="text-2xl whitespace-nowrap">Felix Tilting</p></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tincidunt massa, in tempus ante.</div>
            </div>
            <div className="w-full bg-gray-700 text-white py-4 text-center font-bold text-2xl rounded-lg my-6">Logo et ses variantes :</div>
            <div className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div><img src="/logoycbwt.jpg" alt="Logo Yrieix Cisterne horizontal nom"/><p>Logo horizontal avec le nom</p></div>
                <div><img src="/logoycwb.jpg" alt="Logo Yrieix Cisterne Variante Noir"/><p>Logo avec les couleurs inversé</p></div>
            </div>
            </div>
            <div className="w-full bg-gray-700 text-white py-4 text-center font-bold text-2xl rounded-lg my-6"><p>Les interdits du logo : </p></div>
            <div className="p-6 bg-white rounded-lg shadow-lg mx-6 w-full max-w-4xl mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div><img src="/logoycbwtd.jpg" alt="Interdit logo texte déplacé"/><p>Interdiction de déplacé le texte</p></div>
                <div><img src="/logoycbwc.jpg" alt="Interdit couleur modifié"/><p>Interdiction de modifié les couleurs</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div><img src="/logoycnbg.png" alt="Interdit logo sans fond"></img><p>Interdiction de ne pas avoir de fond</p></div>
                <div><img src="/logoycbool.jpg" alt="Interdit la boule est tombé"></img><p>Interdiction de retirer la boule</p></div>
            </div>
            </div>
        </div>
    );
};

export default Charte;