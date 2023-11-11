class SkillsEntry {
  skill: string;
  highlight: boolean;
  certification: string | null;
  constructor(skill: string, highlight: boolean, certification?: string) {
    this.skill = skill;
    this.highlight = highlight;
    this.certification = certification ?? null;
  }
}

class SkillsCategory {
  name: string;
  entries: SkillsEntry[];
  constructor(name: string, entries: SkillsEntry[]) {
    this.name = name;
    this.entries = entries;
  }
}

const skillsData = [
  new SkillsCategory('Languages, Frameworks, and Formats', [
    new SkillsEntry('React', true),
    new SkillsEntry('Next.js', true),
    new SkillsEntry('MDX', false),
    new SkillsEntry('TypeScript', true),
    new SkillsEntry('JavaScript', true),
    new SkillsEntry('CSS', false),
    new SkillsEntry('HTML', false),
    new SkillsEntry('jQuery', false),
    new SkillsEntry('Java', true),
    new SkillsEntry('Kotlin', false),
    new SkillsEntry('Node.js', false),
    new SkillsEntry('Python', false),
    new SkillsEntry('C++', false),
    new SkillsEntry('SQL', false),
    new SkillsEntry('Bash', false),
    new SkillsEntry('Markdown', false),
    new SkillsEntry('CSV', false),
    new SkillsEntry('LaTeX', false)
  ]),
  new SkillsCategory('Editors, Tools, and Technologies', [
    new SkillsEntry('IntelliJ IDEA', true),
    new SkillsEntry('WebStorm', false),
    new SkillsEntry('PyCharm', false),
    new SkillsEntry('CLion', false),
    new SkillsEntry('DataGrip', false),
    new SkillsEntry('Figma', true),
    new SkillsEntry('Visual Studio Code', true),
    new SkillsEntry('Eclipse', false),
    new SkillsEntry('Nano', false),
    new SkillsEntry('Vim', false),
    new SkillsEntry('SSH', false),
    new SkillsEntry('AWS', false),
    new SkillsEntry('Vercel', false),
    new SkillsEntry('Postman', false),
    new SkillsEntry('Insomnia', false),
    new SkillsEntry('MySQL', false),
    new SkillsEntry('PostgreSQL', false),
    new SkillsEntry('tRPC', false),
    new SkillsEntry('Tailwind CSS', true),
    new SkillsEntry('styled-components', false),
    new SkillsEntry('Jest', false),
    new SkillsEntry('React Testing Library', false),
    new SkillsEntry('ESLint', false),
    new SkillsEntry('Prettier', false),
    new SkillsEntry('npm', false),
    new SkillsEntry('Yarn', false),
    new SkillsEntry('pnpm', true),
    new SkillsEntry('Git', true),
    new SkillsEntry('GitHub', true),
    new SkillsEntry('Jira', false),
    new SkillsEntry('Notion', true),
    new SkillsEntry('Confluence', false),
    new SkillsEntry('Slack', false),
    new SkillsEntry('Discord', true),
    new SkillsEntry('Microsoft 365', false),
    new SkillsEntry('Google Workspace', false)
  ]),
  new SkillsCategory('Techniques and Soft Skills', [
    new SkillsEntry('Design', true),
    new SkillsEntry('Diagramming', true),
    new SkillsEntry('Problem Solving', true),
    new SkillsEntry('Modularization (DRY)', false),
    new SkillsEntry('Debugging', false),
    new SkillsEntry('Testing', false),
    new SkillsEntry('Agile', false),
    new SkillsEntry('Documentation', true),
    new SkillsEntry('Mentorship', true),
    new SkillsEntry('Communication', false),
    new SkillsEntry(
      'Spanish (CA Seal of Biliteracy)',
      true,
      'https://www.cde.ca.gov/sp/el/er/sealofbiliteracy.asp'
    )
  ])
];

export default skillsData;
