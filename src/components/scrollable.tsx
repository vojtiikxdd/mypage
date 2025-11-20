import A from "./better-elements/anchor";
import H1 from "./better-elements/heading-one";

export default function Scrollable() {
    return (
        <div className="h-auto p-2 px-8 md:max-w-[60%] w-full gap-10">
            <div className="flex flex-col gap-1 mt-4">
                <H1>My projects</H1>
                <p>None of my projects work right now, its just a sad story of good ideas</p>
                <section className="borderImage-gradient-r hover:bg-indigo-900 transition-all ease-in-out duration-200 p-3 rounded-xl">
                    <div className="flex gap-8 items-center">
                        <h2 className="font-bold text-lg">Notables</h2>
                        <A href="https://github.com/KoblizekXD/notables" name="Notables on github" />
                    </div>
                    <p className="pl-2 italic text-wrap">
                        The best project i have made. Created in <A href="https://nextjs.org" name="Next.js" /> <span className="text-wrap">It was a group project with <A href="https://github.com/KoblizekXD" name="Koblizek" /> and <A href="https://github.com/KebabObama" name="Lukáš Pražák" />.</span> The oficial purpose of this app is to create and share notes of Czech literature with others. My part was abbout painting and creating big part of the frontend for this app.
                    </p>
                </section>
                <section className="borderImage-gradient-r hover:bg-indigo-900 transition-all ease-in-out duration-200 p-3 rounded-xl">
                    <div className="flex gap-8 items-center">
                        <h2 className="font-bold text-lg">Flashcards</h2>
                        <A href="https://github.com/vojtiikxdd/Flashcards_w_v1" name="Flashcards on github" />
                    </div>
                    <p className="pl-2 italic">
                        Another group project, now with <A href="https://github.com/majko13" name="Mario" /> and <A href="https://github.com/T0miiik" name="Tomáš Slatinský" />. It didnt end well because of my bad leadership. Purpose of this app was to create nice goodlooking flashcards
                    </p>
                </section>
                <section className="borderImage-gradient-r hover:bg-indigo-900 transition-all ease-in-out duration-200 p-3 rounded-xl">
                    <div className="flex gap-8 items-center">
                        <h2 className="font-bold text-lg">Jump of bohemia</h2>
                        <A href="https://github.com/vojtiikxdd/Jump-of-Bohemia" name="Jump of Bohemia on github" />
                    </div>
                    <p className="pl-2 italic">
                        A Jump king - like game about a legend of Praotec Čech climbing mountain Říp. The game is not build well but runs and can be played.
                    </p>
                </section>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <H1>Tasks</H1>
                <p className="ml-2">no thanks, i use google calendar</p>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <H1>My photography</H1>
                <p className="ml-2">This part of my page will be made in future, for now, you can visit my <A href="https://www.instagram.com/lume_img/" name="Instagram" />.</p>
            </div>
        </div>
    );
}