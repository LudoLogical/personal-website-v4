import Link from 'next/link';
import { HiCheck, HiDocument, HiDocumentCheck, HiLink } from 'react-icons/hi2';
import crosswordData from 'data/crossword';

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
              <th>Puzzle</th>
              <th>Difficulty</th>
              <th>
                <HiLink className="mx-auto h-3 w-3" />
              </th>
              <th>
                <HiCheck className="mx-auto h-3 w-3" />
              </th>
            </tr>
          </thead>
          <tbody>
            {crosswordData.map((entry) => (
              <tr key={entry.title}>
                <td className="hidden xs:table-cell">{entry.date}</td>
                <td>{entry.title}</td>
                <td>{entry.difficulty}</td>
                <td>
                  <Link href={'/crossword/' + entry.file + '.pdf'}>
                    <HiDocument className="mx-auto h-4 w-4" />
                  </Link>
                </td>
                <td>
                  <Link href={'/crossword/' + entry.file + '-sol.pdf'}>
                    <HiDocumentCheck className="mx-auto h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
