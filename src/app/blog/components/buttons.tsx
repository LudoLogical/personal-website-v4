'use client';

import clsx from 'clsx';
import { type Frontmatter } from 'data/frontmatter';
import { useState } from 'react';
import {
  HiOutlineChatBubbleOvalLeft,
  HiOutlineChevronDown,
  HiSparkles
} from 'react-icons/hi2';
import Citations from './citations';
import Disclosures from './disclosures';

export default function Buttons({ frontmatter }: { frontmatter: Frontmatter }) {
  const [showCitations, setShowCitaitons] = useState<boolean>(false);
  const [showDisclosures, setShowDisclosures] = useState<boolean>(false);
  return (
    <>
      {(showCitations || showDisclosures) && (
        <div className="flex flex-col gap-2 text-base-content/50">
          {showDisclosures && <Disclosures frontmatter={frontmatter} />}
          {showCitations && <Citations frontmatter={frontmatter} />}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        <div className="flex flex-nowrap gap-2">
          <button className="btn">
            <HiSparkles className="h-5 w-5 text-primary" />
            <span className="text-base">10,000</span>
          </button>
          <button className="btn">
            <HiOutlineChatBubbleOvalLeft className="h-5 w-5" />
            <span className="text-base">53</span>
          </button>
        </div>
        <div className="flex flex-nowrap gap-2">
          <button
            onClick={() => setShowDisclosures(!showDisclosures)}
            className="btn w-fit"
          >
            <span className="text-base">Disclosures</span>
            <HiOutlineChevronDown
              className={clsx('h-4 w-4', showDisclosures ? 'rotate-180' : null)}
            />
          </button>
          <button
            onClick={() => setShowCitaitons(!showCitations)}
            className="btn w-fit"
          >
            <span className="text-base">Cite</span>
            <HiOutlineChevronDown
              className={clsx('h-4 w-4', showCitations ? 'rotate-180' : null)}
            />
          </button>
        </div>
      </div>
    </>
  );
}
