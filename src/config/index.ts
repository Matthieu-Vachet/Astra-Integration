import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Astra - Constructeur de Sites Web Alimenté par IA",
        template: `%s | Astra`,
    },
    description:
        "Astra est un constructeur de sites web alimenté par IA qui vous aide à créer un site en quelques minutes. Aucune compétence en codage n'est requise. Commencez gratuitement !",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            },
        ],
    },
    openGraph: {
        title: "Astra - Constructeur de Sites Web Alimenté par IA",
        description:
            "Astra est un constructeur de sites web alimenté par IA qui vous aide à créer un site en quelques minutes. Aucune compétence en codage n'est requise. Commencez gratuitement !",
        images: [
            {
                url: "/assets/og-image.png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Astra - Constructeur de Sites Web Alimenté par IA",
        description:
            "Astra est un constructeur de sites web alimenté par IA qui vous aide à créer un site en quelques minutes. Aucune compétence en codage n'est requise. Commencez gratuitement !",
        images: [
            {
                url: "/assets/og-image.png",
            },
        ],
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
