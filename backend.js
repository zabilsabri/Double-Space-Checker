function spaceCheck() {
    var brokenText = document.getElementById("textParagraph").value
    var splitBrokenText = brokenText.split(" ").length
    var fixedText = brokenText.replace(/\s\s/g,'')
    var splitFixedText = fixedText.split(" ").length

    if (splitBrokenText != splitFixedText) {
        document.getElementById("result").innerHTML = "DOUBLE SPACE FOUND"
    } else {
        document.getElementById("result").innerHTML = "NO DOUBLE SPACE FOUND (CLEAN)"
    }

}