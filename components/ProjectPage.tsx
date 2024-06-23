import Image from "next/image";
import FeaturesList, { Feature } from "./FeatureList";

export default function ProjectPage({ data }: {
    data: {
        projectImage: string,
        projectName: string,
        projectType: string,
        techStack: string,
        year: number,
        description: string,
        githubLink: string,
        hostedLink: string,
        feature: any,
    }
}
) {
    return (
        <div className="container px-5 lg:px-48 mb-10 mx-auto space-y-8 text-center lg:text-left">
            <div className="space-y-4">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-500">
                    {data.projectName}
                </p>
                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3">
                    <p className="uppercase text-lg md:text-xl bg-blue-500 hover:bg-blue-800 transition duration-300 rounded-xl text-white px-4 py-2">
                        {data.projectType}
                    </p>
                    <p className="uppercase text-lg md:text-xl rounded-xl text-green-300 transition duration-300 hover:text-green-500 px-4 py-2">
                        {data.techStack}
                    </p>
                </div>
            </div>

            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image
                    src={data.projectImage}
                    alt={`${data.projectName} Image`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                />
            </div>

            <div className="space-y-10">
                <p className="text-2xl md:text-3xl">
                    {data.description}
                </p>
                <section className="text-lg md:text-xl space-y-8">
                    <FeaturesList features={data.feature} />
                </section>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
                {data.githubLink && (
                    <a
                        href={data.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg md:text-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                        View on GitHub
                    </a>
                )}
                {data.hostedLink && (
                    <a
                        href={data.hostedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg md:text-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Visit Website
                    </a>
                )}
            </div>
        </div>
    );
}
