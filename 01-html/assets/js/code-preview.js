// Globals
// TODO Use module to prevent global scope polution
let contentEl = document.querySelector('body > .content'),
    navMenuEl,
    navMenuBtnEl,
    editorEl,
    codeEditorEl,
    codeEditorBtnEl,
    editor;

// Debug
let debug, debugOff = function () { }; // Disable all logs for the moment
debug = console.log; // Uncomment to enable debug

init();

// TODO
// Remember if code editor and menu are open or closed using local storage
// Refresh code
// Show a modal explaining how this works
// JsOn metadata for code replay
// Steps, Modals, Tooltips
// Follow on twitter, discuss on slack

/**
 * Enable live editing tools for the static html document
 */
function init() {
    debug('Initialise');

    // Load source code than init editor
    // TODO Use promise
    getSourceCode(text => {
        initEditor(text);
    });

    // Retrieve data used to assist the student
    // TODO Use promise
    getChaptersAndLessons(chapters => {

        let chapter = getCurrChapter(chapters);
        let lessons = getChapterLessons(chapter);
        let lesson = getCurrLesson(lessons);
        let links = getNavigationLinks(lessons);

        // Quick menu
        initQuickNavMenu(links, chapter, lesson);

        // Code assistent
        initCodeAssitent(chapter, lesson);

    });
}

/**
 * Build a quick menu that gives easy access options
 */
function initQuickNavMenu(links, chapter, lesson) {
    debug('Initialise quick navigation menu');
    debugOff('Menu links:', links);
    debugOff('Chapter:', chapter);

    // Is visible
    isVis = JSON.parse(localStorage.getItem("isNavMenuVis"));
    if (isVis === null) {
        isVis = false;
        localStorage.setItem("isNavMenuVis", isVis);
    }

    // Prepare navigation menu and navigation button
    let navMenuAndBtn = `
    
        <!-- Toggle menu -->
        <div id="lesson-navigation-btn" class="button quick-menu-item ${isVis ? 'active' : '' }" 
            onclick="toggleNavMenu()" title="Lessons menu">
            <i class="fa fa-list" aria-hidden="true"></i>
        </div>

        <div id="lesson-navigation" class="menu side ${isVis ? 'visible' : 'hidden' }">

            <!-- Header -->
            <div class="header">
                <!-- <div class="close fa fa-close" onclick="toggleNavMenu()"></div> -->
            </div>

            <!-- Home -->
            <a class="link" href="https://github.com/visual-space/visual-school">
                <div class="icon fa fa-home"></div>
                <div class="info">
                    <div class="title">Home</div>
                    <div class="label">Return to VisualSchool on Github</div>
                </div>
            </a>
            
            <!-- Code samples -->
            <a class="link" href="/index.html">
                <div class="icon fa fa-code"></div>
                <div class="info">
                    <div class="title">Code samples</div>
                    <div class="label">View all chapters</div>
                </div>
            </a>

            <!-- Chapter -->
            <div class="chapter">
                <h1 class="title">${chapter.title}</h1>
                <h2 class="subtitle">${chapter.description}</h2>
                <a class="lesson" href="https://github.com/visual-space/visual-school/tree/master${chapter.url}">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    Read the lesson
                </a>
            </div>
                
            <!-- Menu items -->
            ${ links.reduce((t, link) => t + `
                
                <a class="link ${link.active === true ? 'active' : '' }"  href="${link.url}">
                    <div class="icon fa fa-${link.icon}"></div>
                    <div class="info">
                        <div class="title">${link.title}</div>
                        <div class="label">${link.description}</div>
                    </div>
                </a>

            `, '')}

            <!-- Footer -->
            <div class="footer"></div>
        </div>
    `;

    debugOff('Nav menu and button template:', navMenuAndBtn);

    // Insert in the page
    document.body.insertAdjacentHTML('beforeend', navMenuAndBtn);
    
    // Cache page elements
    navMenuEl = document.querySelector('#lesson-navigation');
    navMenuBtnEl = document.querySelector('#lesson-navigation-btn');
    debugOff('Navigation menu:', navMenuEl);
    debugOff('Navigation menu button:', navMenuBtnEl);

}

/**
 * Toggle main menu visibility
 * TODO Find data binding options besides web components
 */
function toggleNavMenu(){
    debug('Toggle menu visibility');
    if (navMenuEl.classList.contains('visible')) {

        navMenuEl.classList.remove('visible');
        navMenuEl.classList.add('hidden');
        navMenuBtnEl.classList.remove('active');

        localStorage.setItem("isNavMenuVis", false);
    } else {

        navMenuEl.classList.add('visible');
        navMenuEl.classList.remove('hidden');
        navMenuBtnEl.classList.add('active');
        
        localStorage.setItem("isNavMenuVis", true);
    }
}

/**
 * It runs a series of steps designed to orient the user
 * Each lesson has metadata attached that is used to control the presentation
 */
function initCodeAssitent(lesson) {
    debug('Initialise code assistent');
    debugOff('Lesson data:', lesson);

}

/**
 * Initialise editor
 */
