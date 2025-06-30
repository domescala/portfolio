// collapse text
const Collapse_alt_text = ['Espandi', 'Comprimi'];
// document.querySelectorAll(".markdown-box h2").forEach(element => {
//     element.addEventListener("click", function () {
//         element.classList.toggle("heading_collapsed")
//         collapse_next(element, 2)
//     })
// });

// function collapse_next(element, tag_index) {
//     var next = element.nextElementSibling

//     if (next) {
//         if (!end_of_paragraph(next, tag_index)) {
//             element.nextElementSibling.classList.toggle("collapse")

//             collapse_next(element.nextElementSibling, tag_index)
//         }
//     }
// }
document.querySelectorAll('.markdown-box h2 + section').forEach((SECTION) => {
  const H2 = SECTION.previousElementSibling;
  H2.addEventListener('click', () => {
    H2.classList.toggle('heading_collapsed');
    SECTION.classList.toggle('_collapse');
    SECTION.className.includes('_collapse')
      ? collapse(SECTION)
      : unCollapse(SECTION);
    // H2.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'nearest'
    // });
  });
});

const collapse = (SECTION) => {
  SECTION.style = '--height:' + SECTION.getBoundingClientRect().height + 'px;';
  SECTION.style.height = 'var(--height)';
  requestAnimationFrame(() => {
    SECTION.style.height = '0px';
  });
  SECTION.style.contain = 'paint';
};
const unCollapse = (SECTION) => {
  SECTION.style.height = 'var(--height)';
  SECTION.style.contain = '';
};

function end_of_paragraph(next, tag_index) {
  // il prossimo tag ha lo stesso nome del tag principale -> fine
  // if(next.tagName == "H" + tag_index){
  //     return true
  // }
  // se il tag è un headings (H1 H2 H3 H4...)
  if (next.tagName[0] == 'H' && Number(next.tagName[1])) {
    return Number(next.tagName[1]) <= tag_index;
  }
}

document.querySelectorAll('.markdown-box *[id]').forEach((element) => {});

document.querySelectorAll(".markdown-box a[href^='#']").forEach((a_tag) => {
  a_tag.addEventListener('click', function () {
    document.querySelectorAll('.triggered_by_link').forEach((element) => {
      element.classList.remove('triggered_by_link');
    });
    var el = document.querySelector(a_tag.getAttribute('href'));
    el.classList.add('triggered_by_link');
    console.log(el);
    console.log('click on tag a');
  });
});

