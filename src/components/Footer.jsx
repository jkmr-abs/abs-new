import { ArrowUpRight } from 'lucide-react';
import FooterNextSteps from './FooterNextSteps';
import Label from './common/Label';
import Logo from './Logo';
import Description from './common/Description';
import SectionTitle from './common/SectionTitle';
import data from '../data/data';

const { footer: footerData } = data;


function FooterLink({ item, onNavigate }) {
  return (
    <button
      className="inline-flex w-max items-center text-xs text-abs-muted transition hover:text-abs-orange"
      type="button"
      onClick={() => onNavigate?.(item.target || item.id)}
    >
      {item.label}
    </button>
  );
}

function Footer({ onNavigate }) {
  return (
    <section
      id={footerData.id}
      data-section-component="GlobalFooter"
      className="scrollbar-none relative flex h-screen w-screen snap-start snap-always flex-col overflow-y-auto bg-[radial-gradient(circle_at_75%_75%,rgba(255,103,29,0.1),transparent_26rem),#08090c] px-0 pb-4 pt-[112px] lg:justify-between lg:overflow-hidden lg:pb-5 lg:pt-[108px]"
    >
      <div className="mx-auto grid w-[88vw] gap-0 lg:w-[89vw]">
        <div data-component="FooterTopHeader" className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-end lg:gap-10">
          <div data-component="FooterPrimaryContent">
            <Label number={footerData.number} label={footerData.sectionLabel} />
            <SectionTitle
              title={footerData.title}
              titleLines={footerData.titleLines}
              highlightWordIndexes={footerData.titleHighlightWordIndexes}
              dataElement="FooterTitle"
              className="text-[clamp(34px,7vw,56px)] lg:text-[clamp(42px,4.5vw,64px)]"
            />
            <Description
              text={footerData.description}
              dataElement="FooterDescription"
              className="mt-4 max-w-[380px] lg:mt-5"
            />
          </div>

          <div data-component="FooterConversation" className="rounded-sm border border-white/[0.12] p-4 lg:p-5">
            <span data-element="FooterConversationLabel" className="block text-[10px] font-medium uppercase tracking-[0.16em] text-abs-orange lg:text-xs">
              {footerData.conversationLabel}
            </span>
            <a data-element="FooterEmail" className="mt-3 inline-flex items-center gap-2 border-b border-abs-orange pb-1.5 text-sm text-abs-text transition hover:text-abs-orange lg:text-base" href={`mailto:${footerData.email}`}>
              {footerData.email}
              <ArrowUpRight size={16} className="text-abs-orange" />
            </a>
            <span data-element="FooterLocation" className="mt-2 block text-xs text-abs-muted">{footerData.location}</span>
          </div>
        </div>

        <FooterNextSteps label={footerData.nextStepsLabel} steps={footerData.nextSteps} className="mt-6 lg:mt-8" />

        <div data-component="FooterNavigation" className="mt-[clamp(28px,4vh,56px)] grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
          <div data-component="FooterBrandBlock" className="min-w-0">
            <Logo size="default" />
            <a data-element="FooterAddress" className="mt-3 block max-w-[280px] text-xs leading-[1.55] text-abs-muted transition hover:text-abs-orange" href={footerData.address.href} target="_blank" rel="noreferrer">
              {footerData.address.label}
            </a>
          </div>

          <div data-component="FooterServicesLinks" className="flex min-w-0 flex-col gap-2">
            <span data-element="FooterResourceLabel" className="mb-1 text-[9px] font-medium uppercase tracking-[0.14em] text-abs-orange">{footerData.servicesLabel}</span>
            {footerData.servicesLinks.map((item) => <span className="inline-flex w-max items-center text-xs text-abs-muted" key={item.id}>{item.label}</span>)}
          </div>

          <div data-component="FooterQuickLinks" className="flex min-w-0 flex-col gap-2">
            <span data-element="FooterResourceLabel" className="mb-1 text-[9px] font-medium uppercase tracking-[0.14em] text-abs-orange">{footerData.quickLinksLabel}</span>
            {footerData.quickLinks.map((item) => <FooterLink item={item} onNavigate={onNavigate} key={item.id} />)}
          </div>

          <div data-component="FooterSocialLinks" className="flex min-w-0 flex-col gap-2">
            <span data-element="FooterResourceLabel" className="mb-1 text-[9px] font-medium uppercase tracking-[0.14em] text-abs-orange">{footerData.socialLinksLabel}</span>
            {footerData.socialLinks.map((link, index) => (
              <a className="inline-flex w-max items-center gap-1.5 text-xs text-abs-muted transition hover:text-abs-orange" href={link.href} key={`${link.label}-${index}`} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
                {link.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div data-component="FooterLegalBar" className="mx-auto mt-4 grid w-[88vw] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-t border-white/[0.13] pt-3 text-[8px] tracking-[0.08em] text-[#858b96] sm:text-[9px] lg:mt-5 lg:w-[89vw] lg:pt-4">
        <span className="min-w-0">{footerData.copyright}</span>
        <div className="flex flex-nowrap items-center justify-end gap-2 whitespace-nowrap text-right sm:gap-4">
          {footerData.legalLinks.map((link) => <a className="transition hover:text-abs-orange" href={link.href} key={`${link.label}-${link.href}`}>{link.label}</a>)}
        </div>
      </div>
    </section>
  );
}

export default Footer;
