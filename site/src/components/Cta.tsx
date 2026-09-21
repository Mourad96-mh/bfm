import Link from 'next/link';
import { site } from '@/content/site';
import { telUrl, whatsappUrl } from '@/lib/contact';
import { UiIcon } from './Icon';
import styles from './Blocks.module.css';

/**
 * Bandeau de conversion, présent en bas de chaque page.
 *
 * `context` est le sujet de la page : il part dans le message WhatsApp pré-rempli, pour que
 * le prospect n'ait pas à réexpliquer d'où il vient et que BFM sache immédiatement de quelle
 * prestation il s'agit.
 */
export default function Cta({
  context,
  title = 'Parlons de votre site',
  text = 'Décrivez-nous votre besoin : nous vous rappelons pour organiser une visite et établir une proposition précise.',
}: {
  context?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className={`${styles.cta} zellige bg-navy`}>
      <div className={`wrap ${styles.ctaInner}`}>
        <div>
          <p className="eyebrow">Devis sans engagement</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/contact" className="btn btn-gold">
            Demander un devis
          </Link>
          <a
            href={whatsappUrl(context)}
            className="btn btn-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UiIcon name="whatsapp" size={18} />
            Écrire sur WhatsApp
          </a>
          <a href={telUrl()} className={styles.ctaPhone}>
            <UiIcon name="phone" size={19} />
            {site.phoneDisplay}
          </a>
          <span className={styles.ctaNote}>{site.hours} — réponse rapide</span>
        </div>
      </div>
    </section>
  );
}
