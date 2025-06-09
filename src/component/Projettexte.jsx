export const ProjetTexteSeul = ({ title, description, image, alt, link, linktext}) => {
  return (
    <section className="p-6 bg-blanc rounded-lg mx-6 w-full max-w-4xl mt-6 dark:bg-blancDark dark:text-white">
      <h2 style={{ fontFamily: 'Roboto Mono' }} className="text-xl font-semibold mb-2">{title}</h2>
                  <div>
            <p>{description}</p>
            {link ? (
                <a href={link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{linktext}</a>
            ) : null}
            </div>
      <img src={image} alt={alt} className="w-full mt-4 rounded-lg" />
    </section>
  );
};
