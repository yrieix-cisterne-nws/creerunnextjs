export const Titre = ({title}) => {
    return(
        <main className="text-center p-6 flex justify-center">
        <h1 style={{fontFamily: 'Roboto Mono'}} className=" bg-gray-700 text-white text-2xl font-bold py-4 px-4 rounded-lg">{title}</h1>
        </main>
    )
}