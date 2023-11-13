'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  originalsData,
  arrangementsData,
  beepboxData,
  type MusicEntry
} from 'data/music';
import { HiFolder, HiMusicalNote, HiSpeakerWave } from 'react-icons/hi2';

function Submenu({
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

export default function Music() {
  const [openWork, setOpenWork] = useState<number>(0);
  const [openBeepbox, setOpenBeepbox] = useState<number>(0);
  const openWorkEntry =
    openWork < originalsData.length
      ? originalsData[openWork]
      : arrangementsData[openWork - originalsData.length];
  const openBeepboxEntry = beepboxData[openBeepbox]!;
  return (
    <div className="mx-auto mb-16 mt-12 flex max-w-2xl flex-col items-center gap-16 p-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Music</h1>
        <p>
          I&apos;ve been conveying emotion through music arrangement and
          composition for more than eight years. My sheet music has been used
          and praised by small groups, a cappella ensembles, and professional
          musicians alike. You can look at and/or listen to some of my work
          here.
        </p>
      </div>
      <div className="flex flex-col gap-5 md:hidden">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Compositions</h2>
          <p className="text-sm text-base-content/80">
            Select an original work or arrangement.
          </p>
        </div>
        <select
          value={openWork}
          className="select select-bordered w-72"
          onChange={(e) => setOpenWork(parseInt(e.target.value))}
        >
          {originalsData.map((entry, index) => (
            <option key={entry?.title ?? 'MegaPower!'} value={index}>
              {entry?.title ?? 'MegaPower!'}
            </option>
          ))}
          {arrangementsData.map((entry, index) => (
            <option key={entry?.title} value={index + originalsData.length}>
              {entry?.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-4 flex flex-row items-center gap-8">
        <ul className="menu rounded-box hidden w-56 bg-neutral text-left md:flex">
          <li>
            <h2 className="menu-title">Original Works</h2>
            <ul>
              <Submenu
                entries={originalsData}
                openWork={openWork}
                setOpenWork={setOpenWork}
              />
            </ul>
          </li>
          <li>
            <h2 className="menu-title">Arrangements</h2>
            <ul>
              <Submenu
                entries={arrangementsData}
                openWork={openWork}
                setOpenWork={setOpenWork}
                startIndex={originalsData.length}
              />
            </ul>
          </li>
        </ul>
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">
              {openWorkEntry?.title ?? 'MegaPower!'}
            </h2>
            <p>by {openWorkEntry?.composer ?? 'Daniel "Ludo" DeAnda'}</p>
          </div>
          {!openWorkEntry && (
            <div className="flex flex-col gap-2">
              <select
                value={openBeepbox}
                className="select select-bordered w-full"
                onChange={(e) => setOpenBeepbox(parseInt(e.target.value))}
              >
                {beepboxData.map((entry, index) => (
                  <option key={entry.title} value={index}>
                    {entry.title}
                  </option>
                ))}
              </select>
              <p className="text-sm text-base-content/80">
                MegaPower! is a collection of chiptune music.
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Link
              href={
                openWorkEntry ? openWorkEntry.audio : openBeepboxEntry.audio
              }
              rel="noopener noreferrer"
              target="_blank"
              className="btn"
            >
              Listen <HiSpeakerWave className="h-4 w-4" />
            </Link>
            <p className="text-sm text-base-content/80">
              Audio previews are hosted on Google Drive.
            </p>
          </div>
          {openWorkEntry && (
            <div className="flex flex-col gap-2">
              <Link
                href={openWorkEntry.files}
                rel="noopener noreferrer"
                target="_blank"
                className="btn"
              >
                Files <HiFolder className="h-4 w-4" />
              </Link>
              <p className="text-sm text-base-content/80">
                MP3, PDF, and MSCZ formats are available.
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Link
              href={
                openWorkEntry ? openWorkEntry.musescore : openBeepboxEntry.link
              }
              rel="noopener noreferrer"
              target="_blank"
              className="btn"
            >
              {openWorkEntry ? 'MuseScore' : 'BeepBox'}{' '}
              <HiMusicalNote className="h-4 w-4" />
            </Link>
            <p className="text-sm text-base-content/80">
              View the score in an interactive web player.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
