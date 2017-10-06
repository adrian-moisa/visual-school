import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';
import { DEBUG } from '../../../config/app'
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
import { lessonsWebApi } from '../webapis/lessons.webapi';

// Debug
let debugOff = (...any: any[]) => { }, debug = require('debug')('vsc:lessonsService');
DEBUG.init && debug('Instantiate lessonsService');

// State
declare var store: Store<AppState>;
declare var store$: Observable<AppState>;

export const lessonsService = {

    // ====== DATA ======

    getLessons: (chapter: Chapter): Observable<Lesson[]> => {
        DEBUG.data && debug('Get lessons:', chapter.title); 
        store.dispatch(LessonsDataActions.getLessons(chapter));
        return lessonsService.lessons$()
    },
    
    lessons$: (): Observable<Lesson[]> => {
        DEBUG.data && debug('Observable lessons');
        return store$.map(LESSONS_LIST)
            .filter(e => e !== undefined && e !== null)
            .distinctUntilChanged();
    },
    
    lesson$: (): Observable<Lesson> => {
        DEBUG.data && debug('Observable lesson');
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
        
        DEBUG.map && debug('Map lessons to navigation items:', navItems);
        return navItems;
    },
    
    // ====== LOGIC ======
    
    // ====== UTILS ======

}