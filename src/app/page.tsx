import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoOsis from '@/images/clients/osis/logo-dark.svg'
import logoMystory from '@/images/clients/mystory/logo-dark.svg'
import logoSchroff from '@/images/clients/schroff/logo-dark.svg'
import logoEjc from '@/images/clients/ejc/logo-dark.svg'
import logoDesync from '@/images/clients/desync/logo-dark.svg'
import logoRpt from '@/images/clients/rpt/logo-dark.svg'

import orb1 from '@/images/orbs/orb-1.png'
import orb2 from '@/images/orbs/orb-2.png'
import orb3 from '@/images/orbs/orb-3.png'


import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

import { CalendlyButton } from '@/components/CalendlyButton'
import { ProgressBar } from '@/components/ProgressBar'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const clients = [
  ['osis', logoOsis],
  ['mystory', logoMystory],
  ['schroff', logoSchroff],
  ['ejc', logoEjc],
  ['rpt', logoRpt],
  ['desync', logoDesync],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
          Trusted by ambitious companies around the world
          </h2>
          {/* <div className="h-px flex-auto bg-neutral-800" /> */}
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-3"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    className="mx-auto h-10 w-auto max-w-full sm:h-12 lg:h-16"
                    sizes="(min-width: 1024px) 16rem, (min-width: 640px) 12rem, 10rem"
                    unoptimized
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

// function Service1() {
//   return (
//     <>
//       <SectionIntro
//         eyebrow="Services"
//         title="We help you identify, explore and respond to new opportunities."
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           As long as those opportunities involve giving us money to re-purpose
//           old projects — we can come up with an endless number of those.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <div className="lg:flex lg:items-center lg:justify-end">
//           <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
//             <FadeIn className="w-135 flex-none lg:w-180">
//               <StylizedImage
//                 src={imageLaptop}
//                 sizes="(min-width: 1024px) 41rem, 31rem"
//                 className="justify-center lg:justify-end"
//               />
//             </FadeIn>
//           </div>
//           <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
//             <ListItem title="Web development">
//               We specialise in crafting beautiful, high quality marketing pages.
//               The rest of the website will be a shell that uses lorem ipsum
//               everywhere.
//             </ListItem>
//             <ListItem title="Application development">
//               We have a team of skilled developers who are experts in the latest
//               app frameworks, like Angular 1 and Google Web Toolkit.
//             </ListItem>
//             <ListItem title="E-commerce">
//               We are at the forefront of modern e-commerce development. Which
//               mainly means adding your logo to the Shopify store template we’ve
//               used for the past six years.
//             </ListItem>
//             <ListItem title="Custom content management">
//               At Studio we understand the importance of having a robust and
//               customised CMS. That’s why we run all of our client projects out
//               of a single, enormous Joomla instance.
//             </ListItem>
//           </List>
//         </div>
//       </Container>
//     </>
//   )
// }

function ServiceCard({ title, description, image }: { title: string, description: string, image: StaticImageData }) {
  return (
    <div className="relative aspect-square">
      <Image src={image} alt={title} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <ProgressiveBlur value={50} className='absolute inset-0'/>
    </div>
  )
}

function Services() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ServiceCard 
          title="Web Development" 
          description="We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere." 
          image={orb1} 
        />
        <ServiceCard 
          title="Web Development" 
          description="We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere." 
          image={orb1} 
        />
        <ServiceCard 
          title="Web Development" 
          description="We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere." 
          image={orb1} 
        />
      </Container>
   
      {/* <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container> */}
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">

            Design-Led Web Projects

          </h1>
          <p className="mt-3 text-2xl text-neutral-600">
          Full-stack execution for companies that demand taste, speed, and polish.
          </p>
        </FadeIn>
        <FadeIn className="max-w-2xl space-x-4 mt-3">
          <CalendlyButton url="https://calendly.com/andres-onc9/30min">Book a discovery call</CalendlyButton>

        </FadeIn>
      </Container>

      <Clients />

      <Services />
      {/* <Services1 /> */}

      <CaseStudies caseStudies={caseStudies} />
  
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <ContactSection />
    </RootLayout>
  )
}
