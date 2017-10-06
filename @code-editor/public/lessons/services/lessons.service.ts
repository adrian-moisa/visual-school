import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';
import 'rxjs';

// Interfaces
import { AppState } from '../../shared/interfaces/app-state';
import { Chapter } from '../../chapters/interfaces/chapter';
import { Lesson } from '../interfaces/lesson';
import { NavItem } from '../../navigator/interfaces/navigator'

// State
import { LessonsDataActions } from '../state/lessons-data.actions';
import { LESSONS_LIST, LESSON } from '../state/lessons.selectors';

// Webapi
import { LessonsWebApi } from '../webapis/lessons.webapi';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:LessonsService');
debug('Instantiate LessonsService');

// State
declare var store: Store<AppState>;
declare var store$: Observable<AppState>;

/** 
 * LessonsService 
 * Handles lesons in the app.
 */
export const LessonsService = {

    // ====== DATA ======

    getLessons: (chapter: Chapter): Observable<Lesson[]> => {
        debug('Get lesson content:', chapter.title); 
        store.dispatch(LessonsDataActions.getLessons(chapter));
        return LessonsService.lessons$()
    },
    
    lessons$: (): Observable<Lesson[]> => {
        debug('Get lessons observable');
        return store$.map(LESSONS_LIST)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged();
    },
    
    lesson$: (): Observable<Lesson> => {
        debug('Get lesson observable');
        return store$.map(LESSON)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged();
    },

    // ====== MAPS ======

    mapLessonsToNav: (lessons: Lesson[]): NavItem[] => {
        let navItems: NavItem[] = lessons.map(lesson => ({
            active: false, 
            caption: lesson.title,
            description: lesson.description,
            icon: lesson.icon,
            url: lesson.file,
        }))
        
        debug('Map lessons to navigation items:', navItems);
        return navItems;
    },
    
    // ====== LOGIC ======
    
    // ====== UTILS ======

}