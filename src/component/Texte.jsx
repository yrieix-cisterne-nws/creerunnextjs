export const Texte = ({description, link, linktext}) => {
    return(
        <div className="mx-auto background_text p-5 mt-4 bg-blanc dark:bg-blancDark dark:text-white rounded-[25px] mb-5 max-w-7xl">
        <p>{description}</p>
            {link ? (
                <a href={link} className="text-blue-500 underline" rel="noopener noreferrer">{linktext}</a>
            ) : null}
            </div>
    )
}