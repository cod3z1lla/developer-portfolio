import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Shahzaib: React Native & Mobile App Developer in Islamabad",
  description:
    "Explore Muhammad Shahzaib's portfolio, a skilled React Native and Front End Developer based in Islamabad. Specializing in mobile app development and open to new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="0OOQ1LA27Ro5drsl81u-P1O19KquM-w-3yIt0UwN0zg" />
        <meta
          name="description"
          content="Explore Muhammad Shahzaib's portfolio, a skilled React Native and Front End Developer based in Islamabad. Specializing in mobile app development and open to new challenges."
        />
        <meta
          name="keywords"
          content="React Native, Mobile Developer, Muhammad Shahzaib, Shahzaib, Islamabad, Software Developer, Full Stack Developer, JavaScript, MERN Stack, Web Development, Mobile Development"
        />
        <meta name="author" content="Muhammad Shahzaib" />
        <link rel="canonical" href="https://mshahzaib.vercel.app/" />
        <link
          rel="alternate"
          hreflang="en"
          href="https://mshahzaib.vercel.app/en"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://mshahzaib.vercel.app/es"
        />

        <meta
          property="og:title"
          content="Muhammad Shahzaib: React Native & Mobile App Developer in Islamabad"
        />
        <meta
          property="og:description"
          content="Explore Muhammad Shahzaib's portfolio, a skilled React Native and Front End Developer based in Islamabad. Specializing in mobile app development and open to new challenges."
        />
        <meta property="og:url" content="https://mshahzaib.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mshahzaib.vercel.app/image/screen.png"
        />

        <meta
          name="twitter:title"
          content="Muhammad Shahzaib: React Native & Mobile App Developer in Islamabad"
        />
        <meta
          name="twitter:description"
          content="Explore Muhammad Shahzaib's portfolio, a skilled React Native and Front End Developer based in Islamabad. Specializing in mobile app development and open to new challenges."
        />
        <meta
          name="twitter:image"
          content="https://mshahzaib.vercel.app/image/screen.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammad Shahzaib",
            jobTitle: "React Native & Mobile App Developer",
            url: "https://mshahzaib.vercel.app",
            image: "https://mshahzaib.vercel.app/image/screen.png",
            description:
              "Explore Muhammad Shahzaib's portfolio, a skilled React Native and Front End Developer based in Islamabad. Specializing in mobile app development and open to new challenges.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Islamabad",
              addressCountry: "Pakistan",
            },
            sameAs: [
              "https://www.linkedin.com/in/Shahzaibdev/",
              "https://github.com/m-shazaib/",
              "https://twitter.com/",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Bahria University",
            },
            knowsAbout: [
              "React Native",
              "JavaScript",
              "TypeScript",
              "Mobile Development",
              "MERN Stack",
            ],
            email: "mailto:shahzaib.tariq041@gmail.com",
          })}
        </script>

        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
{/*         <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
      </body>
    </html>
  );
}
