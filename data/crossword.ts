class CrosswordEntry {
  date: string;
  title: string;
  difficulty: string;
  file: string;
  constructor(date: string, title: string, difficulty: string, file: string) {
    this.date = date;
    this.title = title;
    this.difficulty = difficulty;
    this.file = file;
  }
}

const crosswordData = [
  new CrosswordEntry('11/03/2023', 'Candy Store', 'Hard', 'candy-store'),
  new CrosswordEntry(
    '10/22/2023',
    'Glitz and Glamour',
    'Easy',
    'glitz-and-glamour'
  ),
  new CrosswordEntry(
    '10/18/2023',
    'Holiday Feeling',
    'Medium',
    'holiday-feeling'
  ),
  new CrosswordEntry(
    '03/01/2023',
    'Happy Mar10 Day!',
    'Medium',
    'happy-mar10-day'
  )
];

export default crosswordData;
