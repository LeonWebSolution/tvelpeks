export class Accordion {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            var faqItems = document.querySelectorAll('.faq__item-top');
            var currentAccordion = null;
            var currentSubAccordion = null;

            function closeAccordion(accordion) {
                accordion.classList.remove('active');
                var accordionContent = accordion.nextElementSibling;
                accordionContent.style.maxHeight = '0';

                var faqItem = accordion.closest('.faq__item');
                if (faqItem && !accordion.classList.contains('faq__sub-item-top')) {
                    faqItem.classList.remove('active');
                    var faqItemContent = faqItem.querySelector('.faq__item-content');
                    if (faqItemContent) {
                        faqItemContent.style.maxHeight = ''; // Reset the max height
                        faqItemContent.classList.remove('active');
                    }
                }

                var faqSubItem = accordion.closest('.faq__sub-item');
                if (faqSubItem) {
                    faqSubItem.classList.remove('active');
                    var faqSubItemContent = faqSubItem.querySelector('.faq__sub-item-content');
                    if (faqSubItemContent) {
                        faqSubItemContent.style.maxHeight = ''; // Reset the max height
                        faqSubItemContent.classList.remove('active');
                    }
                }
            }

            function updateAccordionHeight(item, content) {
                var faqItem = item.closest('.faq__item');
                var faqItemContent = faqItem.querySelector('.faq__item-content');

                if (faqItem && faqItemContent) {
                    var newHeight = faqItemContent.scrollHeight + content.scrollHeight;
                    faqItemContent.style.maxHeight = newHeight + 'px';
                    faqItemContent.classList.add('active');
                }
            }

            // Open the first accordion by default
            if (faqItems.length > 0) {
                var firstItem = faqItems[0];
                var firstContent = firstItem.nextElementSibling;
                firstItem.classList.add('active');
                firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
            }

            faqItems.forEach(function (item) {
                item.addEventListener('click', function () {
                    var content = this.nextElementSibling;

                    this.classList.toggle('active');
                    var isActive = this.classList.contains('active');

                    if (currentAccordion && currentAccordion !== this) {
                        closeAccordion(currentAccordion);
                    }

                    content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '0';

                    if (isActive) {
                        var faqItem = this.closest('.faq__item');
                        faqItem.classList.add('active');
                        updateAccordionHeight(this, content);
                    } else {
                        closeAccordion(this);
                    }

                    if (!this.closest('.faq__sub-item')) {
                        currentAccordion = isActive ? this : null;
                    }
                });

                var subItems = item.nextElementSibling.querySelectorAll('.faq__sub-item-top');
                subItems.forEach(function (subItem) {
                    subItem.addEventListener('click', function (event) {
                        event.stopPropagation();

                        var subContent = this.nextElementSibling;

                        if (currentSubAccordion && currentSubAccordion !== this) {
                            closeAccordion(currentSubAccordion);
                        }

                        this.classList.toggle('active');
                        var isActive = this.classList.contains('active');

                        subContent.style.maxHeight = isActive ? subContent.scrollHeight + 'px' : '0';

                        if (isActive) {
                            var faqSubItem = this.closest('.faq__sub-item');
                            faqSubItem.classList.add('active');
                            updateAccordionHeight(this, subContent);
                        } else {
                            closeAccordion(this);
                        }

                        currentSubAccordion = isActive ? this : null;
                    });
                });
            });
        });
    }
}
