
// var searchInput = _id("search")
// var searchIcon = _id("search_icon")
// var list = _id("list")
// var items = list.getElementsByTagName("li")


// searchInput.addEventListener("keyup", function(e) {
//    var title = e.target.value.toLowerCase()

//    Array.from(items).forEach(function(item){
//     var text = item.textContent

//     if(text.toLowerCase().indexOf(title) != -1) {
//         item.style.display = "block"
//     } else {
//         item.style.display = "none"

//     }
//    })
// })

// // // // // // // // // // // // // // // // // // 


// var develop = _id("develop")
// var options = _id("options")

// var lara = $.createElement('option')
// lara.innerHTML = "laravel"
// lara.value = "laraverl"

// function selectOption(e) {

//             if (e == "js") {
//                 options[1] = new Option("ajax" , "ajax")
//             } else if (e == "php") {
// 				options[1] = new Option("php" , "php")
// 			} else if(e == "phayton") {
// 				options.append(lara)
// 			}
// }

// // // // // // // // // // // // // // // // // // // // // 

// var modal = _id('modal')
// var close = _id("close")

// modal.addEventListener("click" , function(){
//     this.setAttribute("class", "active")
//     this.removeAttribute("id")
//     close.style.display = "block"
//     $.body.style.backgroundColor = "#f8f8f8"

// })

// close.addEventListener('click', function() {
//     modal.removeAttribute("class", "active")
//     modal.setAttribute("class", "modale")
//     close.style.display = "none"
//     $.body.style.backgroundColor = "#fff"
// })


// window.onclick = function(event) {
//     if(event.target == $.body) {
//         modal.removeAttribute("class", "active")
//         modal.setAttribute("class", "modale")
//         close.style.display = "none"
//         $.body.style.backgroundColor = "#fff"
//     }
// }

// // // // // // // // // // // // // // // // // // // // 




// $.onmousemove = circleEvent

// function circleEvent(event) {
//     var circle = $.createElement("div")
//     circle.setAttribute("class", "circle")
//     var colors = ["#002", "#f55", "#7dd", "#ff0"]
//     mainColor = colors[Math.floor(Math.random() * colors.length)]


//     circle.style.transition = "all 0.5s linear"
//     circle.style.position = "absolute"
//     circle.style.top = event.clientY + "px"
//     circle.style.left = event.clientX + "px"

//     $.body.appendChild(circle)

//     circle.style.left = circle.offsetLeft - 20 + "px"
//     circle.style.top = circle.offsetTop - 20 + "px"

//     circle.style.borderColor = mainColor
//     circle.style.width = "50px"
//     circle.style.height = "50px"
//     circle.style.borderWidth = "40px"
//     circle.style.opacity = 0

// }

// // // // // // // // // // // // // // // // // // // // // //    

// var $ = document
// function _id(id_name) {
//     return $.getElementById(id_name)
// }

// function _class(class_name) {
//     return $.getElementById(class_name)
// }

// var hours = _id("hour")
// var minutes = _id("minute")
// var seconds = _id("second")

// var newDate = new Date
// var Hour = newDate.getHours()
// var minute = newDate.getMinutes()
// var second = newDate.getSeconds()

// hours.innerHTML = digits(Hour)
// minutes.innerHTML = digits(minute)
// seconds.innerHTML = digits(second)

// function digits(digit) {
//     if(digit < 10) {
//         return "0" + digit
//     }
//     return digit
// }

// function clock() {
//     var newDate = new Date
// var Hour = newDate.getHours()
// var minute = newDate.getMinutes()
// var second = newDate.getSeconds()

// hours.innerHTML = digits(Hour)
// minutes.innerHTML = digits(minute)
// seconds.innerHTML = digits(second)
// }

// setInterval("clock()", 500)

// // // // // // // // // // // // // // // // // // 

var $ = document

function _id(id_name) {
  return $.getElementById(id_name)
}

