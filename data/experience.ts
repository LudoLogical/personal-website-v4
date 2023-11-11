class ExperienceEntry {
  year: number;
  title: string;
  sponsor: string | null;
  skills: string[];
  link: string | null;
  github: string | null;
  featured: boolean;
  constructor(
    year: number,
    title: string,
    sponsor: string | null,
    skills: string[],
    link: string | null,
    github: string | null,
    featured?: boolean
  ) {
    this.year = year;
    this.title = title;
    this.sponsor = sponsor;
    this.skills = skills;
    this.link = link;
    this.github = github;
    this.featured = featured ?? false;
  }
}

const experienceData = [
  new ExperienceEntry(
    2023,
    'Personal Website v4',
    null,
    ['Next.js', 'React', 'TypeScript', 'MDX', 'Design', 'Figma'],
    '/',
    'https://github.com/LudoLogical/personal-website-v4',
    true
  ),
  new ExperienceEntry(
    2023,
    'Integrated Development Advisor',
    'CodeDay Labs',
    ['Mentorship', 'Debugging', 'Terminal', 'Git', 'GitHub', 'NPM'],
    'https://labs.codeday.org/',
    null,
    true
  ),
  new ExperienceEntry(
    2023,
    'Personal Website v3',
    null,
    ['Next.js', 'React', 'TypeScript', 'Design'],
    null,
    'https://github.com/LudoLogical/personal-website-v3'
  ),
  new ExperienceEntry(
    2023,
    'Nebula Platform',
    'Nebula Labs',
    [
      'Next.js',
      'React',
      'TypeScript',
      'Figma',
      'Documentation',
      'Design',
      'tRPC',
      'GitHub',
      'Vercel'
    ],
    null,
    'https://github.com/UTDNebula/platform',
    true
  ),
  new ExperienceEntry(
    2023,
    'Personal Website v2',
    null,
    ['Next.js', 'React', 'TypeScript', 'Design'],
    null,
    'https://github.com/LudoLogical/personal-website-v2'
  ),
  new ExperienceEntry(
    2022,
    'Project Owl (On\xa0Hiatus)',
    null,
    ['Next.js', 'React', 'TypeScript', 'Diagramming'],
    'https://project-owl.fly.dev/',
    'https://github.com/LudoLogical/project-owl'
  ),
  new ExperienceEntry(
    2022,
    'Features for Decision Tree',
    'Cvent',
    [
      'Java',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Jira',
      'Communication',
      'Documentation',
      'Agile'
    ],
    'https://www.cvent.com/en/portals-scope',
    null,
    true
  ),
  new ExperienceEntry(
    2021,
    'Package Tracking Page',
    'Onfleet',
    [
      'React',
      'JavaScript',
      'GitHub',
      'SSH',
      'Diagramming',
      'Documentation',
      'Agile'
    ],
    'https://onfleet.com/blog/last-mile-carrier-tracking/',
    null,
    true
  ),
  new ExperienceEntry(
    2021,
    'Organization Website',
    'Novis A Cappella',
    ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    'https://novisutd.org/',
    'https://github.com/NovisACappella/novisacappella.github.io'
  ),
  new ExperienceEntry(
    2020,
    'Personal Website v1',
    null,
    ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    null,
    'https://github.com/LudoLogical/personal-website-v1'
  ),
  new ExperienceEntry(
    2020,
    'University Student Network Study',
    'UT Dallas',
    ['Python', 'GitHub', 'UNIX', 'SSH'],
    'https://arxiv.org/abs/2104.01261',
    null,
    true
  ),
  new ExperienceEntry(
    2020,
    'Phage Game',
    'CodeDay',
    ['Java', 'Processing 3'],
    null,
    'https://github.com/LudoLogical/huevo-juego'
  ),
  new ExperienceEntry(
    2019,
    'Huevo Juego',
    'CodeDay',
    ['Java', 'Processing 3'],
    null,
    'https://github.com/LudoLogical/huevo-juego'
  ),
  new ExperienceEntry(
    2018,
    'Pinball Game',
    'CodeDay',
    ['Python', 'PyGame', 'PyInstaller'],
    null,
    'https://github.com/LudoLogical/pinball-game'
  ),
  new ExperienceEntry(
    2018,
    'Chef Spud',
    'CodeDay',
    ['Python', 'PyGame', 'PyInstaller'],
    null,
    'https://github.com/LudoLogical/roguelike-game'
  ),
  new ExperienceEntry(
    2018,
    'In\xa0Construction',
    'CodeDay',
    ['Python', 'PyGame', 'PyInstaller'],
    null,
    'https://github.com/LudoLogical/in-construction'
  ),
  new ExperienceEntry(
    2017,
    'Quotemaker',
    'CodeDay',
    ['HTML', 'CSS', 'JavaScript'],
    'https://jcwang111.github.io/quotemaker',
    'https://github.com/jcwang111/quotemaker'
  ),
  new ExperienceEntry(
    2017,
    'Super Hyper Buff',
    'CodeDay',
    ['HTML', 'CSS', 'JavaScript'],
    null,
    'https://github.com/LudoLogical/superhyperbuff'
  ),
  new ExperienceEntry(
    2016,
    'With These Eyes',
    'CodeDay',
    ['HTML', 'CSS', 'JavaScript'],
    null,
    'https://github.com/LudoLogical/with-these-eyes'
  ),
  new ExperienceEntry(
    2015,
    'You Sea, You Eat',
    'CodeDay',
    ['HTML', 'CSS', 'JavaScript'],
    null,
    'https://github.com/LudoLogical/you-sea-you-eat'
  )
];

export default experienceData;
