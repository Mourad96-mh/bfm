'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { services } from '@/content/services';
import { audiences } from '@/content/audiences';
import { guides } from '@/content/guides';
import { site } from '@/content/site';
import { telUrl, whatsappUrl } from '@/lib/contact';
import { UiIcon } from './Icon';
import styles from './Header.module.css';

/**
 * En-tête du site.
 *
 * Seul composant client de la navigation : il lui faut l'état d'ouverture des menus et le
 * chemin courant. Les menus s'ouvrent au clic (et non au survol seul) pour rester utilisables
 * au clavier et au doigt ; `aria-expanded` suit l'état réel, et Échap referme.
 */

type MenuKey = 'services' | 'solutions' | null;

export default function Header() {
  const pathname = usePathname() ?? '/';
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<MenuKey>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Toute navigation referme les menus : sans cela, un clic sur un lien du panneau
  // laisserait le panneau ouvert par-dessus la page suivante.
  useEffect(() => {
    setMenu(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [menu]);

  /** Actif si c'est la page elle-même ou une de ses filles. */
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const current = (href: string) => (isActive(href) ? ('page' as const) : undefined);

  return (
    <header>
      <div className={styles.topbar}>
        <div className={`wrap ${styles.topbarInner}`}>
          <div className={styles.topbarLinks}>
            <a href={telUrl()}>
              <UiIcon name="phone" size={15} />
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`}>
              <UiIcon name="mail" size={15} />
              {site.email}
            </a>
          </div>
          <span className={styles.topbarNote}>
            <UiIcon name="pin" size={15} />
            {site.city} — interventions partout au {site.countryName}
          </span>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={`wrap ${styles.barInner}`}>
          <Link href="/" className={styles.brand} aria-label={`${site.legalName} — accueil`}>
            {/* Logo vectoriel (scripts/logo.mjs) : net à toutes les densités, ~4 ko. */}
            <img
              src="/media/bfm-logo.svg"
              alt={site.legalName}
              width={129}
              height={46}
              // Le logo est dans le premier écran : il ne doit pas être différé.
              fetchPriority="high"
            />
          </Link>

          <nav className={styles.nav} aria-label="Navigation principale" ref={navRef}>
            <div className={styles.navItem}>
              <button
                type="button"
                className={styles.navLink}
                aria-expanded={menu === 'services'}
                data-open={menu === 'services'}
                onClick={() => setMenu(menu === 'services' ? null : 'services')}
              >
                Services
                <Caret />
              </button>
              {menu === 'services' && (
                <div className={`${styles.panel} ${styles.panelWide}`}>
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className={styles.panelLink}>
                      <span className={styles.panelNum}>{s.num}</span>
                      {s.title}
                    </Link>
                  ))}
                  <Link href="/services" className={styles.panelAll}>
                    Voir les 10 métiers
                  </Link>
                </div>
              )}
            </div>

            <div className={styles.navItem}>
              <button
                type="button"
                className={styles.navLink}
                aria-expanded={menu === 'solutions'}
                data-open={menu === 'solutions'}
                onClick={() => setMenu(menu === 'solutions' ? null : 'solutions')}
              >
                Solutions
                <Caret />
              </button>
              {menu === 'solutions' && (
                <div className={styles.panel}>
                  {audiences.map((a) => (
                    <Link key={a.slug} href={`/solutions/${a.slug}`} className={styles.panelLink}>
                      {a.label}
                    </Link>
                  ))}
                  <Link href="/solutions" className={styles.panelAll}>
                    Les quatre publics
                  </Link>
                </div>
              )}
            </div>

            <Link href="/guides" className={styles.navLink} aria-current={current('/guides')}>
              Guides
            </Link>
            <Link href="/a-propos" className={styles.navLink} aria-current={current('/a-propos')}>
              À propos
            </Link>
            <Link
              href="/zones-d-intervention"
              className={styles.navLink}
              aria-current={current('/zones-d-intervention')}
            >
              Zones
            </Link>
          </nav>

          <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
            Demander un devis
          </Link>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <UiIcon name={mobileOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>

        {mobileOpen && (
          <nav id="menu-mobile" className={styles.mobile} aria-label="Navigation mobile">
            <div className="wrap">
              <div className={styles.mobileGroup}>
                <button
                  type="button"
                  className={styles.mobileHead}
                  aria-expanded={mobileGroup === 'services'}
                  onClick={() => setMobileGroup(mobileGroup === 'services' ? null : 'services')}
                >
                  Services
                  <UiIcon name={mobileGroup === 'services' ? 'close' : 'plus'} size={18} />
                </button>
                {mobileGroup === 'services' && (
                  <div className={styles.mobileSub}>
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`}>
                        <span className={styles.panelNum}>{s.num}</span>
                        {s.title}
                      </Link>
                    ))}
                    <Link href="/services">Tous les services</Link>
                  </div>
                )}
              </div>

              <div className={styles.mobileGroup}>
                <button
                  type="button"
                  className={styles.mobileHead}
                  aria-expanded={mobileGroup === 'solutions'}
                  onClick={() => setMobileGroup(mobileGroup === 'solutions' ? null : 'solutions')}
                >
                  Solutions
                  <UiIcon name={mobileGroup === 'solutions' ? 'close' : 'plus'} size={18} />
                </button>
                {mobileGroup === 'solutions' && (
                  <div className={styles.mobileSub}>
                    {audiences.map((a) => (
                      <Link key={a.slug} href={`/solutions/${a.slug}`}>
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.mobileGroup}>
                <Link href="/guides" className={styles.mobileLink}>
                  Guides <span className={styles.panelNum}>{guides.length}</span>
                </Link>
              </div>
              <div className={styles.mobileGroup}>
                <Link href="/a-propos" className={styles.mobileLink}>
                  À propos
                </Link>
              </div>
              <div className={styles.mobileGroup}>
                <Link href="/zones-d-intervention" className={styles.mobileLink}>
                  Zones d’intervention
                </Link>
              </div>

              <div className={styles.mobileCta}>
                <Link href="/contact" className="btn btn-primary">
                  Demander un devis
                </Link>
                <a
                  href={whatsappUrl()}
                  className="btn btn-wa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <UiIcon name="whatsapp" size={18} />
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function Caret() {
  return (
    <svg
      className={styles.caret}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}
