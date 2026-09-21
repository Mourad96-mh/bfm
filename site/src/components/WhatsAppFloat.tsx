import { site } from '@/content/site';
import { telUrl, whatsappUrl } from '@/lib/contact';
import { UiIcon } from './Icon';
import styles from './Blocks.module.css';

/**
 * Les deux boutons d'appel flottants : WhatsApp et téléphone.
 *
 * Ce sont les deux canaux réels des prospects marocains — la plaquette BFM met d'ailleurs le
 * WhatsApp en premier et le fixe en bas de chaque planche. Aucun JavaScript : deux liens, que
 * le mobile ouvre dans l'application concernée. Deux pastilles rondes, sans libellé, pour ne
 * rien masquer du contenu ; l'intitulé reste porté par `aria-label` pour les lecteurs d'écran.
 */
export default function WhatsAppFloat({ context }: { context?: string }) {
  return (
    <div className={styles.floatBar}>
      <a
        href={telUrl()}
        className={`${styles.float} ${styles.floatPhone}`}
        aria-label={`Appeler BFM au ${site.phoneDisplay}`}
      >
        <UiIcon name="phone" size={22} />
      </a>
      <a
        href={whatsappUrl(context)}
        className={`${styles.float} ${styles.floatWa}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire à BFM sur WhatsApp"
      >
        <UiIcon name="whatsapp" size={24} />
      </a>
    </div>
  );
}
