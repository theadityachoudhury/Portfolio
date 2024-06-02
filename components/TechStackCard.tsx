import Image from "next/image"

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
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-9">
                {categoryData.map((data, index) => (
                    <div className="flex gap-2 bg-gray-900 p-2 rounded-lg">
                        <div className="bg-gray-700 p-1 rounded-md">
                            <Image src={data.icon} alt="C" width={50} height={50} /> {/* Icon */}
                        </div>
                        <div>
                            <p className="text-2xl p-2">{data.name}</p> {/* Name */}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}