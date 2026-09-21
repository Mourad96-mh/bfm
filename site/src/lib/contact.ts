import { site } from '@/content/site';

/**
 * Liens de contact.
 *
 * WhatsApp est le canal dominant des PME marocaines — la plaquette BFM le met d'ailleurs
 * en premier. Chaque bouton porte donc un message pré-rempli contextualisé par la page,
 * pour que le prospect n'ait pas à réexpliquer d'où il vient.
 */

/** Numéro au format wa.me : chiffres uniquement, sans le +. */
const WA_NUMBER = site.phone.replace(/[^0-9]/g, '');

export function whatsappUrl(context?: string): string {
  const message = context
    ? `Bonjour BFM, je vous contacte au sujet de : ${context}.`
    : 'Bonjour BFM, je souhaite des informations sur vos services.';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Lien WhatsApp portant un message déjà composé (formulaire de devis).
 *
 * Séparé de `whatsappUrl` : là on contextualise une phrase d'accroche, ici on transmet le
 * message complet tel quel, sans l'amorce générique.
 */
export function whatsappRaw(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:${site.phone}`;
}

export function mailtoUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const qs = params.toString();
  return `mailto:${site.email}${qs ? `?${qs}` : ''}`;
}

/**
 * Compose le message de demande de devis à partir des champs du formulaire.
 * Le même texte alimente WhatsApp et le corps du mail — une seule source, deux canaux.
 */
export function quoteMessage(fields: {
  name: string;
  phone: string;
  email: string;
  profile: string;
  service: string;
  city: string;
  message: string;
}): string {
  const lines = [
    'Demande de devis — bfm.co.ma',
    '',
    `Nom : ${fields.name || '—'}`,
    `Téléphone : ${fields.phone || '—'}`,
    `E-mail : ${fields.email || '—'}`,
    `Profil : ${fields.profile || '—'}`,
    `Prestation : ${fields.service || '—'}`,
    `Ville : ${fields.city || '—'}`,
    '',
    'Besoin :',
    fields.message || '—',
  ];
  return lines.join('\n');
}
