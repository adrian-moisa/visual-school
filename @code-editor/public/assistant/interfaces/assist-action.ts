/**
 * Actions are used to interact with the user and guide the learning process
 */
export interface AssistAction {
    id: string,
    lessonId: string,
    title: string,
    icon: string,
    urlSlug: string,
    description: string,
    commands: AssistCommand[]
}

export type AssistCommand = Tooltip | Highlight | CodeOverlay

/** Common information for all commands */
interface Command {
    id: string,
    type: string,
    codeBlockId: string,
    message: string
}

export interface Tooltip extends Command {}

export interface Highlight extends Command {}

export interface CodeOverlay extends Command {}