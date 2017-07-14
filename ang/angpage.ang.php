<?php
// This file declares an Angular module which can be autoloaded
// in CiviCRM. See also:
// http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_angularModules

return array(
  'js' => array(
    0 => 'ang/angpage.js',
    1 => 'ang/angpage/*.js',
    2 => 'ang/angpage/*/*.js',
  ),
  'css' => array(
    0 => 'ang/angpage.css',
  ),
  'partials' => array(
    0 => 'ang/angpage',
  ),
  'settings' => array(),
);
