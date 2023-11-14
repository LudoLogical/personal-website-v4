import { HiLightBulb, HiPuzzlePiece } from 'react-icons/hi2';
import crosswordData from 'data/crossword';
import clsx from 'clsx';
import SuperLink from '~/components/super-link';

export const metadata = {
  title: 'Crossword'
};

export default function Crossword() {
  return (
    <div className="mx-auto mb-16 mt-12 flex max-w-2xl flex-col gap-16 p-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Crossword</h1>
        <p>
          I make crossword puzzles sometimes! This is a place for me to put all
          of my favorites. You can think of it as a fun bonus for checking out
          my website! I&apos;ve tried my best to label them by difficulty, but
          your mileage may vary. &#128517;
        </p>
      </div>
      <div className="mx-4 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden xs:table-cell">Date</th>
              <th>Title</th>
              <th className="pl-2 text-center">Difficulty</th>
              <th className="px-1 text-center">Puzzle</th>
              <th className="px-1 text-center">Solution</th>
            </tr>
          </thead>
          <tbody>
            {crosswordData.map((entry) => (
              <tr key={entry.title}>
                <td className="hidden xs:table-cell">{entry.date}</td>
                <td>{entry.title}</td>
                <td className="pl-2 text-center">
                  <span
                    className={clsx('badge', {
                      'badge-success': entry.difficulty === 'Easy',
                      'badge-primary': entry.difficulty === 'Medium',
                      'badge-error': entry.difficulty === 'Hard'
                    })}
                  >
                    {entry.difficulty}
                  </span>
                </td>
                <td className="p-1 text-center">
                  <SuperLink
                    href={'/crossword/' + entry.file + '.pdf'}
                    external
                    styledIcon
                    className="btn-sm"
                  >
                    <HiPuzzlePiece className="h-4 w-4" />
                  </SuperLink>
                </td>
                <td className="p-1 text-center">
                  <SuperLink
                    href={'/crossword/' + entry.file + '-sol.pdf'}
                    external
                    styledIcon
                    className="btn-sm"
                  >
                    <HiLightBulb className="h-4 w-4" />
                  </SuperLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