function initEditor(sourceCode) {
    debug('Initialise ACE editor');
    debugOff('Source code:', sourceCode);

    // Is visible
    isVis = JSON.parse(localStorage.getItem("isCodeEditorVis"));
    if (isVis === null) {
        isVis = false;
        localStorage.setItem("isCodeEditorVis", isVis);
    }

    // Prepare navigation menu and navigation button
    let codeEditorAndBtn = `
        <!-- Toggle code editor -->
        <div id="code-editor-btn" class="button quick-menu-item ${isVis ? 'active' : '' }" 
            onclick="toggleCodeEditor()" title="Code editor">
            <i class="fa fa-code" aria-hidden="true"></i>
        </div>

        <!-- Code editor -->
        <div id="code-editor" class="${isVis ? 'visible' : 'hidden' }"></div>
    `;

    debugOff('Code editor and button template:', codeEditorAndBtn);

    // Insert in the page
    document.body.insertAdjacentHTML('beforeend', codeEditorAndBtn);
    
    // Cache page elements
    codeEditorEl = document.querySelector('#code-editor');
    codeEditorBtnEl = document.querySelector('#code-editor-btn');
    debugOff('Code editor:', codeEditorEl);
    debugOff('Code editor button:', codeEditorBtnEl);

    // Prepare contents
    codeEditorEl.appendChild(document.createTextNode(sourceCode));

    // Start ace code editor
    editor = ace.edit("code-editor");
    editor.setTheme("ace/theme/xcode");
    var JavaScriptMode = ace.require("ace/mode/html").Mode;
    editor.session.setMode(new JavaScriptMode());
    editor.getSession().setTabSize(4);
    editor.getSession().setUseSoftTabs(true);
    editor.getSession().setUseWrapMode(true);

    // Update document
    editor.getSession().on('change', onEditorChange);

}

/**
 * Toggle main editor visibility
 * TODO Find data binding options besides web components
 * TODO Or convert to an util
 */
function toggleCodeEditor(){
    debug('Toggle editor visibility');
    if (codeEditorEl.classList.contains('visible')) {

        codeEditorEl.classList.remove('visible');
        codeEditorEl.classList.add('hidden');
        codeEditorBtnEl.classList.remove('active');

        localStorage.setItem("isCodeEditorVis", false);
    } else {

        codeEditorEl.classList.add('visible');
        codeEditorEl.classList.remove('hidden');
        codeEditorBtnEl.classList.add('active');
        
        localStorage.setItem("isCodeEditorVis", true);
    }
}

/**
 * On editor change
 */
function onEditorChange(e) {
    debug('On editor change');
    let updated = editor.getValue();
    localStorage.setItem("editedCode", updated);
    contentEl.innerHTML = updated;
}

// ====== UTILS ======

function getSourceCode(callback) {
    fetch(window.location.href, {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'text/plain'
        })
    }).then(response => {
        response.text().then(function (text) {
            callback(text);
        });
    });
}

function getNavigationLinks(lessons) {
    debug('Get navigation links');


    // Path name
    let lessonUrl = window.location.href;
    let pathname = new URL(lessonUrl).pathname;
    debugOff('Path name:', pathname);

    // All lessons in this chapter
    lessonsIds = Object.keys(lessons);
    let links = lessonsIds.map(id => ({
        url: id,
        title: lessons[id].title,
        description: lessons[id].description,
        icon: lessons[id].icon,
        active: id === pathname
    }))

    debug('Links', links);
    return links;
}

/**
 * Get all chapters with lessons
 * <!> Currently Chapters has Lessons data already attached
 */
function getChaptersAndLessons(callback) {
    debug('Get chapters and lessons');

    let lessonUrl = window.location.href;

    // Path name
    let pathname = new URL(lessonUrl).pathname;
    debug('Path name:', pathname);

    // Chapter name
    let chapterName = pathname.split('/')[1];
    let lessonName = pathname.split('/')[2];
    debug('Chapter name:', chapterName);
    debug('Lesson name:', lessonName);

    // Chapters json url
    let chaptersUrl = new URL(`../${chapterName}/assets/data/chapters.json`, lessonUrl);
    debug('Chapters json url:', chaptersUrl.href);

    // Fetch chapters 
    fetch(chaptersUrl, {
        method: 'get'
    }).then(response => {
        response.json().then(function (chapters) {

            // Add url keys
            chaptersIds = Object.keys(chapters);
            chaptersIds.forEach(id => chapters[id].url = id)

            callback(chapters)
        });
    });

}

/**
 * Get current chapter
 */
function getCurrChapter(chapters) {
    debug('Get current chapter');

    let lessonUrl = window.location.href;

    // Path name
    let pathname = new URL(lessonUrl).pathname;
    debug('Path name:', pathname);

    // Chapter name
    let chapterName = pathname.split('/')[1];
    debug('Chapter name:', chapterName);

    // Get only the current lesson 
    let chapter = chapters['/' + chapterName];
    debug(`Chapter "${chapterName}":`, chapter);

    return chapter;
}

/**
 * Get chapter lessons
 */
function getChapterLessons(chapter) {
    debug(`Get chapter "${chapter.title}" lessons`);
    
    let lessons = chapter.lessons;
    debug(`Lessons:`, lessons);

    return lessons;
}

/**
 * Get current lesson
 */
function getCurrLesson(lessons) {
    debug('Get current lesson');

    let lessonUrl = window.location.href;

    // Path name
    let pathname = new URL(lessonUrl).pathname;
    debug('Path name:', pathname);

    // Chapter name
    let chapterName = pathname.split('/')[1];
    let lessonName = pathname.split('/')[2];
    debug('Chapter name:', chapterName);
    debug('Lesson name:', lessonName);

    // Get only the current lesson 
    let lesson = lessons[pathname];
    debug(`Lesson "${lessonName}":`, lesson);

    return lesson;
}