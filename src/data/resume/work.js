/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Innovature Software Labs, Kochi, Kerala',
    position: 'Software Engineer',
    startDate: '2022-03',
    endDate: '2024-06',
    highlights: [
      'Developed and maintained responsive and user-friendly web applications using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and optimal performance.',
      'Integrated RESTful APIs to fetch and display real-time data, utilizing RxJS observables to manage asynchronous data streams effectively.',
      'Actively participated in Agile development practices, attending daily stand-ups and contributing to sprint planning and retrospectives.',
      'Mentored junior developers, providing guidance on best practices and assisting with onboarding new team members.'
    ],
  },
  {
    name: 'Innovature Software Labs, Kochi, Kerala',
    position: 'Associate Software Developer',
    startDate: '2021-03',
    endDate: '2022-03',
    highlights: [
      'Assisted in the creation and maintenance of technical documentation, ensuring accurate and up-to-date records of project progress and specifications.',
      'Assisted in troubleshooting and debugging issues within the codebase, employing problem-solving skills to identify root causes and implement effective solutions, thereby improving overall system stability and performance.',
      'Collaborated with senior developers to implement new features and enhancements using Angular and React.',
    ],
  },
  {
    name: 'Camerinfolks Pvt. Ltd, Kochi, Kerala',
    position: 'Associate Software Developer',
    startDate: '2020-01',
    endDate: '2021-06',
    highlights: [
      'Actively participated in team meetings and brainstorming sessions, sharing ideas and insights for project improvement.',
      'Demonstrated strong problem-solving skills and a willingness to learn and adapt to new technologies and tools.',
      'Gained hands-on experience with Angular Material, implementing responsive and visually appealing user interfaces.',
    ],
  },
];

export default work;
