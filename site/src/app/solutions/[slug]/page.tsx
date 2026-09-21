import Link from 'next/link';
import { notFound } from 'next/navigation';
import { audiences, getAudience } from '@/content/audiences';
import { getService } from '@/content/services';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd, faqLd, serviceLd } from '@/lib/jsonld';
import { img, type MediaPath } from '@/lib/media';
import { whatsappUrl } from '@/lib/contact';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceIndex from '@/components/ServiceIndex';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import { UiIcon } from '@/components/Icon';
import styles from '../../page.module.css';
import home from '../../home.module.css';

export function generateStaticParams() {
  return audiences.map((a) => ({ slug: a.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return {};

  return pageMeta({
    title: audience.seoTitle,
    description: audience.seoDescription,
    path: `/solutions/${audience.slug}`,
    image: audience.image,
  });
}

export default async function AudiencePage({ params }: Params) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  const trail = [
    { name: 'Accueil', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: audience.label, path: `/solutions/${audience.slug}` },
  ];

  /* Les services sont listés dans l'ordre de pertinence pour ce public, pas dans l'ordre
     de la plaquette : c'est le classement qui compte pour un lecteur qui se reconnaît ici. */
  const services = audience.services
    .map(getService)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(trail),
          serviceLd({
            name: `Facility management pour ${audience.label.toLowerCase()}`,
            description: audience.seoDescription,
            path: `/solutions/${audience.slug}`,
            serviceType: 'Facility management',
          }),
          faqLd(audience.faq),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <section className={styles.serviceHead}>
        <div className={`wrap ${styles.serviceHeadInner}`}>
          <div>
            <p className="eyebrow">Solutions · {audience.label}</p>
            <h1>{audience.heading}</h1>
            <p className="lead">{audience.lead}</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <a
                href={whatsappUrl(audience.label)}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UiIcon name="whatsapp" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
          <div className={styles.serviceMedia}>
            <img {...img(audience.image as MediaPath)} alt={audience.imageAlt} fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lead">{audience.intro}</p>
        </div>
      </section>

      {/* Les problèmes d'abord, la réponse ensuite : c'est l'ordre dans lequel le lecteur pense. */}
      <section className="section-tight bg-cream">
        <div className={`wrap ${home.split} ${home.splitTop}`}>
          <div>
            <p className="eyebrow">Ce que vous vivez</p>
            <h2>Les difficultés les plus fréquentes</h2>
            <ul className={home.args}>
              {audience.pains.map((p) => (
                <li key={p.title}>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Ce que nous mettons en face</p>
            <h2>La réponse BFM</h2>
            <ul className={home.args}>
              {audience.answers.map((a) => (
                <li key={a.title}>
                  <strong>{a.title}</strong>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Prestations</p>
          <h2>Ce que nous assurons pour vous</h2>
          <div className={styles.gridGap}>
            <ServiceIndex services={services} />
          </div>
        </div>
      </section>

      <Faq items={audience.faq} title={`${audience.label} — questions fréquentes`} />

      <Cta
        context={audience.label}
        title={`Parlons de votre ${audience.label.toLowerCase().replace(/s$/, '')}`}
        text="Un échange de quinze minutes suffit à cadrer le besoin. Nous revenons ensuite vers vous avec une proposition chiffrée."
      />
    </>
  );
}
