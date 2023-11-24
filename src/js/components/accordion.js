document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq__item-top');
    var currentAccordion = null;
    var currentSubAccordion = null;

    function closeAccordion(accordion, isSubAccordion) {
        if (accordion) {
            accordion.classList.remove('active');
            var accordionContent = accordion.nextElementSibling;
            if (accordionContent) {
                accordionContent.style.maxHeight = '0';
            }

            var faqItem = accordion.closest(isSubAccordion ? '.faq__sub-item' : '.faq__item');
            if (faqItem) {
                faqItem.classList.remove('active');
                var faqItemContent = faqItem.querySelector(isSubAccordion ? '.faq__sub-item-content' : '.faq__item-content');
                if (faqItemContent) {
                    faqItemContent.classList.remove('active');
                }
            }
        }
    }

    function toggleAccordion(accordion, content, isSubAccordion) {
        var isActive = !accordion.classList.contains('active');

        accordion.classList.toggle('active', isActive);
        if (content) {
            content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '0';
        }

        var faqItem = accordion.closest(isSubAccordion ? '.faq__sub-item' : '.faq__item');

        if (isActive) {
            faqItem.classList.add('active');
            var faqItemContent = faqItem.querySelector(isSubAccordion ? '.faq__sub-item-content' : '.faq__item-content');

            if (faqItemContent) {
                var newHeight = faqItemContent.scrollHeight + (content ? content.scrollHeight : 0);
                faqItemContent.style.maxHeight = newHeight + 'px';
                faqItemContent.classList.add('active');
            }
        } else {
            closeAccordion(accordion, isSubAccordion);
        }

        return isActive;
    }

    function handleAccordionClick(accordion, isSubAccordion) {
        var content = accordion.nextElementSibling;

        if (isSubAccordion) {
            if (currentSubAccordion && currentSubAccordion !== accordion) {
                closeAccordion(currentSubAccordion, isSubAccordion);
            }
            currentSubAccordion = toggleAccordion(accordion, content, isSubAccordion) ? accordion : null;
        } else {
            if (currentAccordion && currentAccordion !== accordion) {
                closeAccordion(currentAccordion, isSubAccordion);
            }
            currentAccordion = toggleAccordion(accordion, content, isSubAccordion) ? accordion : null;
        }
    }

    if (faqItems) {
        faqItems.forEach(function (item) {
            item.addEventListener('click', function () {
                handleAccordionClick(this, false);
            });

            var subItems = item.nextElementSibling ? item.nextElementSibling.querySelectorAll('.faq__sub-item-top') : null;
            if (subItems) {
                subItems.forEach(function (subItem) {
                    subItem.addEventListener('click', function (event) {
                        event.stopPropagation();
                        handleAccordionClick(this, true);
                    });
                });
            }
        });
    }
});
