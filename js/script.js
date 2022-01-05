// dropdown Init
document.addEventListener('DOMContentLoaded', function () {
  let options = {
    collapsibleOptions: {
      accordion: false,
    },
  };
  //   let dropDownElem = document.querySelectorAll('.dropdown-trigger');
  //   let dropDownInstance = M.Dropdown.init(dropDownElem, options);
  // let sideNavElem = document.querySelectorAll('.sidenav');
  // let sideNavInstance = M.Sidenav.init(sideNavElem, options);
  let collapsibleElem = document.querySelector('.collapsible');
  let collapsibleInstance = M.Collapsible.init(
    collapsibleElem,
    options.collapsibleOptions,
  );
});
// dripdown Init
