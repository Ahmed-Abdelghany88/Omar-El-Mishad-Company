import React from 'react'
import { Helmet } from 'react-helmet-async';

const helmet = () => {
  return (
    <div>
      <Helmet>
        <title>Omar El-Mishad Company | Creative Production Services</title>
        <meta
          name='description'
          content='Omar El-Mishad Company blends innovation with creative expertise, offering high-quality production, branding, and AI-powered video services at affordable budgets.'
        />
        <meta
          name='keywords'
          content='Omar El-Mishad, Creative Production, Video Production, Branding, AI Video, IMAGO, Egypt Media , producer , creative director , Film production, Advertising , فيلم, سينما, فيلم قصير,مجاديف, نوم العازب, نسخة أصلية, كنت هنا, ٢ ليمون بالنعناع, مهرجان  , مهرجانات, عمر المشد, مخرج, مونتير, اعلان
'
        />
        <meta name='author' content='Omar El-Mishad Company' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Omar El-Mishad Company' />
        <meta
          property='og:description'
          content='Where Constraints Fuel Creativity...'
        />
        <meta property='og:image' content='https://omardir.com/link-icon.jpg' />
        <meta property='og:url' content='https://omardir.com/' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Omar El-Mishad Company' />
        <meta
          name='twitter:description'
          content='Explore our creative services and AI-powered video solutions.'
        />
        <meta
          name='twitter:image'
          content='https://omardir.com/link-icon.jpg'
        />

        {/* Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Omar El-Mishad',
            alternateName: 'عمر المشد',
            url: 'https://omardir.com',
            sameAs: [
              'https://elcinema.com/person/2318857',
              'https://m.imdb.com/name/nm10301800/',
              'https://m.imdb.com/name/nm12577548/',
              'https://youtube.com/@omelmishad',
              'https://youtube.com/@leplaceur1548',
            ],
            jobTitle: 'Director & Editor',
            image: 'https://omardir.com/assets/img/Link-Icon.jpg',
            worksFor: {
              '@type': 'Organization',
              name: 'Omar El-Mishad Advertising & Film Production',
            },
          })}
        </script>
      </Helmet>
    </div>
  )
}

export default helmet
