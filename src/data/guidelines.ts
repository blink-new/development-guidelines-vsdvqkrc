import { Guideline } from '../types/guidelines';

export const guidelines: Guideline[] = [
  {
    id: 'files-1',
    title: 'Code Organization',
    description: 'Code MUST be organized across multiple files. Large single files with all the code are never acceptable, because they are hard for users to read and make it more likely that future edits will fail.',
    category: 'files'
  },
  {
    id: 'files-2',
    title: 'File Size Limits',
    description: 'Hard requirement: NEVER put all outputted code in a single file that is longer than 300 lines. Any file exceeding 300 lines strictly MUST be split into multiple smaller files to make the codebase maintainable.',
    category: 'files'
  },
  {
    id: 'files-3',
    title: 'Single Responsibility',
    description: 'Each file should be small and should focus on exactly ONE component or functionality. Follow a modular architecture with clear separation of concerns.',
    category: 'files'
  },
  {
    id: 'files-4',
    title: 'Proper Imports/Exports',
    description: 'Use proper imports/exports to share code between files, not global variables.',
    category: 'files'
  },
  {
    id: 'files-5',
    title: 'Ideal File Size',
    description: 'The ideal file is around 200 lines long. Keep most files 200 lines of code or shorter.',
    category: 'files'
  },
  {
    id: 'design-1',
    title: 'Readable Text',
    description: 'Make sure font colors are ALWAYS READABLE and VISIBLE on all background colors with sufficient contrast ratios, including during and after transition states.',
    category: 'design'
  },
  {
    id: 'design-2',
    title: 'Responsive Design',
    description: 'Implement a responsive design with appropriate breakpoints to ensure optimal viewing experience across all viewport sizes, from mobile to desktop.',
    category: 'design'
  },
  {
    id: 'design-3',
    title: 'Typography',
    description: 'Use appropriate line spacing (150% for body, 120% for headings), and 3-font weights maximum.',
    category: 'design'
  },
  {
    id: 'design-4',
    title: 'Color System',
    description: 'Implement a comprehensive color system with at least 6 color ramps (primary, secondary, accent, success, warning, error) plus neutral tones, each with multiple shades for proper hierarchical application.',
    category: 'design'
  },
  {
    id: 'design-5',
    title: 'Spacing System',
    description: 'Use a consistent 8px spacing system, proper alignment, and visual balance.',
    category: 'design'
  },
  {
    id: 'design-6',
    title: 'Single Responsibility',
    description: 'Apply the Single Responsibility Principle to all views (e.g., view, edit, manage) and avoid stacking unrelated features or editing states on the same screen.',
    category: 'design'
  },
  {
    id: 'design-7',
    title: 'Progressive Disclosure',
    description: 'Use progressive disclosure to manage complexity and reveal secondary actions contextually (via modals, drawers, etc.).',
    category: 'design'
  }
];