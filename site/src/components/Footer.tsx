import Link from 'next/link';
import { services } from '@/content/services';
import { audiences } from '@/content/audiences';
import { site } from '@/content/site';
import { telUrl, whatsappUrl } from '@/lib/contact';
import { UiIcon } from './Icon';
import styles from './Footer.module.css';

/**
 * Pied de page.
 *
 * Il porte le NAP (nom, adresse, téléphone) qui doit être strictement identique à celui de la
 * future fiche Google Business Profile : c'est un critère de référencement local. Tant que le
 * client n'a pas communiqué la voie, on affiche la ville seule plutôt qu'une adresse inventée.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url)) as [string, string][];

  return (
    <footer className={`${styles.foot} zellige`}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          {/* Variante sur fond navy : lettrage blanc et or, générée par scripts/logo.mjs. */}
          <img
            src="/media/bfm-logo-inverse.svg"
            alt={site.legalName}
            className={styles.logo}
            width={146}
            height={52}
          />
          <p className={styles.blurb}>
            {site.fullName} — un seul interlocuteur pour la gestion, l’entretien et la maintenance
            de votre patrimoine, à {site.city} et partout au {site.countryName}.
          </p>
          <p className={styles.blurb}>
            <em>« {site.tagline}. »</em>
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Services</h2>
          <ul className={styles.list}>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/services">Tous les services →</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Solutions</h2>
          <ul className={styles.list}>
            {audiences.map((a) => (
              <li key={a.slug}>
                <Link href={`/solutions/${a.slug}`}>{a.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/guides">Guides</Link>
            </li>
            <li>
              <Link href="/a-propos">À propos</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.contact}>
            <div>
              <UiIcon name="phone" size={17} />
              <a href={telUrl()}>{site.phoneDisplay}</a>
            </div>
            <div>
              <UiIcon name="mail" size={17} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <UiIcon name="pin" size={17} />
              <span>
                {site.city}, {site.countryName}
              </span>
            </div>
            <div>
              <UiIcon name="clock" size={17} />
              <span>{site.hours}</span>
            </div>
            <a
              href={whatsappUrl()}
              className={`btn btn-wa ${styles.waBtn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <UiIcon name="whatsapp" size={18} />
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <div className={`wrap ${styles.legalInner}`}>
          <span>
            © {year} {site.legalName}. Tous droits réservés.
          </span>
          <nav className={styles.legalLinks} aria-label="Liens légaux">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link href="/zones-d-intervention">Zones d’intervention</Link>
            <Link href="/contact">Devis</Link>
            {socials.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                {name[0].toUpperCase() + name.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
