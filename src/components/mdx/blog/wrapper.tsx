import { type ReactNode } from 'react';
import { extractSubheadingData } from '~/utils/table-of-contents';
import styles from './css/wrapper.module.css';
import Sidebar from './sidebar';

export default function BlogWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mb-16 mt-12 gap-12 px-8 lg:flex">
      <article className={`prose ${styles.article}`}>{children}</article>
      <Sidebar tocData={JSON.stringify(extractSubheadingData(children))} />
    </div>
  );
}
