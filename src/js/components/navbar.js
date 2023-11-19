document.addEventListener("DOMContentLoaded", function() {
    function addActiveClasses(element, list, blurLink) {
        element.classList.add('active');
        list.classList.add('active');
        blurLink.classList.add('active');
    }

    function removeActiveClasses(element, list, blurLink) {
        element.classList.remove('active');
        list.classList.remove('active');
        if (!solutionsLinkIsActive() && !productionsLinkIsActive() && !element.classList.contains('active')) {
            blurLink.classList.remove('active');
        }
    }

    function solutionsLinkIsActive() {
        return nameLinkSolutions.classList.contains('active');
    }

    function productionsLinkIsActive() {
        return nameLinkProductions.classList.contains('active');
    }

    function createMouseoverHandler(element, list, blurLink, nextElement) {
        return function() {
            removeActiveClasses(element, list, blurLink);
            addActiveClasses(nextElement, list, blurLink);
        };
    }

    function createMouseleaveHandler(element, list) {
        return function() {
            removeActiveClasses(element, list, blurLink);
        };
    }

    var nameLinkSolutions = document.querySelector('.solutions__name-link');
    var solutionsList = document.querySelector('.solutions__list');
    var blurLink = document.querySelector('.blur-link');
    var nameLinkProductions = document.querySelector('.productions__name-link');
    var productionsList = document.querySelector('.productions__list');

    nameLinkSolutions.addEventListener('mouseover', function() {
        addActiveClasses(nameLinkSolutions, solutionsList, blurLink);
    });
    nameLinkSolutions.addEventListener('mouseleave', function() {
        removeActiveClasses(nameLinkSolutions, solutionsList, blurLink);
    });

    nameLinkProductions.addEventListener('mouseover', function() {
        addActiveClasses(nameLinkProductions, productionsList, blurLink);
    });
    nameLinkProductions.addEventListener('mouseleave', function() {
        removeActiveClasses(nameLinkProductions, productionsList, blurLink);
    });

    blurLink.addEventListener('mouseenter', function() {
        // Добавьте здесь логику, если необходимо
    });

    var nextElementAfterNameLinkProductions = nameLinkProductions.nextElementSibling;

    if (nextElementAfterNameLinkProductions) {
        nextElementAfterNameLinkProductions.addEventListener('mouseover', createMouseoverHandler(nameLinkProductions, productionsList, blurLink, nextElementAfterNameLinkProductions));
        nextElementAfterNameLinkProductions.addEventListener('mouseleave', createMouseleaveHandler(nextElementAfterNameLinkProductions, productionsList));
    }
});
