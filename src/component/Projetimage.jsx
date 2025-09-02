export const ProjetTexteImage = ({title, description, image, alt, download1, downloadtext, link, linktext}) => {
    return(
    <section className="p-6 bg-blanc rounded-lg mx-6 w-full max-w-4xl mt-6 mb-2 dark:bg-blancDark dark:text-white">
        <h2 style={{fontFamily: 'Roboto Mono'}} className="text-xl font-semibold mb-2">{title}</h2>
        <div className="md:grid md:grid-cols-2">
            <div>
            <p className="whitespace-pre-line">{description}</p>
            {link ? (
                <a href={link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{linktext}</a>
            ) : null}
            {download1 ? (
                <a href={download1} download={downloadtext} className="text-blue-500 underline">{downloadtext}</a>
            ) : null}
            </div>
            <img src={image} alt={alt} className="w-full mt-4 rounded-lg" />
        </div>
    </section>
    )
}
