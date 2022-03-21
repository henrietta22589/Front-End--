/*/*in order the pictures which have been chosen to be flexed,we will use Query Selector*/
/*In Order to select all the elements, which*/
const photos = document.querySelectorAll(`.panel`) /*With SelectorAll it is been created a List with all the elements, which have the class-panel
 more spesific, it is been created a NodeList which is similar to an array*/
/*In order to access in the flexibility of each picture, we will use a high priority array method, the method forEach*/
photos.forEach((panel) => {
    panel.addEventListener(`click`, () =>/*With this method, every image we choose, by clicking them, becames activated */
    {
        removeActiveClasses()
        panel.classList.add(`active`)//Because Every picture we have clicked, became activated and remains activated,and we do not want that. We are creating 
        // the function-->removeActiveClasses

    })
    function removeActiveClasses() {
        photos.forEach(panel => {
            panel.classList.remove(`active`)
        })
    }
    /*Importing Functions From Functions.Js*/
   /* import { removeActiveClasses } from './Functions';*/
    
})

