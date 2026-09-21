import Icon from './Icon';
import styles from './Blocks.module.css';

/**
 * Mention portée par les guides juridiques.
 *
 * BFM est prestataire, pas avocat : publier du contenu sur la loi 18-00 est un atout de
 * référencement (cf. ARCHITECTURE.md §2.3), à condition de dire clairement que ces pages
 * informent et ne remplacent pas un conseil juridique.
 */
export default function LegalNote({ updated }: { updated?: string }) {
  return (
    <aside className={styles.legalNote}>
      <Icon name="clipboard" size={20} />
      <p>
        <strong>Information juridique.</strong> Cette page présente le cadre légal marocain de la
        copropriété — loi 18-00 telle que modifiée et complétée par la loi 106-12 — en termes
        accessibles. Elle ne constitue pas un conseil juridique : pour une situation précise,
        reportez-vous au texte de loi, à votre règlement de copropriété et, si nécessaire, à un
        professionnel du droit.
        {updated && <> Dernière révision : {formatDate(updated)}.</>}
      </p>
    </aside>
  );
}

/** ISO → « 21 septembre 2026 ». */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
  ];
  return `${d} ${months[m - 1]} ${y}`;
}
