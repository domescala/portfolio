const PROJECTS = document.querySelectorAll(
  '#containerportfolio .project:not(.project-placeholder)'
);



let func = 'cubic-bezier(0, 1, 0.2, 1)';
let test = '';
let timeouts = [];
let project_opened = false;

let project = document.querySelectorAll('.project')[10];
PROJECTS.forEach((project, index) => {
  project.style['order'] = index;

  project.addEventListener('click', function (event) {
    // click on current project -> RETURN
    if (project.classList.contains('current-project')) {
      return;
    }
    // click outside -> if there is a current project close it
    if (document.querySelector('.current-project')) {
      close_project();
      return;
    }
    // click on project when there is no current project
    openProject(project, index);
  });
});

const openProject = (project, index) => {
  const timeTransition = 1000;
  const gif = project.querySelector('.intro_project_gif');
  const iframe = project.querySelector('iframe');
  const exitButton = project.querySelector('.project-exit');
  exitButton.style.opacity = "0"  
  // add the project id as a parameter in the URL
  // window.history.replaceState(null, null, "?project="+ project.id);
  history.pushState({}, '', '?project=' + project.id);

  // ----- opening project animation -----
  // add class to manage child element style
  //   project.classList.add('project_opening');

  // stop the hover animation
  project.style['transition'] = 'none';
  project.style['transform'] = 'none';
  project.style['animation'] = 'none';
  iframe.style['opacity'] = '0';
  iframe.style['transition'] = 'opacity 1s 0.5s linear';

  const rect = project.getBoundingClientRect(); // -> this function force DOM update
  // set fixed position: coordinates and size appear the same
  project.style['transition'] = 'all ' + timeTransition + 'ms ' + func;
  project.style['position'] = 'fixed';
  project.style['top'] = rect.top + 'px';
  project.style['left'] = rect.left + 'px';
  project.style['width'] = rect.width + 'px';
  project.style['height'] = rect.height + 'px';

  // move the placeholder under the project active
  const PLACEHOLDER = document.querySelector('.project-placeholder');
  PLACEHOLDER.style['display'] = 'revert';
  PLACEHOLDER.style['order'] = project.style['order'];
  // force DOM update
  project.getBoundingClientRect();

  // switch classes and remove inline style: the .current-project class have already these properties: fixed, top, width, height and left ...
  project.classList.remove('project');
  project.classList.add('current-project');
  project.style['top'] = '';
  project.style['width'] = '';
  project.style['height'] = '';
  // but left is "auto", we need a pixel value!!!
  // the left at the end will be:
  //       ( windowWidth - projectWidth ) / 2
  // the .current-project style is:
  //      width: 900px
  //      max-width: 100vw
  // if windowWidth in under 900px ->> left: zero
  // else then left ->> ( windowWidth - 900px ) / 2
  const windowWidth = window.innerWidth;
  const left = windowWidth < 900 ? 0 : (windowWidth - 900) / 2;
  project.style['left'] = left + 'px';

  // START TRANSITION
  // now the HTML is transitioning from the inline style (just removed) to the .current-project style

  //   set opacity on gif image and iframe
  requestAnimationFrame(() => {
    gif.style['opacity'] = '0';
    iframe.style['opacity'] = '1';
  });
  // transition-duration is 1 second, after that remove all inline style (Except the flex order)
  setTimeout(() => {
    project.style = 'order:' + project.style['order'];
    exitButton.style.opacity = "1"  

    // project.classList.remove('project_opening');
    // remove gif
    // gif.style['display'] = 'none';
  }, timeTransition);
};

document.querySelectorAll('.project').forEach((project) => {});
// I'm using "click" but it works with any event
document.addEventListener('click', (event) => {
  if (!document.querySelector('.current-project')) {
    return;
  }
  const project = document.querySelector('.current-project');
  const isClickInside = project.contains(event.target);
  if (!isClickInside) {
    close_project();
    // The click was OUTSIDE the specifiedElement, do something
  }
});

