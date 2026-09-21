'use client';

import { useState } from 'react';
import { services } from '@/content/services';
import { audiencesShort, site } from '@/content/site';
import { mailtoUrl, quoteMessage, whatsappRaw } from '@/lib/contact';
import { UiIcon } from './Icon';
import styles from './QuoteForm.module.css';

/**
 * Demande de devis.
 *
 * Pas de back-end : l'hébergement est mutualisé et le site est exporté en statique. Le
 * formulaire compose donc le même message pour deux canaux — WhatsApp (le canal réel des
 * prospects marocains) et l'e-mail — et laisse le visiteur choisir. Aucune donnée ne transite
 * par un tiers, et il n'y a aucun formulaire à spammer.
 *
 * La validation reste celle du navigateur (`required`, `type`), suffisante ici et accessible
 * par défaut ; on y ajoute seulement un garde-fou sur le nom et le téléphone, les deux champs
 * sans lesquels un devis ne peut pas être rappelé.
 */

const empty = {
  name: '',
  phone: '',
  email: '',
  profile: '',
  service: '',
  city: site.city,
  message: '',
};

export default function QuoteForm() {
  const [fields, setFields] = useState(empty);
  const [touched, setTouched] = useState(false);

  const set = (key: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [key]: e.target.value });

  const ready = fields.name.trim().length > 1 && fields.phone.trim().length > 5;
  const message = quoteMessage(fields);

  const send = (channel: 'whatsapp' | 'mail') => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ready) {
      e.preventDefault();
      setTouched(true);
      return;
    }
    // Le lien fait le reste : wa.me ou le client de messagerie du visiteur.
    void channel;
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>
            Nom et prénom <b aria-hidden="true">*</b>
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={fields.name}
            onChange={set('name')}
            placeholder="Votre nom"
          />
        </label>

        <label className={styles.field}>
          <span>
            Téléphone <b aria-hidden="true">*</b>
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            value={fields.phone}
            onChange={set('phone')}
            placeholder="06 00 00 00 00"
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={fields.email}
            onChange={set('email')}
            placeholder="vous@exemple.ma"
          />
        </label>

        <label className={styles.field}>
          <span>Ville</span>
          <input
            type="text"
            name="city"
            autoComplete="address-level2"
            value={fields.city}
            onChange={set('city')}
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Vous êtes</span>
          <select name="profile" value={fields.profile} onChange={set('profile')}>
            <option value="">— Choisir —</option>
            {audiencesShort.map((a) => (
              <option key={a.slug} value={a.label}>
                {a.label}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>Prestation souhaitée</span>
          <select name="service" value={fields.service} onChange={set('service')}>
            <option value="">— Choisir —</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.num} — {s.title}
              </option>
            ))}
            <option value="Plusieurs prestations">Plusieurs prestations</option>
          </select>
        </label>
      </div>

      <label className={styles.field}>
        <span>Votre besoin</span>
        <textarea
          name="message"
          rows={5}
          value={fields.message}
          onChange={set('message')}
          placeholder="Nombre de lots, surface, fréquence souhaitée, contraintes d’accès…"
        />
      </label>

      {touched && !ready && (
        <p className={styles.error} role="alert">
          Merci d’indiquer au moins votre nom et un numéro où vous rappeler.
        </p>
      )}

      <div className={styles.actions}>
        <a
          href={ready ? whatsappRaw(message) : '#'}
          className="btn btn-wa"
          target="_blank"
          rel="noopener noreferrer"
          onClick={send('whatsapp')}
          aria-disabled={!ready}
        >
          <UiIcon name="whatsapp" size={18} />
          Envoyer sur WhatsApp
        </a>

        <a
          href={ready ? mailtoUrl('Demande de devis — bfm.co.ma', message) : '#'}
          className="btn btn-outline"
          onClick={send('mail')}
          aria-disabled={!ready}
        >
          <UiIcon name="mail" size={18} />
          Envoyer par e-mail
        </a>
      </div>

      <p className={styles.note}>
        Les champs marqués d’une <b aria-hidden="true">*</b> sont nécessaires pour vous rappeler.
        Votre message part directement vers WhatsApp ou votre messagerie : aucune donnée n’est
        enregistrée sur ce site.
      </p>
    </form>
  );
}
