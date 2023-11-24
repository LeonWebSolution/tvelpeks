export class Accordion {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeAccordions();
        });
    }

    closeAccordion(accordion, isSubAccordion) {
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

    toggleAccordion(accordion, content, isSubAccordion) {
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
            this.closeAccordion(accordion, isSubAccordion);
        }

        return isActive;
    }

    handleAccordionClick(accordion, isSubAccordion) {
        var content = accordion.nextElementSibling;

        if (isSubAccordion) {
            if (this.currentSubAccordion && this.currentSubAccordion !== accordion) {
                this.closeAccordion(this.currentSubAccordion, isSubAccordion);
            }
            this.currentSubAccordion = this.toggleAccordion(accordion, content, isSubAccordion) ? accordion : null;
        } else {
            if (this.currentAccordion && this.currentAccordion !== accordion) {
                this.closeAccordion(this.currentAccordion, isSubAccordion);
            }
            this.currentAccordion = this.toggleAccordion(accordion, content, isSubAccordion) ? accordion : null;
        }
    }

    initializeAccordions() {
        var faqItems = document.querySelectorAll('.faq__item-top');
        this.currentAccordion = null;
        this.currentSubAccordion = null;

        if (faqItems.length > 0) {
            faqItems.forEach((item) => {
                item.addEventListener('click', () => {
                    this.handleAccordionClick(item, false);
                });

                var subItems = item.nextElementSibling ? item.nextElementSibling.querySelectorAll('.faq__sub-item-top') : null;
                if (subItems && subItems.length > 0) {
                    subItems.forEach((subItem) => {
                        subItem.addEventListener('click', (event) => {
                            event.stopPropagation();
                            this.handleAccordionClick(subItem, true);
                        });
                    });
                }
            });
        }
    }
}

