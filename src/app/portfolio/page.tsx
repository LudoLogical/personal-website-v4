import clsx from 'clsx';
import SuperLink from '~/components/links/standard';
import PortfolioInteractive from './interactive';

export const metadata = {
  title: 'Portfolio'
};

export default function Portfolio() {
  return (
    <div className="mx-auto mb-16 mt-12 flex max-w-2xl flex-col gap-16 p-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Portfolio</h1>
        <p>
          Some of my work is created in or best understood through media other
          than plain text. This is a selection of such media from some of my
          favorite endeavors. This very website counts, too! I&apos;m
          particularly proud of how flexible and accessible it is. Try viewing
          it on different devices, with different dimensions, and at different
          zoom levels!
        </p>
        <PortfolioInteractive />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Blog (In Development)</h2>
        <p>
          This part of my website is also being built with accessibility in
          mind. Try toggling <code>prefers-reduced-motion</code> while looking
          at the demo page!
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <SuperLink href="/blog/elements" external className="btn">
            Elements
          </SuperLink>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Nebula Platform</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <SuperLink href="https://www.figma.com/design/cNyxUwkztabajPhTxlYLcx?node-id=3-4" external className="btn">
            Figma File
          </SuperLink>
        </div>
        <p>
          The following are diagrams I created in Google Drawings to help the
          Platform team achieve and maintain a common understanding of different
          aspects of the project.
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <SuperLink href="/nebula-platform-architecture.pdf" toFile external className="btn">
            Architecture
          </SuperLink>
          <SuperLink href="/nebula-platform-terminology.pdf" toFile external className="btn">
            Terminology
          </SuperLink>
          <SuperLink href="/nebula-platform-sso-workflow.pdf" toFile external className="btn">
            SSO Approaches
          </SuperLink>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Project Owl (On Hiatus)</h2>
        <p>
          This is one of my passion projects. The end product would be a web
          application that would help people who play digital and physical games
          search for, learn about, and review those games more easily and
          comprehensively than current mainstream services allow. I hope to
          continue working on it soon!
        </p>
        <h3 className="font-bold">Without Using External APIs</h3>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <SuperLink href="/project-owl-uml-classes-no-apis.png" toFile external className="btn">
            UML Class Diagram
          </SuperLink>
          <SuperLink href="/project-owl-erd-no-apis.png" toFile external className="btn">
            Entity Relationship Diagram
          </SuperLink>
        </div>
        <h3 className="font-bold">Using External APIs</h3>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <SuperLink href="/project-owl-uml-classes-with-apis.png" toFile external className="btn">
            UML Class Diagram
          </SuperLink>
          <SuperLink href="/project-owl-erd-with-apis.png" toFile external className="btn">
            Entity Relationship Diagram
          </SuperLink>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Sundries</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <SuperLink href="https://docs.google.com/spreadsheets/d/1ge_1xiG_Dnwh_sw68jK_xDT-uEh1qzDFhOELZkXB_5o/edit" external className="btn">
            Keyboard Shortcuts (Yes, Really!)
          </SuperLink>
        </div>
      </div>
    </div>
  );
}
