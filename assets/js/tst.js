var $ = document

function _id(id_name) {
  return $.getElementById(id_name)
}

function _class(class_name) {
  return $.getElementsByClassName(class_name)
}

var countrysData = [
  "آلمان", "اتریش", "ایران", "ایسلند"
]

var citysData = {
  اتریش: [
    "ولز", "فیلاخ", "ژانکت پولتن", "درن بیرن", "وینر نویشتات", "اشتایر", "فلدکیرش", "برگنتس", "بادن", "لئوبن"
    , "کلوسترنویبورگ", "ترائن", "بیشوفس هوفن", "کوفلاخ", "گمودن", "زنکت فایت آن",
  ],

  آلمان: [
    "برلین", "دوسلدورف", "فرانکفورت", "هامبورگ"
  ],

  ایسلند: [
    "هافنارفیورذور", "آکوریری", "نوردورلاند", "ایسترا", "کپلاویک", "سودورنس", "گارذابایر", "اکرانس", "وستورلاند", "سلفوس", "سودورلاند", "سلتیارنارنس", "وستمن"
  ],

  ایران: [
    "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر", "تهران", "چهارمحال و بختیاری", "آذربایجان شرقی", "آذربایجان غربی",
    "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "خوزستان", "زنجان", "یزد", "همدان", "سمنان", "مرکزی", "سیستان و بلوچستان",
    "هرمزگان", "فارس", "قم", "مازندران", "قزوین", "لرستان", "کهگیلویه و بویراحمد", "کردستان", "کرمان", "کرمانشاه", "گلستان", "گیلان",
  ]
}

var mainForm = _id("main_form")
var country = _class("country")
var city = _class('city')
var flightType = _id("flight_type")
var passangerAge = _id("age")
var gender = _id("gender")
var inputCountry = _class("input_country")
var inputCity = _class("input_city")

// countrySelect
for (var i = 0; i < countrysData.length; i++) {
  var countryOpt = $.createElement("option")
  countryOpt.innerHTML = countrysData[i]
  countryOpt.value = countrysData[i]
  country[0].appendChild(countryOpt)
}

for (var i = 0; i < countrysData.length; i++) {
  var countryOpt = $.createElement("option")
  countryOpt.innerHTML = countrysData[i]
  countryOpt.value = countrysData[i]
  country[1].appendChild(countryOpt)
}

// citySelect
inputCountry[0].addEventListener("change", () => {
  let countryName = inputCountry[0].value
  let citysArray = citysData[countryName]

  city[0].innerHTML = ""
  inputCity[0].value = ""
  citysArray.forEach(element => {
    city[0].innerHTML += "<option>" + element + "</option>"
  })
})

inputCountry[1].addEventListener("change", () => {
  let countryName = inputCountry[1].value
  let citysArray = citysData[countryName]

  city[1].innerHTML = ""
  inputCity[1].value = ""
  citysArray.forEach(element => {
    city[1].innerHTML += "<option>" + element + "</option>"
  })
})


// disabledFlightType
inputCountry[0].addEventListener("change", () => {
  (inputCountry[0].value == "ایران")
    ? flightType[2].disabled = true
    : flightType[2].disabled = false

})

// Prevent
mainForm.addEventListener("submit", (event) => {
  if (country[0].value == "" || country[1].value == "" || city[0].value == "" || city[1].value == "" || flightType.value == "" || passangerAge.value == "" || gender.value == "") {
    event.preventDefault()
  }
})