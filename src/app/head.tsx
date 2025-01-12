import Head from "next/head";

export default function CustomHead() {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="keywords" content="arthur dantas, portfolio, full stack, desenvolvedor, dev, engenheiro de software, nextjs portfolio, typescript portfolio, portfolio website" />
                <meta property="og:site_name" content="Portfolio | Arthur Dantas" />
                <meta property="og:title" content="Portfolio | Arthur Dantas - Engenheiro de Software" />
                <meta property="og:description" content="Arthur Dantas, desenvolvedor de software full stack, com experiência na criação de aplicações web, construindo soluções modernas, eficientes e escaláveis." />
                <meta name="description" content="Portfolio de Arthur Dantas, Engenheiro de Software Full Stack especialista em desenvolvimento web e soluções inovadoras." />      
                <meta property="og:type" content="website" />
                <meta name="author" content="Arthur Dantas" />
                <meta name="content-language" content="pt" />
                <link rel="icon" href="/favicon.ico " />
                <meta name="application-name" content="Portfolio | Arthur Dantas - Engenheiro de Software Full Stack" />
                <meta name="apple-mobile-web-app-title" content="Portfolio | Arthur Dantas - Engenheiro de Software Full Stack" />
                <title>Portfolio | Arthur Dantas - Engenheiro de Software Full Stack</title>
            </Head>
        </>
    )
}