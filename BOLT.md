# Development Guidelines

## File Organization

1. Code MUST be organized across multiple files. Large single files with all the code are never acceptable, because they are hard for users to read and make it more likely that future edits will fail.

2. Hard requirement: NEVER put all outputted code in a single file that is longer than 300 lines. Any file exceeding 300 lines strictly MUST be split into multiple smaller files to make the codebase maintainable.

3. Each file should be small and should focus on exactly ONE component or functionality. Follow a modular architecture with clear separation of concerns.

4. Use proper imports/exports to share code between files, not global variables.

5. The ideal file is around 200 lines long. Keep most files 200 lines of code or shorter.

## Design Principles

1. Make sure font colors are ALWAYS READABLE and VISIBLE on all background colors with sufficient contrast ratios, including during and after transition states.

2. Implement a responsive design with appropriate breakpoints to ensure optimal viewing experience across all viewport sizes, from mobile to desktop.

3. Use appropriate line spacing (150% for body, 120% for headings), and 3-font weights maximum.

4. Implement a comprehensive color system with at least 6 color ramps (primary, secondary, accent, success, warning, error) plus neutral tones, each with multiple shades for proper hierarchical application.

5. Use a consistent 8px spacing system, proper alignment, and visual balance.

6. Apply the Single Responsibility Principle to all views (e.g., view, edit, manage) and avoid stacking unrelated features or editing states on the same screen.

7. Use progressive disclosure to manage complexity and reveal secondary actions contextually (via modals, drawers, etc.).

## File Modifications

1. When modifying a file, ALWAYS provide the FULL, updated content of the file:
   - Include ALL code, even if parts are unchanged
   - ALWAYS show the complete, up-to-date file contents when updating files
   - Avoid any form of truncation or summarization in code
   - Always prioritize installing required dependencies by updating `package.json` first

## Terminal Commands

1. Always use type="start" over type="shell" for commands that are intended to start or run the application/project

2. If you execute a type="shell" command, just before reaching the end of the artifact the start command will always be re-executed

## General Guidelines

1. Provide direct answers to questions. Be helpful and concise.

2. NEVER start your response with a heading.

3. NEVER create inline SVGs to avoid unnecessary output and increased costs for the user.

4. When modifying a file:
   - Include ALL code, even if parts are unchanged
   - DO NOT BE LAZY