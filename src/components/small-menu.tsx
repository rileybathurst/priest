// this isnt react its all JS which im not sure if is good or bad

import * as React from "react";

// Main function
function SmallMenuToggle() {

  // function to run on click
  function openUp() {

    // ! im pretty sure these should be refs
    var menu_small = document.getElementById("menu_small");
    var menu_toggle = document.getElementById("menu_toggle");
    // console.log(menu_small.offsetHeight); // test

    // only the first time as currently the box doesnt have a height
    // based on css

    if (menu_small.className === "firstload") {
      // give it the height
      menu_small.style.setProperty('height', '100%');
      let menu_offset = menu_small.offsetHeight;
      // move it up
      menu_small.style.setProperty('top', '-' + menu_offset + 'px');
      // and remove the space it takes up
      menu_small.style.setProperty('margin-block-start', '-' + menu_offset + 'px');
      menu_small.className = "toggle__inactive";
    }

    let menu_offset = menu_small.offsetHeight;

    // ? I presume this is in pixels?
    console.log(menu_offset);
    let slanted_offset = menu_offset - 56;

    if (menu_small.className === "active") {

      // ? if classname is active then set it closed?
      menu_small.className = "inactive";
      menu_small.style.setProperty('top', '-20px');
      menu_toggle.className = "toggle__inactive";  // needed to adjust the open close icon
    } else {
      menu_small.className = "active";
      menu_small.style.setProperty('top', slanted_offset + 'px');
      menu_small.style.setProperty('margin-block-start', '-' + menu_offset + 'px');
      menu_toggle.className = "toggle__active";
    }
  }

  return (
    <div id="menu_toggle">
      {/*       <div className="small_menu--icon">
        <span className="small_menu--icon-topline"></span>
        <span className="small_menu--icon-bottomline"></span>
      </div> */}
      <button className="small_menu--opener" onClick={openUp}>
        Menu
      </button>
    </div>
  );
}

export default SmallMenuToggle;
