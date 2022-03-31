<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'company-site' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tGGmznJ`u~|1XZpLf1trt~loH,Q#,{9XJ|gb{]I;}.0^DY>%LVXW!1GVp6[X0E[~' );
define( 'SECURE_AUTH_KEY',  ',gS_DXVuaL7@0QI( yN!9YI`7,FviRgy9N2l`:;A ?R18+T948wqii7j;ErIqVS;' );
define( 'LOGGED_IN_KEY',    'qv*v@[+M{Qr,b^[3E-B^*$ss{9cSnxHM)paXo7h;aS]24?,*H.zE$i6x4oM*Y[||' );
define( 'NONCE_KEY',        '%-{9nE:enda72f|mAKDS?^waGH_!QYhQU`3|Ldp}PJMFFXXP#`Y%+](Ri4s R:VA' );
define( 'AUTH_SALT',        '~bp<4ix_>/0+H_H3z)NpH!Fqq)DcOjG;[W.HgWS^iWG3 jdBgZybY;22d%F,%s3h' );
define( 'SECURE_AUTH_SALT', 'u)biSQtWR]j;!CQ/0H#xf!S}F[>Vb8D`M&llN-n#rG[IO/lD#$J`wzM0i++X|={:' );
define( 'LOGGED_IN_SALT',   'L(Oi].>)B<{`SkCxGTsE~9]cc6Z9j[z=H}~hna*$BT{(3lB$!9^Icx|fVoz BIH]' );
define( 'NONCE_SALT',       'M]Y54Aj3P]N`uz6eV$&K2{l[,71b;$D0yUopS7]}ki>,.;0p5Q[nh 0:fpvc1Zk9' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
