import MusicInteractive from './interactive';

export const metadata = {
  title: 'Music'
};

export default function Music() {
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
      <MusicInteractive />
    </div>
  );
}
