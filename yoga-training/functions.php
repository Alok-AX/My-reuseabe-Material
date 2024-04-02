<?php

    // disable gutenberg for posts
    add_filter('use_block_editor_for_post', '__return_false', 10);

    // disable gutenberg for post types
    add_filter('use_block_editor_for_post_type', '__return_false', 10);

    function site_features()
    {
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'responsive-embeds' );
        add_theme_support( 'editor-styles' );
        add_theme_support( 'html5', array( 'style','script' ) );
        add_theme_support( 'automatic-feed-links' ); 
        add_theme_support('title-tag');
        add_theme_support('html5,array("search-form")');
    }
    add_action('after_setup_theme','site_features');
    
    function my_theme_vars() {
        ?>
        <script type="text/javascript">
            var theme_vars = {
                templateUrl: '<?php echo get_template_directory_uri(); ?>/'
            };
        </script>
        <?php
    }
    add_action('wp_head', 'my_theme_vars');


?>
