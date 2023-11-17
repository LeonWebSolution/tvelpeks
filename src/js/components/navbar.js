document.addEventListener("DOMContentLoaded", function() {
    var nameLinkSolutions = document.querySelector('.solutions__name-link');
    var solutionsList = document.querySelector('.solutions__list');
    var blurLink = document.querySelector('.blur-link');
    var nameLinkProductions = document.querySelector('.productions__name-link');
    var productionsList = document.querySelector('.productions__list');

    nameLinkSolutions.addEventListener('click', function(event) {
        event.preventDefault(); 
        nameLinkSolutions.classList.toggle('active');
        solutionsList.classList.toggle('active');
        var productionsLinkIsActive = nameLinkProductions.classList.contains('active');
        nameLinkProductions.classList.remove('active');
        productionsList.classList.remove('active');
        if (!productionsLinkIsActive && !nameLinkSolutions.classList.contains('active')) {
            blurLink.classList.remove('active');
        } else {
        
            if (!blurLink.classList.contains('active')) {
                blurLink.classList.add('active');
            }
        }
    });

    nameLinkProductions.addEventListener('click', function(event) {
        event.preventDefault(); 
        nameLinkProductions.classList.toggle('active');
        productionsList.classList.toggle('active');
        var solutionsLinkIsActive = nameLinkSolutions.classList.contains('active');
        nameLinkSolutions.classList.remove('active');
        solutionsList.classList.remove('active');

        if (!solutionsLinkIsActive && !nameLinkProductions.classList.contains('active')) {
            blurLink.classList.remove('active');
        } else {
          
            if (!blurLink.classList.contains('active')) {
                blurLink.classList.add('active');
            }
        }
    });
});
