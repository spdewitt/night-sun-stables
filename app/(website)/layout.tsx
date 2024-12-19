import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import Script from "next/script";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "Horseback Riding Lessons and Camps in Evansville",
      template: "%s"
    },
    description:
      settings?.description ||
      "Night Sun Stables Horse Riding lessons and camps in Evansville.",
    keywords: [
      "Horse Riding Evansville",
      "Horse riding Evansville",
      "horseback riding evansville"
    ],
    authors: [{ name: "carmen" }],
    canonical: settings?.url,
    // openGraph: {
    //   images: [
    //     {
    //       url:
    //         urlForImage(settings?.openGraphImage)?.src ||
    //         "/img/opengraph.jpg",
    //       width: 800,
    //       height: 600
    //     }
    //   ]
    // },
    // twitter: {
    //   title: settings?.title",
    //   card: "summary_large_image"
    // },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();

  return (
    <>
      {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K02XYN136N"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'G-K02XYN136N', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Navbar {...settings} />
      <div>{children}</div>
      <Footer {...settings} />
    </>
  );
}
