import ExperienceInteractive from './interactive';

export const metadata = {
  title: 'Experience'
};

export default function Experience() {
  return (
    <div className="mx-auto mb-16 mt-12 flex flex-col items-center gap-4 p-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Experience</h1>
        <div className="max-w-2xl">
          <p>
            This is a list of all the positions I&apos;ve held and the most
            significant projects I&apos;ve worked on in the decade I&apos;ve
            spent making software. Highlights include collaborations with over a
            dozen development teams, contributions to multiple commercial
            software-as-a-service (SaaS) projects, and leadership experience
            from a variety of sources, including my current job.
            <br />
          </p>
        </div>
      </div>
      <ExperienceInteractive />
    </div>
  );
}
