import Head from "next/head";
import Link from "next/link";

const name = "Diki Hamdani";
export const siteTitle = "Belajar Next.JS";

export default function Layout({ children, home }) {
  return (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />

            <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />

            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header>
        {home ? (
            <>
                <nav id="header" class="fixed w-full z-10 bg-white shadow-md top-0">
                    <div id="progress" class="h-1 z-20 top-0 navscroll"></div>
                    <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                        <div class="pl-4">
                            <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
                                Diki Hamdani
                            </a>
                        </div>

                        <div class="block lg:hidden pr-4">
                            <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
                                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>

                        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
                            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                                <li class="mr-3 list-none">
                                    <a class="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Home</a>
                                </li>
                                <li class="mr-3 list-none">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">About</a>
                                </li>
                                <li class="mr-3 list-none">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        ) : (
            <>
                <nav id="header" class="fixed w-full z-10 bg-white shadow-md top-0">
                    <div id="progress" class="h-1 z-20 top-0 navscroll"></div>
                    <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                        <div class="pl-4">
                            <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
                                Diki Hamdani
                            </a>
                        </div>

                        <div class="block lg:hidden pr-4">
                            <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
                                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>

                        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
                            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                                <li class="mr-3 list-none">
                                    <a class="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Home</a>
                                </li>
                                <li class="mr-3 list-none">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">About</a>
                                </li>
                                <li class="mr-3 list-none">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )}
        </header>

        <main className="container w-full md:max-w-3xl mx-auto pt-20">{children}</main>

        {/* {!home && (
            
        )} */}

        <footer class="bg-white border-t border-gray-400 shadow">
            <div class="container max-w-4xl mx-auto flex py-8">

                <div class="w-full mx-auto flex flex-wrap">
                    <div class="flex w-full md:w-1/2 ">
                        <div class="px-8">
                            <h3 class="font-bold text-gray-900">About</h3>
                            <p class="py-4 text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                            </p>
                        </div>
                    </div>

                    <div class="flex w-full md:w-1/2">
                        <div class="px-8">
                            <h3 class="font-bold text-gray-900">Social</h3>
                            <ul class="list-reset items-center text-sm pt-3">
                                <li className="list-none">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">Add social link</a>
                                </li>
                                <li className="list-none">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">Add social link</a>
                                </li>
                                <li className="list-none">
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">Add social link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}
