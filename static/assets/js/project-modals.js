/**
 * Project Modal Gallery Script
 * Handles modal interactions, gallery navigation, and content updates
 */

(function($) {
    'use strict';

    /**
     * Helper function to update gallery state (image, description, dots, right side content)
     * @param {jQuery} $modal - The modal element
     * @param {number} index - The index of the thumbnail to show
     */
    function updateGalleryState($modal, index) {
        var $thumbs = $modal.find('.project-gallery-thumbs .thumb');
        var $targetThumb = $thumbs.eq(index);
        var newSrc = $targetThumb.data('src');
        var newTitle = $targetThumb.data('title');
        var newContent = $targetThumb.data('content');

        // Update active thumb
        $thumbs.removeClass('active');
        $targetThumb.addClass('active');

        // Update main image with fade effect
        var $mainImg = $modal.find('.project-gallery-main img');
        $mainImg.css('opacity', '0');
        setTimeout(function() {
            $mainImg.attr('src', newSrc);
            $mainImg.css('opacity', '1');
        }, 200);

        // Update dots
        var $dots = $modal.find('.project-gallery-dots .dot');
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');

        // Update right side content
        if (newTitle && newContent) {
            var contentParts = newContent.split('|');
            var para1 = contentParts[0] || '';
            var para2 = contentParts[1] || '';
            var features = contentParts.slice(2);

            // Update title with fade
            var $title = $modal.find('.project-modal-title');
            var $desc = $modal.find('.project-modal-desc');

            $title.css('opacity', '0');
            $desc.css('opacity', '0');

            setTimeout(function() {
                $title.text(newTitle);

                // Build new description HTML
                var descHtml = '<p>' + para1 + '</p>';
                descHtml += '<p>' + para2 + '</p>';
                descHtml += '<h5>Key Features:</h5>';
                descHtml += '<ul class="tf-list vertical">';
                features.forEach(function(feature) {
                    descHtml += '<li><span class="text-primary">//</span> ' + feature + '</li>';
                });
                descHtml += '</ul>';

                $desc.html(descHtml);

                $title.css('opacity', '1');
                $desc.css('opacity', '1');
            }, 200);
        }
    }

    /**
     * Get current active index in the gallery
     * @param {jQuery} $modal - The modal element
     * @returns {number} The index of the active thumbnail
     */
    function getCurrentIndex($modal) {
        var $thumbs = $modal.find('.project-gallery-thumbs .thumb');
        return $thumbs.filter('.active').index();
    }

    /**
     * Open a project modal by ID
     * @param {string} projectId - The project ID to open
     */
    function openProjectModal(projectId) {
        var modal = $('#modal-' + projectId);
        if (modal.length) {
            $('body').addClass('modal-open');
            modal.addClass('active');
            // Reset gallery to first image
            updateGalleryState(modal, 0);
        }
    }

    /**
     * Close all project modals
     */
    function closeProjectModal() {
        $('body').removeClass('modal-open');
        $('.project-modal').removeClass('active');
    }

    /**
     * Initialize all event listeners
     */
    $(document).ready(function() {
        // Open modal on Read More click
        $('.project-modal-trigger').on('click', function(e) {
            e.preventDefault();
            var projectId = $(this).data('project');
            openProjectModal(projectId);
        });

        // Close modal on close button click
        $('.project-modal-close').on('click', function() {
            closeProjectModal();
        });

        // Close modal on overlay click
        $('.project-modal-overlay').on('click', function() {
            closeProjectModal();
        });

        // Close modal on ESC key
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape') {
                closeProjectModal();
            }
        });

        // Gallery thumbnail click
        $('.project-gallery-thumbs .thumb').on('click', function() {
            var $this = $(this);
            var $modal = $this.closest('.project-modal');
            var index = $this.index();
            updateGalleryState($modal, index);
        });

        // Next button click
        $('.project-gallery-controls .next-btn').on('click', function() {
            var $modal = $(this).closest('.project-modal');
            var $thumbs = $modal.find('.project-gallery-thumbs .thumb');
            var currentIndex = getCurrentIndex($modal);
            var nextIndex = (currentIndex + 1) % $thumbs.length;
            updateGalleryState($modal, nextIndex);
        });

        // Previous button click
        $('.project-gallery-controls .prev-btn').on('click', function() {
            var $modal = $(this).closest('.project-modal');
            var $thumbs = $modal.find('.project-gallery-thumbs .thumb');
            var currentIndex = getCurrentIndex($modal);
            var prevIndex = (currentIndex - 1 + $thumbs.length) % $thumbs.length;
            updateGalleryState($modal, prevIndex);
        });

        // Dot click
        $('.project-gallery-dots .dot').on('click', function() {
            var $this = $(this);
            var $modal = $this.closest('.project-modal');
            var index = $this.data('index');
            updateGalleryState($modal, index);
        });
    });

})(jQuery);
