<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="UTF-8">
  <title><?php echo $title; ?></title>
  <meta name="description" content="<?php echo $description; ?>">
  <meta name="keywords" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet"
        href="<?php bloginfo('template_url'); ?>/assets/plugins/bootstrap-4.0.0-dist/css/bootstrap.min.css">
  <link rel="stylesheet"
        href="<?php bloginfo('template_url'); ?>/assets/plugins/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css">
  <link rel="stylesheet"
        href="<?php bloginfo('template_url'); ?>/assets/plugins/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <meta property="og:title" content="<?php echo $title; ?>">
  <meta property="og:type" content="company">
  <meta property="og:site_name" content="">
  <meta property="og:description" content="<?php echo $description; ?>">
  <meta property="og:locale" content="ja_JP">
  <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/style.css">
  <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css">

</head>
<body <?php body_class(); ?>>

<?php
  $logo_fixed = ot_get_option('logo_fixed', array());
?>

<header class="header">
  <nav class="navbar navbar-expand-lg header-menu">
    <?php if($logo_fixed['background-image']) {?>
    <img src="<?php echo ($logo_fixed['background-image']); ?>" alt="" class="logo pc">
    <img src="<?php bloginfo('template_url'); ?>/assets/img/logo01_sp.png" alt="" class="logo sp">
    <?php } ?>
    <a class="navbar-brand" href="#">
        <?php the_custom_logo(); ?>
    </a>
    <button class="navbar-toggler menu-trigger" type="button" data-toggle="collapse" data-target="#"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav menu">
        <li class="nav-item">
          <a class="nav-link" href="#mission">OUR MISSION <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#service">SERVICE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#information">INFORMATION</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
