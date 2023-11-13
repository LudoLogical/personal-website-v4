import { type MusicEntry } from 'data/music';

export default function Submenu({
  entries,
  openWork,
  setOpenWork,
  startIndex
}: {
  entries: (MusicEntry | null)[];
  openWork: number;
  setOpenWork: (newValue: number) => void;
  startIndex?: number;
}) {
  return entries.map((entry, index) => (
    <li key={entry?.title ?? 'MegaPower!'}>
      <a
        className={
          openWork === index + (startIndex ?? 0)
            ? 'font-bold text-primary hover:text-primary focus:!text-primary active:!text-primary'
            : ''
        }
        onClick={() => setOpenWork(index + (startIndex ?? 0))}
      >
        {entry?.title ?? 'MegaPower!'}
      </a>
    </li>
  ));
}
