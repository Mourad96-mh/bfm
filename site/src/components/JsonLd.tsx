/**
 * Injecte un bloc schema.org.
 *
 * `dangerouslySetInnerHTML` est ici la façon recommandée par Next : le contenu vient de nos
 * propres objets (lib/jsonld.ts), jamais d'une saisie externe. On échappe tout de même `<`
 * pour qu'un texte contenant une balise ne puisse pas fermer le script.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
