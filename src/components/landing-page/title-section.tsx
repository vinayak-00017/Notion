interface TitleSectionProps {
    title : string;
    subheading? : string;
    pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
    title,
    subheading,
    pill
}) => {
    return <React.Fragment>
        <section 
        className="flex
        flex-col
        gap-4
        justify-center
        items-start
        md:items-center
        ">
            <article 
             className="rounded-full
             p-[1px]
             text-sm
             dark:bg-gradient-to-r
             dark:
             ">
                <div className="rounded-full
                px-3
                py-1
                dark:bg-black
                "></div>
             </article>

        </section>
    </React.Fragment>
}