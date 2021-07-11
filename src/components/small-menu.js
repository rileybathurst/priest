import * as React from "react";

function SmallMenu() {
  function openUp() {
    var menu_small = document.getElementById("menu_small");
    console.log(menu_small.offsetHeight);
    
    if (menu_small.className === "firstload inactive") {
      console.log('🦄')
      menu_small.style.setProperty('height' , '100%');
      let menu_offset = menu_small.offsetHeight;
      menu_small.style.setProperty('top' , '-' + menu_offset + 'px');
      menu_small.style.setProperty('margin-top' , '-' + menu_offset + 'px');
      console.log('first ' + menu_small.offsetHeight);
      menu_small.className = "inactive";
    }

    let menu_offset = menu_small.offsetHeight;

    
    if (menu_small.className === "active") {
      menu_small.className = "inactive"; // needed to adjust the open close icon
      menu_small.style.setProperty('top' , '0');
      console.log('🦖');
    } else {
    // } if(menu_small.className === "inactive") { // you cant do this as it now just runs both
      // this one triggers first
      console.log('👻');
      menu_small.className = "active";
      menu_small.style.setProperty('top' , menu_offset + 'px');
      menu_small.style.setProperty('margin-top' , '-' + menu_offset + 'px');
    }
  }

  // console.log(menu_small.offsetHeight); // there isnt a height yet

  return (
    <>
      <div className="small_menu--icon">
        {/* this cant be a line higher as its a display grid overwrite */}
        <span className="small_menu--icon-topline"></span>
        <span className="small_menu--icon-bottomline"></span>
      </div>
      <button className="small_menu--opener" onClick={openUp}>
        Menu
      </button>
    </>
  );
}

export default SmallMenu;
