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
                btnss.classList.remove('rouge');


            } else {
                header.classList.remove('active');
                btnss.classList.add('rouge');

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
                btnss.classList.remove('rouge')
            } else {
                btnssdata.classList.remove('rouge');
                btnss.classList.add('rouge')
            }

        }


    )

}, )

sectionTwoObserver.observe(sectionTwo)
    ///////////////////////////////////////////////////////