function close_project() {
  const project = document.querySelector('.current-project');
  const PLACEHOLDER = document.querySelector('.project-placeholder');
  const gif = project.querySelector('.intro_project_gif');
  const iframe = project.querySelector('iframe');
  const exitButton = project.querySelector('.project-exit');
  exitButton.style.opacity = "0"
  history.pushState({}, '', '?');
  timeouts.forEach((t) => {
    clearTimeout(t);
  });
  timeouts = [];

  // ----- closing project animation -----
  // show gif: reset inline style and set opacity
  gif.style = '';
  gif.style['transition'] = 'opacity 0.5s 0.2s linear';
  iframe.style['transition'] = 'opacity 0.5s linear';
  iframe.style['display'] = 'revert';
  gif.getBoundingClientRect(); // force update
  requestAnimationFrame(() => {
    gif.style['opacity'] = '1';
    iframe.style['opacity'] = '0';
  });
  // add class to manage child element style
  //   project.classList.add('project_opening');

  // move the placeholder under the project active
  PLACEHOLDER.style['display'] = 'revert';
  PLACEHOLDER.style['order'] = project.style['order'];

  project.style['transition'] = 'all 0.8s 0.2s ' + func;

  // set fixed position: coordinates and size appear the same
  const openRect = project.getBoundingClientRect();
  project.style['top'] = openRect.top + 'px';
  project.style['width'] = openRect.width + 'px';
  project.style['left'] = openRect.left + 'px';
  project.style['height'] = openRect.height + 'px';

  // force DOM update
  project.getBoundingClientRect();

  // set coordinates and size of the placeholder
  const closedRect = PLACEHOLDER.getBoundingClientRect();
  project.style['top'] = closedRect.top + 'px';
  project.style['left'] = closedRect.left + 'px';
  project.style['width'] = closedRect.width + 'px';
  project.style['height'] = closedRect.height + 'px';
  project.style['position'] = 'fixed';

  // force DOM update
  project.getBoundingClientRect();

  // the body has "overflow:hidden" to prevent scroll!
  // But when at the end of this animation the body lose "overflow:hidden", the scrollbar will appear, causing an annoying shift. Its better to force to remove "overflow:hidden" (with overflow:revert) before closing so that that shift is covered by the project
  document.querySelector("body").style.overflow = "revert"
  // TRANSITION
  // html is transitioning from fixed "open" position to "closed" position
  timeouts.push(
    setTimeout(() => {
        document.querySelector("body").style.overflow = ""

      project.classList.add('project');
      project.classList.remove('current-project');
      // place at the end the placeholder and remove it
      //   project.classList.remove('project_opening');
      PLACEHOLDER.style = '';
      project.style = 'order:' + project.style['order'];
      iframe.style = '';
    }, 900)
  );
}

// SWIPE per uscire

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

var pos_start = { x: null, y: null };
var pos_move = { x: null, y: null };
var touch_stop = false;
var touch_start = false;
var main_direction = 0;

function handleTouchStart(evt) {
  console.log(evt.target.tagName);
  if (!document.querySelector('.current-project')) {
    return;
  }
  if (evt.target.tagName == 'INPUT') {
    return;
  }

  const firstTouch = getTouches(evt)[0];
  pos_start = {
    x: firstTouch.clientX,
    y: firstTouch.clientY
  };
  touch_stop = false;
  touch_start = true;
}

function handleTouchMove(evt) {
  if (!document.querySelector('.current-project')) {
    return;
  }
  pos_move = {
    x: evt.touches[0].clientX,
    y: evt.touches[0].clientY
  };
  var delta = {
    x: Math.abs(pos_move.x - pos_start.x),
    y: Math.abs(pos_move.y - pos_start.y)
  };

  if (touch_stop) {
    return;
  }

  if (touch_start) {
    main_direction = delta.y > delta.x;
    touch_start = false;
  }
  if (main_direction) {
    console.log('vertical');
  } else {
    console.log('pos_start', pos_start, 'pos_move', pos_move);
    if (pos_start.x > pos_move.x) {
      console.log('111');

      translate = 'translateX(-' + delta.x ** 0.5 * 5 + 'px)';
      document.querySelector('.current-project').style['transition'] = 'none';
      document.querySelector('.current-project').style['transform'] = translate;
      console.log(document.querySelector('.current-project').style['left']);
    } else {
      console.log('222');
    }
  }

  console.log('');
}

