import ExperienceInteractive from './interactive';

export const metadata = {
  title: 'Experience'
};

export default function Experience() {
  return (
    <div className="mx-auto mb-16 mt-12 flex flex-col items-center gap-14 p-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Experience</h1>
        <p className="max-w-2xl">
          In my nine years of making software, I&apos;ve worked on plenty of
          personal projects, collaborated with over a dozen development teams,
          and written code for multiple commercial applications. I&apos;ve also
          applied my love of software engineering to teach others about the
          field that I love. Here&apos;s a list of some of my more notable
          endeavors:
        </p>
      </div>
      <ExperienceInteractive />
    </div>
  );
}
