<?

  if (!isset($_REQUEST['act']) || $_REQUEST['act']==__ROOT__.'/') $act='none';
  else {
    $act=explode('/',$_REQUEST['act']);
    $act=$act[count($act)-1];
  }

?>

<div class="header-wrap other-header-wrap">
  <div class="logo-page-wrap-text <? if($act == "team"){echo teamBlock;}; ?>">
          <? if($act == 'recomendations'){?>
                          / нас рекомендуют
          <? } ?>
           <? if($act == 'blog'){?>
                          /  НАШ БЛОГ
          <? } ?>
          <? if($act == 'team'){?>
                          /  НАШа команда
          <? } ?>
          <? if($act == 'our_work'){?>
                          /  НАШи работы
          <? } ?>
  </div>
    <div class="box-main-menu cfix animate-section">
        <a href="index">
            <div class="logo other-logo-class">
                <div class="inside-image class-hide">
                    <img src="images/header-logo.png" alt="" />
                </div>
                <div class="logo-swf">
                   <!--  <embed src="images/logo.swf" quality="high" type="application/x-shockwave-flash"  wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" /> -->
                    <div class="logo-swf-wrap">
                      <canvas id="canvas1" width="239" height="83" style="background-color:none"></canvas>
                    </div>

                </div>
            </div>
        </a>

        <div class="socials class-for-fix animate-it <? if($act == "team"){echo teamBlock;} ?>">
            <a href="#"><div class="vk soc-set"> <img src="images/logo-vk.png" alt="" /> </div> </a>
            <a href="#"><div class="facebook soc-set"> <img src="images/logo-fb.png"  alt="" /> </div></a>
            <a href="#"><div class="google-plus soc-set"> <img src="images/logo-gp.png"  alt="" /> </div></a>
        </div>
        <div class="block-nav block-nav-other-header <? if($act != "index" || $act != "none" ){echo team;
           /* if($act == "team" || $act == "blog" || $act == "our_work" || $act == "recomendations"){echo ' '.teamBlock;}*/
          };?>">
            <span class="sendwich-icon">
              <span></span>
            </span>
            <nav>
                <ul>
                  <li>
                    <a href="#">
                      <span class="nav-table">о нас </span>
                      <span class="nav-device">о нАС</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="nav-table">работы</span>
                      <span class="nav-device"><!--НАШИ-->РАБОТЫ</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="nav-table">Рекомендации</span>
                      <span class="nav-device"><!--НАШИ-->РЕКОМЕНДАЦИИ</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="nav-table">команда</span>
                      <span class="nav-device"><!--НАША-->КОМАНДА</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="nav-table">блог</span>
                      <span class="nav-device"><!--НАШ-->БЛОГ</span>
                    </a>
                  </li>
                  <li class="device-nav-item">
                    <a href="#">
                      <span class="nav-device">СВЯЗАТЬСЯ С НАМИ</span>
                    </a>
                  </li>
                </ul>
            </nav>
        </div>



    </div>
</div>