function handleTouchEnd(evt) {
  const project = document.querySelector('.current-project');
  if (!project) {
    return;
  }
  touch_stop = true;
  if (pos_start.x - pos_move.x > 200) {
    close_project();
  } else {
    document.querySelector('.current-project').style['transition'] = '0.3s';
    document.querySelector('.current-project').style['transform'] =
      'translateX(0)';
  }
}

const removeLoading = () => {
  document.querySelector('.loading-wrapper').style['opacity'] = '0';
  document.querySelector('.loading-wrapper').style['filter'] = 'saturate(5)';
  setTimeout(() => {
    // document.querySelector(".loading-wrapper").style = "display:none";
    // document.querySelector(".loading-wrapper").remove()
    console.log('finish loading');
  }, 4100);
};

window.addEventListener('popstate', function (event) {
  // history.pushState({}, "", "");
  close_project();
});

// open project from link
// window.addEventListener("load", function(){
//     console.log("AAAAAAAAAAAAAAAAA")
// get project id from url
const urlParams = new URLSearchParams(window.location.search);
const project_id = urlParams.get('project');
if (project_id) {
  // if it exists -> scroll to the project container, open project and scroll to center it

  // clear history and update
  history.pushState({}, '', '?');
  setTimeout(() => {
    history.pushState({}, '', '?project=' + project_id);
  }, 1000);

  const project = document.getElementById(project_id);
  // assign the real src to all images and videos in current project
  project.querySelectorAll('[prevent-src]').forEach((e) => {
    e.setAttribute('src', e.getAttribute('prevent-src'));
    e.removeAttribute('prevent-src'); // remove
    if (e.tagName == 'SOURCE') {
      // force reload for video element
      e.parentElement.load();
    }
  });

  project.parentElement.scrollIntoView({
    behavior: 'instant',
    block: 'start',
    inline: 'nearest'
  });

  // no opening animation
  // essential points are these:
  // switch classes
  project.classList.add('current-project');
  project.classList.remove('project');
  // set placeholder

  const PLACEHOLDER = document.querySelector('.project-placeholder');
  PLACEHOLDER.style['display'] = 'revert';
  PLACEHOLDER.style['order'] = project.style['order'];
  // remove image
  project.querySelector('.intro_project_gif').style['display'] = 'none';
  /* -----    */

  console.log('project');
  project.scrollIntoView({
    behavior: 'instant',
    block: 'center',
    inline: 'nearest'
  });
} else {
  document.querySelectorAll('#presentation [prevent-src]').forEach((e) => {
    e.setAttribute('src', e.getAttribute('prevent-src'));
    e.removeAttribute('prevent-src'); // remove
    if (e.tagName == 'SOURCE') {
      // reload for video element
      e.parentElement.load();
    }
  });
}

// when the images in current project are ready the page will fire the onload event
onload = () => {
  console.log('load');
  removeLoading();
  // assign real src to all img with prevent-src
  document.querySelectorAll('[prevent-src]').forEach((e) => {
    e.setAttribute('src', e.getAttribute('prevent-src'));
    e.removeAttribute('prevent-src'); // remove
    e.setAttribute('loading', 'lazy'); // set loading lazy
    if (e.tagName == 'SOURCE') {
      // reload for video element
      e.parentElement.load();
    }
  });


  PROJECTS.forEach(p => {
    const div = document.createElement("div")
    div.innerHTML = "<p><span>👈🏻</span> torna indietro</p>"
    div.classList.add("project-exit")
    div.classList.add("markdown-box")
    div.addEventListener("click", close_project)
    p.prepend(div)
  })
};
