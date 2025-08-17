import me_img from "../../assets/me.jpg";

const IntroSection = () => {
    return (
        <section className="grid grid-cols-4 auto-rows-min mb-6">
            <div className="col-span-3 pr-8 md:pr-14 lg:pr-20">
                <h2 className="text-5xl mb-8 font-semibold">
                    Hello! My name is Jason Chow
                </h2>
                <div className="text-xl">
                    Recent graduate from Stony Brook University with an MS in Computer Science.
                    I primarily program in Python, but have used JavaScript and React.js recently.
                    Throughout the years, I've gained an interest in applied ML and NLP.
                    Currently incorporating C++ and Typescript into my repertoire.
                </div>
            </div>
            <img className="col-span-1 w-fit lg:max-w-75 mx-auto self-center"
                 src={me_img}
                 alt="Icon">
            </img>
        </section>
    )
}

export default IntroSection;
