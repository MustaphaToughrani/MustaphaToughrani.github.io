const header = document.querySelector(".navbar")
const btnss = document.querySelector(".debt")
const btnssdata = document.querySelector(".data")
const sectionOne = document.querySelector(".scroll1")
const sectionTwo = document.querySelector(".second_part")


const sectionOneOptions = {}
    //////////////////////////////////////////////////////////
const sectionOneObserver = new IntersectionObserver(function(
    entries) {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add('active');
                btnss.classList.remove('bleu');


            } else {
                header.classList.remove('active');
                btnss.classList.add('bleu');

            }

        }


    )

}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)
    //////////////////////////////////////////
const sectionTwoObserver = new IntersectionObserver(function(
    entries) {
    entries.forEach(entry => {
            if (entry.isIntersecting) {

                btnssdata.classList.add('rouge');
                btnss.classList.remove('bleu')
            } else {
                btnssdata.classList.remove('rouge');
                btnss.classList.add('bleu')
            }

        }


    )

}, )

sectionTwoObserver.observe(sectionTwo)
    ///////////////////////////////////////////////////////