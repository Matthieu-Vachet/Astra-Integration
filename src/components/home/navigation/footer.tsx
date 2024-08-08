import Icons from "@/components/global/icons";
import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                    <div className="flex items-start">
                        <Icons.logo className="w-7 h-7" />
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm text-start">
                        Créez des sites web élégants et fonctionnels sans coder
                    </p>
                </div>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium text-white">Produit</h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Fonctionnalités
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Tarification
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Témoignages
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Intégration
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium text-white">Intégrations</h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Facebook
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Instagram
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Twitter
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium text-white">Ressources</h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Études de cas
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium text-white">Entreprise</h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        À propos de nous
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Politique de confidentialité
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        href=""
                                        className="hover:text-foreground transition-all duration-300"
                                    >
                                        Conditions générales
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                    &copy; {new Date().getFullYear()} Astra AI INC. Tous droits réservés. Intégré
                    par{" "}
                    <a
                        href="https://www.matthieu-vachet.fr/"
                        className="text-blue-600 hover:underline"
                    >
                        Matthieu Vachet
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
};

export default Footer;
