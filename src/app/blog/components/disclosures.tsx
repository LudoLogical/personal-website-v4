'use client';

import {
  disclosuresText,
  DisclosureType,
  type Frontmatter
} from 'data/frontmatter';
import {
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCurrencyDollar
} from 'react-icons/hi2';
import { PiTarget } from 'react-icons/pi';

const disclosureIcons = {
  intent: PiTarget,
  stance: HiOutlineChatBubbleOvalLeftEllipsis,
  affiliation: HiOutlineCurrencyDollar
};

function Disclosure({
  frontmatter,
  disclosureType
}: {
  frontmatter: Frontmatter;
  disclosureType: DisclosureType;
}) {
  const Icon = disclosureIcons[disclosureType];
  const disclosureValue = frontmatter[disclosureType];
  const phrases = disclosuresText[disclosureType];
  return (
    <div className="flex flex-nowrap gap-2">
      <Icon
        title={disclosureType.charAt(0).toUpperCase() + disclosureType.slice(1)}
        className="mt-1 h-5 w-5 shrink-0"
      />
      <span>
        {disclosureValue
          ? phrases.preamble +
            phrases[disclosureValue as keyof typeof phrases] +
            phrases.conclusion
          : phrases.notApplicable}
      </span>
    </div>
  );
}

export default function Disclosures({
  frontmatter
}: {
  frontmatter: Frontmatter;
}) {
  return DisclosureType.options.map((disclosureType) => (
    <Disclosure
      key={disclosureType}
      frontmatter={frontmatter}
      disclosureType={disclosureType}
    />
  ));
}
