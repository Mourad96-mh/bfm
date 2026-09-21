import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGuide, guides, type Block } from '@/content/guides';
import { getService } from '@/content/services';
import { pageMeta } from '@/lib/seo';
import { articleLd, breadcrumbLd, faqLd } from '@/lib/jsonld';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import LegalNote, { formatDate } from '@/components/LegalNote';
import { ServiceCards } from '@/components/Cards';
import styles from '../../page.module.css';

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return pageMeta({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/guides/${guide.slug}`,
    type: 'article',
    publishedTime: guide.updated,
  });
}

export default async function GuidePage({ params }: Params) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const trail = [
    { name: 'Accueil', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: guide.title, path: `/guides/${guide.slug}` },
  ];

  /* Le sommaire se déduit des titres de niveau 2 : il n'y a pas de seconde liste à tenir,
     donc jamais d'ancre morte. */
  const toc = guide.blocks.filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2');

  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(trail),
          articleLd({
            headline: guide.heading,
            description: guide.seoDescription,
            path: `/guides/${guide.slug}`,
            datePublished: guide.updated,
          }),
          faqLd(guide.faq),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <article>
        <header className={styles.guideHead}>
          <div className="wrap">
            <p className="eyebrow">{guide.category}</p>
            <h1>{guide.heading}</h1>
            <p className="lead">{guide.lead}</p>
            <div className={styles.guideMeta}>
              <span data-tag>{guide.category}</span>
              <span>{guide.readingTime} min de lecture</span>
              <span>
                Révision du <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
              </span>
            </div>
          </div>
        </header>

        <div className="section">
          <div className="wrap">
            <div className={styles.withAside}>
              <div className="prose">
                {guide.blocks.map((block, i) => (
                  <GuideBlock key={i} block={block} />
                ))}

                {guide.legal && <LegalNote updated={guide.updated} />}
              </div>

              <aside className={styles.aside}>
                <h2>Sur cette page</h2>
                <ol>
                  {toc.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{h.text}</a>
                    </li>
                  ))}
                </ol>
                {related.length > 0 && (
                  <>
                    <h2 className={styles.asideSecond}>À lire aussi</h2>
                    <ul>
                      {related.map((g) => (
                        <li key={g.slug}>
                          <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </aside>
            </div>
          </div>
        </div>
      </article>

      <Faq items={guide.faq} />

      <section className="section-tight bg-cream">
        <div className="wrap">
          <p className="eyebrow">Nos services</p>
          <h2>Ce que BFM peut prendre en charge</h2>
          <div className={styles.gridGap}>
            <ServiceCards slugs={guide.relatedServices} />
          </div>
        </div>
      </section>

      <Cta context={guide.title} />
    </>
  );
}

/** Rend un bloc de contenu — le contenu des guides est typé, pas du HTML libre. */
function GuideBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>;

    case 'h2':
      return <h2 id={block.id}>{block.text}</h2>;

    case 'h3':
      return <h3>{block.text}</h3>;

    case 'ul':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case 'callout':
      return (
        <div className={styles.callout}>
          <strong>{block.title}</strong>
          <p>{block.text}</p>
        </div>
      );

    case 'table':
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
