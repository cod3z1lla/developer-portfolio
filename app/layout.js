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
  title: "Muhammad Shahzaib Tariq - AI Engineer Portfolio",
  description:
    "Portfolio of Muhammad Shahzaib Tariq, an AI Engineer specializing in LLM Systems, RAG, and Agent Workflows. ICPC Regionalist and Machine Learning expert.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="0OOQ1LA27Ro5drsl81u-P1O19KquM-w-3yIt0UwN0zg" />
        <meta
          name="description"
          content="Portfolio of Muhammad Shahzaib Tariq, an AI Engineer specializing in LLM Systems, RAG, and Agent Workflows. ICPC Regionalist and Machine Learning expert."
        />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning Engineer, LLM Engineer, RAG Developer, LangChain Developer, Retrieval Augmented Generation, ICPC Regionalist"
        />
        <meta name="author" content="Muhammad Shahzaib Tariq" />
        <link rel="canonical" href="https://mshahzaib.vercel.app/" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://mshahzaib.vercel.app/en"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://mshahzaib.vercel.app/es"
        />

        <meta
          property="og:title"
          content="Muhammad Shahzaib Tariq - AI Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Portfolio of Muhammad Shahzaib Tariq, an AI Engineer specializing in LLM Systems, RAG, and Agent Workflows. ICPC Regionalist and Machine Learning expert."
        />
        <meta property="og:url" content="https://mshahzaib.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mshahzaib.vercel.app/image/screen.png"
        />

        <meta
          name="twitter:title"
          content="Muhammad Shahzaib Tariq - AI Engineer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Muhammad Shahzaib Tariq, an AI Engineer specializing in LLM Systems, RAG, and Agent Workflows. ICPC Regionalist and Machine Learning expert."
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
            name: "Muhammad Shahzaib Tariq",
            jobTitle: "AI Engineer",
            url: "https://mshahzaib.vercel.app",
            image: "https://mshahzaib.vercel.app/image/screen.png",
            description:
              "Portfolio of Muhammad Shahzaib Tariq, an AI Engineer specializing in LLM Systems, RAG, and Agent Workflows. ICPC Regionalist and Machine Learning expert.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Islamabad",
              addressCountry: "Pakistan",
            },
            sameAs: [
              "https://www.linkedin.com/in/shahzaibdev/",
              "https://github.com/m-shazaib/",
              "https://twitter.com/",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Bahria University",
            },
            knowsAbout: [
              "Artificial Intelligence",
              "Machine Learning",
              "RAG",
              "LLM",
              "React Native",
              "Python",
              "C++"
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
      </body>
    </html>
  );
}
