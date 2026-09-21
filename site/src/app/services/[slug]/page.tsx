import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getService, services } from '@/content/services';
import { getAudience } from '@/content/audiences';
import { method } from '@/content/site';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd, faqLd, serviceLd } from '@/lib/jsonld';
import { img, type MediaPath } from '@/lib/media';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Capabilities, ServiceCards } from '@/components/Cards';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Icon, { UiIcon } from '@/components/Icon';
import { whatsappUrl } from '@/lib/contact';
import styles from '../../page.module.css';

/** Les dix fiches sont connues au build : export statique complet, zéro page à la demande. */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMeta({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const trail = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const audiences = service.audiences
    .map(getAudience)
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(trail),
          serviceLd({
            name: service.title,
            description: service.seoDescription,
            path: `/services/${service.slug}`,
            serviceType: service.title,
          }),
          faqLd(service.faq),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <section className={styles.serviceHead}>
        <div className={`wrap ${styles.serviceHeadInner}`}>
          <div>
            <div className={styles.plate}>
              <span className={styles.plateNum}>{service.num}</span>
              <span className={styles.plateRule} aria-hidden="true" />
            </div>
            <h1>{service.heading}</h1>
            <p className="lead">{service.lead}</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <a
                href={whatsappUrl(service.title)}
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
            <img
              {...img(service.image as MediaPath)}
              alt={service.imageAlt}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={styles.withAside}>
            <div>
              <p>{service.intro}</p>

              <h2 className={styles.blockGap}>Ce que nous prenons en charge</h2>
              <Capabilities items={service.capabilities} />
            </div>

            {/* Colonne latérale : rappel des engagements propres au métier. */}
            <aside className={styles.aside}>
              <h2>Nos engagements</h2>
              <ul className={styles.asideList}>
                {service.engagements.map((e) => (
                  <li key={e.title}>
                    <strong>{e.title}</strong>
                    <span>{e.text}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className={styles.priority}>
            <span className={styles.priorityIcon}>
              <Icon name="shield" size={32} />
            </span>
            <div>
              <h2>{service.priority.title}</h2>
              <p>{service.priority.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <p className="eyebrow">Pour qui ?</p>
          <h2>Ce service s’adresse à</h2>
          <div className={styles.forWho}>
            {audiences.map((a) => (
              <Link key={a.slug} href={`/solutions/${a.slug}`} className={styles.chip}>
                {a.label}
                <UiIcon name="arrow" size={16} />
              </Link>
            ))}
          </div>

          <h2 className={styles.blockGap}>Comment nous intervenons</h2>
          <div className={styles.methodRow}>
            {method.map((m) => (
              <div key={m.n} className={styles.methodItem}>
                <strong>
                  {m.n}. {m.title}
                </strong>
                <span>{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={service.faq} title={`${service.title} — questions fréquentes`} />

      <section className="section-tight bg-cream">
        <div className="wrap">
          <p className="eyebrow">Maillage</p>
          <h2>Services associés</h2>
          <div className={styles.gridGap}>
            <ServiceCards slugs={service.related} />
          </div>
        </div>
      </section>

      <Cta
        context={service.title}
        title={`Un devis pour « ${service.title} »`}
        text="Décrivez-nous le site et vos contraintes : nous organisons une visite et vous adressons une proposition détaillée."
      />
    </>
  );
}
