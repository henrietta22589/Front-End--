/*/*HERE ARE ALL-THE-FUNCTIONS-WHICH IS USED IN THIS PROJECT*//*

*//*//**In Line 9 of First.ExternaL.js this Function is been called**//* /*/
function removeActiveClasses() {
    photos.forEach(panel => {
        panel.classList.remove(`active`)
    })
}









/*Exporting The Functions, which have been made in this jsSheet, in other JsSheets*/
export { removeActiveClasses };