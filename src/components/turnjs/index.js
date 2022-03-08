import React from "react"
import $ from "jquery"
import "turn.js"
import "./styles.css"
import Turn from "./Turn.js"

const TurnIndex = () => {
  const options = {
    width: 800,
    height: 600,
    autoCenter: true,
    display: "double",
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
      turned: function (e, page) {
        console.log("Current view: ", $(this).turn("view"))
      },
    },
  }

  const pages = [
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
  ]
  return (
    <>
      {" "}
      <Turn options={options} className="magazine">
        {pages.map((page, index) => (
          <div key={index} className="page">
            <img src={page} alt="" />
          </div>
        ))}
      </Turn>
    </>
  )
}

export default TurnIndex