function _class(class_name) {
  return $.getElementsByClassName(class_name)
}

var countryArray = [
  "آذربایجان",
  "آرژانتین",
  "آلمان",
  "اتریش",
  "اتیوپی",
  "اردن",
  "ارمنستان",
  "ازبکستان",
  "استرالیا",
  "افغانستان",
  "اکوادور",
  "الجزایر",
  "السالوادور",
  "امریکا",
  "اندونزی",
  "انگلستان",
  "ایرلند",
  "اوروگوئه",
  "اوکراین",
  "اوگاندا",
  "ایتالیا",
  "ایران",
  "ایسلند"
]

var islandCitys = [
  "هافنارفیورذور",
  "آکوریری",
  "نوردورلاند",
  "ایسترا",
  "کپلاویک",
  "سودورنس",
  "گارذابایر",
  "اکرانس",
  "وستورلاند",
  "سلفوس",
  "سودورلاند",
  "سلتیارنارنس",
  "وستمن"
]

var iranCitys = [
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "یزد",
  "همدان",
  "سمنان",
  "مرکزی",
  "سیستان و بلوچستان",
  "هرمزگان",
  "فارس",
  "قم",
  "مازندران",
  "قزوین",
  "لرستان",
  "کهگیلویه و بویراحمد",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "گلستان",
  "گیلان",
]

var mainForm = _id("main_form")
var country = _class("country")
var city = _class('city')
var flightType = _id("flight_type")
var passangerAge = _id("age")
var gender = _id("gender")
var inputCountry = _class("input_country")

// countrySelect

for (var i = 0; i < countryArray.length; i++) {
  var countryOpt = $.createElement("option")
  countryOpt.innerHTML = countryArray[i]
  countryOpt.value = countryArray[i]
  country[0].appendChild(countryOpt)
}


for (var i = 0; i < countryArray.length; i++) {
  var countryOpt = $.createElement("option")
  countryOpt.innerHTML = countryArray[i]
  countryOpt.value = countryArray[i]
  country[1].appendChild(countryOpt)
}

// citySelect

inputCountry[0].addEventListener("change", function () {
  if (inputCountry[0].value == "ایسلند") {
    for (var i = 0; i < islandCitys.length; i++) {
      var islandOpt = $.createElement("option")
      islandOpt.innerHTML = islandCitys[i]
      islandOpt.value = islandCitys[i]
      city[0].appendChild(islandOpt)
    }
  }
  
  else if (inputCountry[0].value == "ایران") {
    for (var i = 0; i < iranCitys.length; i++) {
      var iranOpt = $.createElement("option")
      iranOpt.innerHTML = iranCitys[i]
      iranOpt.value = iranCitys[i]
      city[0].appendChild(iranOpt)
    }
  }
})

inputCountry[1].addEventListener("change", function () {
  if (inputCountry[1].value == "ایسلند") {
    for (var i = 0; i < islandCitys.length; i++) {
      var islandOpt = $.createElement("option")
      islandOpt.innerHTML = islandCitys[i]
      islandOpt.value = islandCitys[i]
      city[1].appendChild(islandOpt)
    }
  }

  else if (inputCountry[1].value == "ایران") {
    for (var i = 0; i < iranCitys.length; i++) {
      var iranOpt = $.createElement("option")
      iranOpt.innerHTML = iranCitys[i]
      iranOpt.value = iranCitys[i]
      city[1].appendChild(iranOpt)
    }
  }
})



////////////////////////////////////////////////////////

// disabledFlightType

country[0].addEventListener("change", function () {
  (country[0].value == "ایران")
    ? flightType[2].disabled = true
    : flightType[2].disabled = false

})



mainForm.addEventListener("submit", function (event) {
  if (country[0].value == "" || country[1].value == "" || city[0].value == "" || city[1].value == "" || flightType.value == "" || passangerAge.value == "" || gender.value == "") {
    event.preventDefault()
  }
})
