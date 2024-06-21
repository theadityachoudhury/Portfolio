import Image from "next/image";

export default function TechStackCard(
    { categoryName, categoryData }: {
        categoryName: string,
        categoryData: {
            name: string,
            icon: string
        }[]
    }
) {
    return (
        <div className="space-y-3 mt-10">
            <p className="text-2xl">
                {categoryName} {/* Category */}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {categoryData.map((data, index) => (
                    <div key={index} className="flex gap-2 bg-gray-900 p-2 rounded-lg items-center hover:bg-gray-800 fade-in duration-300">
                        <div className="flex-shrink-0 bg-gray-700 p-1 rounded-md">
                            <Image src={data.icon} alt={data.name} width={50} height={50} /> {/* Icon */}
                        </div>
                        <div className="flex-grow">
                            <p className="text-xl sm:text-2xl p-2">{data.name}</p> {/* Name */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
