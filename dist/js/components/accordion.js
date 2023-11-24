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

                // Remove 'active' class from faq__item of the accordion only if it's not a nested accordion
                var faqItem = accordion.closest('.faq__item');
                if (faqItem && !accordion.classList.contains('faq__sub-item-top')) {
                    faqItem.classList.remove('active');
                    var faqItemContent = faqItem.querySelector('.faq__item-content');
                    if (faqItemContent) {
                        faqItemContent.style.maxHeight = ''; // Reset the max height
                        faqItemContent.classList.remove('active');
                    }
                }

                // Remove 'active' class from faq__sub-item of the nested accordion
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
                    // Calculate and set the actual height
                    var newHeight = faqItemContent.scrollHeight + content.scrollHeight;
                    faqItemContent.style.maxHeight = newHeight + 'px';
                    faqItemContent.classList.add('active');
                }
            }

            faqItems.forEach(function (item) {
                item.addEventListener('click', function () {
                    var content = this.nextElementSibling;

                    // Toggle the active state
                    this.classList.toggle('active');
                    var isActive = this.classList.contains('active');

                    // Close the previous accordion if one is open
                    if (currentAccordion && currentAccordion !== this) {
                        closeAccordion(currentAccordion);
                    }

                    // Toggle the content visibility
                    content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '0';

                    // If the item is active, add 'active' class to faq__item and update height
                    if (isActive) {
                        var faqItem = this.closest('.faq__item');
                        faqItem.classList.add('active');
                        updateAccordionHeight(this, content);
                    } else {
                        closeAccordion(this);
                    }

                    // Update the current accordion only if it's not a nested accordion
                    if (!this.closest('.faq__sub-item')) {
                        currentAccordion = isActive ? this : null;
                    }
                });

                // Process nested accordions
                var subItems = item.nextElementSibling.querySelectorAll('.faq__sub-item-top');
                subItems.forEach(function (subItem) {
                    subItem.addEventListener('click', function (event) {
                        // Prevent the click event from bubbling up to the parent accordion
                        event.stopPropagation();

                        var subContent = this.nextElementSibling;

                        // Close the previous nested accordion if one is open
                        if (currentSubAccordion && currentSubAccordion !== this) {
                            closeAccordion(currentSubAccordion);
                        }

                        // Toggle the active state
                        this.classList.toggle('active');
                        var isActive = this.classList.contains('active');

                        // Toggle the content visibility
                        subContent.style.maxHeight = isActive ? subContent.scrollHeight + 'px' : '0';

                        // If the item is active, add 'active' class to faq__sub-item and update height
                        if (isActive) {
                            var faqSubItem = this.closest('.faq__sub-item');
                            faqSubItem.classList.add('active');
                            updateAccordionHeight(this, subContent);
                        } else {
                            closeAccordion(this);
                        }

                        // Update the current nested accordion
                        currentSubAccordion = isActive ? this : null;
                    });
                });
            });
        });
    }
}
