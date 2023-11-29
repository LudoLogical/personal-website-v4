import { type ReactNode } from 'react';
import TableOfContents from './table-of-contents';
import styles from './css/wrapper.module.css';
import Sidebar from './sidebar';

export default function BlogWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mb-16 mt-12 flex gap-12 px-8">
      <article className={`prose ${styles.article}`}>{children}</article>
      <Sidebar>
        <TableOfContents source={children} />
      </Sidebar>
    </div>
  );
}
