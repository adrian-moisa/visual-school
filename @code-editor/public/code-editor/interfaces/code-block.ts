/**
 * Code blocks are fragments of code that can be handled standalone.
 * A lesson is composed of code blocks and assistant-steps.
 * Code blocks can be rendered in code editor or in code-overlay.
 * <!> Lessons source files are stored online in a github repo.
 *     A parser reads DSL html tags that render the code blocks and code samples.
 *     Code blocks store the generated code fragements in the db.
 *     It-s easier to project code blocks as lesson code than to augments lesson code with metadata.
 * <!> Planned features: sharing, comments and statistics.
 */
export interface CodeBlock{
    id: string,
    lessonId: string,
    urlSlug: string,
    icon: string,
    title: string,
    description: string,
    startLine: number,
    endLine: number,
    code: string,
}