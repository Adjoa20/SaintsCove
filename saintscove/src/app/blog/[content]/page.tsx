import Image from "next/image";
import { getBlog, urlFor } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Navbar from "../../../../components/NavBar";
import Link from "next/link";

interface Blog {
    name: string;
    description: string;
    content: any;
    image?: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        }
    }
}

type Props = {
    params: { content: string }
}

export default async function Blog({ params }: Props) {
    const slug = params.content;

    const content = await getBlog(slug);

    return (
        <div className="bg-connectbg bg-cover bg-fixed w-full h-full flex flex-col items-center">
            <Navbar />
            <div className="md:px-20 mt-32 flex flex-col items-center"> {/* Increased mt-32 for more spacing */}
                <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-8">
                    <div className="flex flex-col md:flex-row gap-6 bg-[#ebe5d8] rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-300">
                        <div className="w-full md:w-1/2 group relative overflow-hidden rounded-tl-md rounded-bl-md">
                            {content.image && (
                                <div style={{ width: '100%', paddingBottom: '100%', position: 'relative' }}>
                                    <Image
                                        src={urlFor(content.image)}
                                        alt={content.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center py-4 px-1"> {/* Removed unnecessary items-start and gap-2 */}
                            <h2 className="text-2xl font-semibold hover:text-orange-300 duration-200 cursor-pointer">{content?.name}</h2>
                            <PortableText value={content.content} />
                            <p className="text-black/100">{content?.description}</p>
                        </div>
                    </div>
                    <div>
                        <Link href="/connect" className="flex mb-4 lg:mt-0 text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-center text-3xl text-right animate-pulse uppercase subpixel-antialiased">Back To The Connect Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


