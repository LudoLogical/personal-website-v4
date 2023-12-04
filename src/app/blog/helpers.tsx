import { extractSubheadingData } from 'data/subheadings';
import { type ReactNode } from 'react';
import Sidebar from './interactive';
import './styles.css';

export default function BlogWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mb-16 mt-12 gap-12 px-12 lg:flex">
      <article className="prose">{children}</article>
      <Sidebar tocData={JSON.stringify(extractSubheadingData(children))} />
    </div>
  );
}
