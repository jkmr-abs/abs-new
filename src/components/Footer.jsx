import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import SectionLabel from './SectionLabel';
import SectionTitle from './common/SectionTitle';
import data from '../data/data';

const { footer: footerData, navigation: navItems } = data;

function Footer({ onNavigate }) {
  return (
    <section id={footerData.id} data-section-component="GlobalFooter" className="relative flex h-screen w-screen snap-start snap-always flex-col justify-between bg-[radial-gradient(circle_at_75%_75%,rgba(255,103,29,0.1),transparent_26rem),#08090c] px-0 pb-[22px] pt-[112px] lg:pb-[30px] lg:pt-[108px]">
      <div className="mx-auto grid w-[88vw] grid-cols-1 gap-12 md:w-[89vw] md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] md:gap-[clamp(50px,8vw,140px)]">
        <div data-component="FooterPrimaryContent">
          <SectionLabel number={footerData.number} label={footerData.sectionLabel} />
          <SectionTitle
            title={footerData.title}
            titleLines={footerData.titleLines}
            highlightWordIndexes={footerData.titleHighlightWordIndexes}
            dataElement="FooterTitle"
            className="text-[clamp(42px,7vw,72px)] lg:text-[clamp(52px,7vw,92px)]"
          />
          <div data-component="FooterBrandBlock" className="mt-10">
            <div className="flex items-center justify-between gap-4">
              <Logo />
              <a data-element="FooterEmail" className="inline-flex shrink-0 items-center gap-2 border-b border-abs-orange pb-[7px] text-sm text-abs-orange-soft md:text-[15px]" href={`mailto:${footerData.email}`}>
                {footerData.email} <ArrowUpRight size={18} className="text-abs-orange" />
              </a>
            </div>
            <a data-element="FooterAddress" className="mt-3 block max-w-[300px] whitespace-pre-line text-xs leading-[1.6] text-abs-muted transition hover:text-abs-orange md:text-sm" href={footerData.address.href} target="_blank" rel="noreferrer">{footerData.address.label}</a>
          </div>
        </div>

        <div data-component="FooterResourceGrid" className="grid grid-cols-2 content-start gap-8 pt-1 md:pt-[42px]">
          <div data-component="FooterQuickLinks" className="flex min-w-0 flex-col gap-3">
            <span data-element="FooterResourceLabel" className="mb-1.5 text-[9px] uppercase tracking-[0.14em] text-abs-orange">{footerData.quickLinksLabel}</span>
            {navItems.map((item) => <button className="inline-flex w-max items-center bg-transparent p-0 text-sm text-abs-muted transition hover:text-abs-orange" key={item.id} onClick={() => onNavigate(item.id)}>{item.label}</button>)}
          </div>
          <div data-component="FooterSocialLinks" className="flex min-w-0 flex-col gap-3">
            <span data-element="FooterResourceLabel" className="mb-1.5 text-[9px] uppercase tracking-[0.14em] text-abs-orange">{footerData.socialLinksLabel}</span>
            {footerData.socialLinks.map((link, index) => <a className="inline-flex w-max items-center gap-[7px] text-sm text-abs-muted transition hover:text-abs-orange" href={link.href} key={`${link.label}-${link.href}-${index}`} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>{link.label} {link.external && <ArrowUpRight size={14} />}</a>)}
          </div>
        </div>
      </div>

      <div data-component="FooterLegalBar" className="mx-auto grid w-[88vw] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-white/[0.13] pt-[15px] text-[9px] tracking-[0.08em] text-[#858b96] md:w-[89vw] md:pt-[21px] md:text-[11px]">
        <span className="min-w-0">{footerData.copyright}</span>
        <div className="flex flex-nowrap items-center justify-end gap-3 whitespace-nowrap text-right md:gap-4">
          {footerData.legalLinks.map((link) => <a className="transition hover:text-abs-orange" href={link.href} key={`${link.label}-${link.href}`}>{link.label}</a>)}
        </div>
      </div>
    </section>
  );
}

export default Footer;
