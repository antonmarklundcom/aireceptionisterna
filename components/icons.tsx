/** Inline SVG icon set keyed to feature.icon. Stroke-based, inherits color.
 *  No raster, no external requests — keeps CLS at zero. */

type IconProps = { className?: string };

const base = "h-6 w-6";

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4M9 14l2 2 4-4" />
    </svg>
  );
}

export function SummaryIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

export function SmsIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function TransferIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 7h12l-3-3M20 17H8l3 3" />
    </svg>
  );
}

export function LanguageIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
    </svg>
  );
}

export function HammerIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m15 12 5.5 5.5-2 2L13 14M9 8l3-3 4 4-3 3M3 21l6-6" />
    </svg>
  );
}

export function PaintRollerIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="5" width="14" height="6" rx="1.5" />
      <path d="M9 11v4h4v6H9" />
    </svg>
  );
}

export function RoofIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12 12 4l9 8M6 11v9h12v-9" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 7h11v10H2zM13 10h5l3 3v4h-8z" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 16V11l2-5h12l2 5v5" />
      <path d="M3 16h18M6 16v2M18 16v2" />
      <circle cx="7.5" cy="16" r="1.6" />
      <circle cx="16.5" cy="16" r="1.6" />
    </svg>
  );
}

export function TireIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  );
}

export function ClinicIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v18M3 12h18" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  );
}

export function ToothIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 4c-3 0-5 2-5 5 0 3 1 4 1.3 8 .1 1.4 2 1.4 2.2 0 .2-1.6.5-3 1.5-3s1.3 1.4 1.5 3c.2 1.4 2.1 1.4 2.2 0C15.9 13 17 12 17 9c0-3-2-5-5-5Z" />
    </svg>
  );
}

export function ScissorsIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="m20 5-12 14M20 19 8 5" />
    </svg>
  );
}

const map = {
  phone: PhoneIcon,
  calendar: CalendarIcon,
  summary: SummaryIcon,
  sms: SmsIcon,
  clock: ClockIcon,
  transfer: TransferIcon,
  language: LanguageIcon,
  shield: ShieldIcon,
  wrench: WrenchIcon,
  bolt: BoltIcon,
  hammer: HammerIcon,
  paintroller: PaintRollerIcon,
  roof: RoofIcon,
  truck: TruckIcon,
  car: CarIcon,
  tire: TireIcon,
  clinic: ClinicIcon,
  tooth: ToothIcon,
  scissors: ScissorsIcon,
} as const;

export type IconKey = keyof typeof map;

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const C = map[name];
  return <C className={className} />;
}
