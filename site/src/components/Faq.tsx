import styles from './Blocks.module.css';

/**
 * Questions fréquentes.
 *
 * `<details>/<summary>` plutôt qu'un accordéon en JavaScript : c'est accessible au clavier
 * sans une ligne de script, et le texte des réponses reste dans le HTML — donc lisible par
 * Google, ce qui est tout l'intérêt du balisage FAQPage qui l'accompagne.
 */
export default function Faq({
  items,
  title = 'Questions fréquentes',
  id = 'faq',
}: {
  items: { q: string; a: string }[];
  title?: string;
  id?: string;
}) {
  if (!items.length) return null;

  return (
    <section className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <p className="eyebrow">Bon à savoir</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <div className={styles.faq}>
          {items.map((f) => (
            <details key={f.q} className={styles.item}>
              <summary>{f.q}</summary>
              <div className={styles.answer}>
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
