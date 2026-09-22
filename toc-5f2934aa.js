// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><li class="part-title">IE 2025</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Home.html">Home</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Bulletin_Board.html">Bulletin Board</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Guidelines.html">Guidelines</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Deadlines.html">Deadlines</a></span></li><li class="chapter-item "><li class="part-title">Software Installation</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/Software_Installation.html">Software Installation</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/Windows.html">Installation Instructions For Windows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/Linux.html">Installation Instructions For Linux (Ubuntu)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/macOS.html">Installation Instructions For macOS</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/jupyterlab.html">Getting Started with Jupyterlab</a></span></li></ol><li class="chapter-item "><li class="part-title">Downloads</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Downloads.html">Downloads</a></span></li><li class="chapter-item "><li class="part-title">Live Sessions</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Live.html">Live Sessions</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Python_programming.html">Python Programming</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Keyboard_Controller.html">Keyboard Controller</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Path_Tracing.html">Path Tracing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Obstacle_Avoider.html">Obstacle Avoidance</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Wall_Follower.html">Wall Follower</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Line_Follower.html">Line Follower</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Image_processing.html">Image Processing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Live_Sessions/Final_Task.html">Final Task</a></span></li></ol><li class="chapter-item "><li class="part-title">Introduction to Python</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python_programming.html">Python Programming</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_1_Computer_Organisation/1_Computer_Programming.html">Section 1: Computer Programming</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_1_Computer_Organisation/2_Computer_Programming_Types.html">Types of Computer Programming</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_2_Basics/1_syntax_comments.html">Section 2: Python Basics</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_2_Basics/2_variables.html">Variables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_2_Basics/3_data_types.html">Data Types</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_2_Basics/4_integer.html">Integer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_2_Basics/5_float.html">Float</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_2_Basics/6_string.html">String</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_3_Operators/1_operator.html">Section 3: Operators</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_3_Operators/2_arithmetic_operator.html">Arithmetic Operators</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_3_Operators/3_assignment_operator.html">Assignment Operators</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_3_Operators/4_comparison_operator.html">Comparison Operators</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_3_Operators/5_logical_identity_operator.html">Logical Operators</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_4_Data_Structures/1_lists.html">Section 4: Data Structures</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_4_Data_Structures/2_tuple.html">Tuples</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_4_Data_Structures/3_sets.html">Sets</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_4_Data_Structures/4_dictionaries.html">Dictionaries</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_5_Control_Flow_1/1_control_flow.html">Section 5: Control Flow 1</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_5_Control_Flow_1/2_conditionals.html">Conditionals</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_5_Control_Flow_1/3_if_else.html">If-Else</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_5_Control_Flow_1/4_if_else_practice.html">If-Else Practice</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_6_Control_Flow_2/1_looping.html">Section 6: Control Flow 2</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_6_Control_Flow_2/2_while.html">While Loop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_6_Control_Flow_2/3_for.html">For Loop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_6_Control_Flow_2/4_infinite.html">Infinite Loop and Break &amp; Continue</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_6_Control_Flow_2/5_nested.html">Nested Loops</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Section_7_Functions/functions.html">Section 7: Functions</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Hackerrank_instructions/instructions.html">HackerRank</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/python/Hackerrank_instructions/Exerciseinfo.html">Python Task</a></span></li></ol><li class="chapter-item "><li class="part-title">Task 1 Keyboard Controller</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_1.html">Task 1 - Keyboard Controller</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/webots_tutorials.html">Learn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/overview_of_robotics.html">Overview of Robotics</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/Intro_to_epuck.html">Introduction to e-puck</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/webots_interface.html">The Webots Interface</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/create_projdir.html">Creating a new Project Directory</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/Adding_objects.html">Adding Objects in Webots</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/creating_controller.html">Creating a New Controller</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/WebotsTutorials/writing_python_script.html">Writing the Python Script</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_1/Problem_Statement_dupli.html">Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_1/Problem_Statement.html">Problem Statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_1/Submission_Instructions.html">Submission Instructions</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Task 2 Path Tracing</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_2.html">Task 2 - Path Tracing</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/motion_control.html">Learn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Actuators/differential_drive.html">Basics of Differential Drive</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Actuators/tracing_circles.html">Tracing Circles</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Actuators/tracing_polygons.html">Tracing Polygons</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_2/Problem_Statement_dupli.html">Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_2/Problem_Statement.html">Problem Statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_2/Submission_Instructions.html">Submission Instructions</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Task 3 Obstacle Avoider</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_3.html">Task 3 - Obstacle Avoider</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Sensors/intro_to_sensors.html">Learn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Sensors/obstacle_avoidance.html">Working with Proximity Sensor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Sensors/encoders.html">Working with Rotary Encoders</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Sensors/ground_sensors.html">Working with Ground sensors</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_3/t3_ps_dupli.html">Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_3/t3_ps.html">Problem Statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_3/t3_sub.html">Submission Instructions</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Task 4 - Wall Follower</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_4A.html">Task 4A - Wall Follower (If-Else Controller)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/intro_to_controllers.html">Learn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/bang_bang_controller.html">Bang Bang Controller</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/designing_controllers_dupli.html">Designing Controllers - Wall Follower</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_4A/t4_ps_dupli.html">Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_4A/t4_ps.html">Problem Statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_4A/t4_sub.html">Submission Instructions</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_4B.html">Task 4B - Wall Follower (Proportional Controller)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/p_controller.html">Learn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/proportional_controller.html">Proportional Controller</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/designing_controllers.html">Designing Controllers - Wall Follower </a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_4B/t4b_ps_dupli.html">Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_4B/t4b_ps.html">Problem Statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_4B/t4b_sub.html">Submission Instructions</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Task 5 - Line Follower</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_5A.html">Task 5A - Line Follower (If-Else-If)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/lf_bb_control.html">Learn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/bang_bang_LF.html">Bang Bang Controller LF</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/designing_controller_LF_bb.html">Designing Controllers - Line Follower </a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_5A/Problem_Statement_dupli.html">Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_5A/Problem_Statement.html">Problem Statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_5A/t5a_sub.html">Submission Instructions</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_5B.html">Task 5B - Line Follower (P Control)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/lf_p_control.html">Learn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/proportional_controller_LF.html">Proportional Controller LF</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Controllers/designing_controllers_LF.html">Designing Controllers - Line Follower </a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_5B/Problem_Statement_dupli.html">Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_5B/Problem_Statement.html">Problem Statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_5B/t5b_sub.html">Submission Instructions</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Task 6 - Image Processing</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_6.html">Task 6 - Image Processing</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/image_processing_dupli.html">Learn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/image_processing.html">Image processing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/Opencv.html">OpenCV</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/Loadingimage.html">Loading &amp; Displaying image</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/Grayscaling.html">Grayscaling</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/ColourSpacing.html">Colour Spacing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/ImageOperations.html">Image Operations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/ColourDetection.html">Colour Detection</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/Thresholding.html">Thresholding</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/EdgeDetection.html">Edge Detection</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="learn/e-PuckProgramming/Image_Processing/OpencvWebots.html">OpenCV with Webots</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_6/Problem_Statement_dupli.html">Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_6/Problem_Statement.html">Problem statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_6/t6_sub.html">Submission instructions</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Task 7 - Final Task</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_7.html">Final Task</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_7/problem_statement.html">Problem Statement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Task_7/t7_sub.html">Submission Instructions</a></span></li></ol><li class="chapter-item "><li class="part-title">Grand Finale</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GF.html">Grand Finale</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

