import React from "react";

export interface Feature {
    title: string;
    details: string[];
}

const FeaturesList = ({ features }: { features: Feature[] }) => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold my-6 text-center sm:text-left">Features of CodeSync</h1>
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full bg-slate-900 border border-slate-800">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 text-left">Feature</th>
                            <th className="py-2 px-4 border-b border-gray-200 text-left">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className="hover:bg-slate-700">
                                <td className="py-2 px-4 border-b border-gray-200 font-medium text-indigo-500">
                                    {feature.title}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <ul className="list-disc pl-5 space-y-2">
                                        {feature.details.map((detail, detailIndex) => (
                                            <li key={detailIndex}>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="block md:hidden space-y-6">
                {features.map((feature, index) => (
                    <div key={index} className="bg-slate-900 p-4 rounded-lg">
                        <h2 className="text-xl font-medium text-indigo-500 mb-2">
                            {feature.title}
                        </h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesList;
