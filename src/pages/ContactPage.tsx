import { Section } from '../components/Section';
import { profileData } from '../data/profile';

export const ContactPage = () => {
  return (
    <Section title="Get In Touch" subtitle="I'm open to new opportunities and collaborations.">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-text-secondary mb-8">
          Have a question or want to work together? Feel free to reach out via the form below or email me directly at{' '}
          <a href={profileData.contact} className="text-primary hover:text-primary-hover">
            {profileData.contact.replace('mailto:', '')}
          </a>.
        </p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID" // IMPORTANT: User needs to replace this
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-surface border border-border rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-surface border border-border rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full bg-surface border border-border rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-background font-bold py-3 px-8 rounded-md hover:bg-primary-hover transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
};
