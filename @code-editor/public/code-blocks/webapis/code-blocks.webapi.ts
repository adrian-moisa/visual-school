import { Observable } from 'rxjs/Observable'
import { APP, DEBUG } from '../../../config/app'
import 'rxjs'

// Interfaces
import { CodeBlock } from '../interfaces/code-block'
import { Lesson } from '../../lessons/interfaces/lesson'

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:codeBlocksWebApi')
DEBUG.init && debug('Instantiate codeBlocksWebApi')

export const codeBlocksWebApi = {
    
    getCodeBlocks: (lesson: Lesson): Observable<CodeBlock[]> => {
        DEBUG.webapi && debug(`GET codeBlocks:`, lesson.id)

        return Observable.ajax({
            url: `${APP.hostFiles}/@codeBlocks-metadata/code-blocks.json`, // ${lesson.id}
            method: 'GET',
            responseType: 'json' // text
        })
            .map((e: any) => e.response)
            .do(codeBlocks => DEBUG.webapi && debug(`GET OK codeBlocks:`, lesson.id, codeBlocks))
    }

}