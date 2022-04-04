<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header(); ?>
<?php
 $logo_title = ot_get_option('logo_title', array());
?>

  <div class="content">
      <?php
      $bg_visual = ot_get_option('visual', array());
      $title_visual = ot_get_option('title_visual', array());
      ?>
    <div class="visual" style="background-image:url(<?php if ($bg_visual['background-image']) {
        echo $bg_visual['background-image'];
    } ?>) ;">
      <h1 class="title">
          <?php if ($title_visual) {
              echo $title_visual;
          } ?>
        <!--        ビジネス<small>を</small><br class="d-md-none"> ワクワク<small>に</small>-->
      </h1>
      <div class="copy-right">
        <img src="<?php bloginfo('template_url'); ?>/assets/img/copy01.png" alt="">
      </div>
      <a class="scroll" href="#mission">
        <img src="<?php bloginfo('template_url'); ?>/assets/img/scroll01.png" alt="">
      </a>
    </div>
    <div id="mission" class="mission">
      <div class="mission__content">
        <div class="box-title">
          <img src="<?php if($logo_title) { echo $logo_title['background-image'] ;}?>" alt="">
          <h2 class="title">OUR MISSION</h2>
        </div>
          <?php
          $our_mission = ot_get_option('our_mission', array());
          ?>
        <p class="text-center">
            <?php echo $our_mission; ?>
        </p>
      </div>
    </div>
    <div id="service" class="service">
      <div class="box-title">
        <img src="<?php if($logo_title) { echo $logo_title['background-image'] ;}?>" alt="">
        <h2 class="title">service</h2>
      </div>
      <div class="container p-md-0">
          <?php
          $service = ot_get_option('service', array());

          echo $service;
          ?>
        <!--        <h3 class="title">アプリ・ウェブ開発 / 保守事業</h3>-->
        <!--        <p>-->
        <!--          当社は、さまざまな開発案件のご要望に合わせて、オフショア開発事業会社（SCSoft Viet Nam）と共に、開発体制や品質、コストメリットを兼ね備えたご提案をいたします。-->
        <!--        </p>-->
      </div>

      <div class="entrusted">
        <div class="container p-md-0">
          <div class="row align-items-center justify-content-between flex-column-reverse flex-md-row">
            <div class="col-md-5 entrusted-text">
              <p class="title-24">受託開発</p>
              <p>お客さまの実現されたいシステム像をヒアリングし、必要な開発体制をご提案いたします。<br>
                ホームページ制作からWebシステム・アプリ開発まで幅広く対応可能です。</p>
            </div>
            <div class="col-md-7 entrusted-img">
              <img src="<?php bloginfo('template_url'); ?>/assets/img/pic01.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="case">
        <p class="title-24 text-center">開発事例</p>
        <div class="container p-md-0">
          <div class="owl-carousel case-carousel">
              <?php if (have_posts()): ?>
                  <?php while (have_posts()) : the_post();
                      $title_project = $post->post_title;
                      $content_project = $post->post_content;
                      $category_project = get_the_category($post->ID);
                      $image_project = get_field('image_project', $post->ID);
                      ?>

                  <div class="case-carousel-item">
                    <a href="">
                      <p><?php echo $title_project; ?></p>
                      <p><?php foreach ($category_project as $i) {
                              echo $i->cat_name;
                          } ?></p>
                      <img src="<?php echo $image_project; ?>" alt="">
                      <p><?php echo $content_project; ?></p>
                    </a>
                  </div>
                  <?php endwhile; endif; ?>
            <!--            <div class="case-carousel-item">-->
            <!--              <a href="">-->
            <!--                <p>アプリ開発・Webシステム開発<br>-->
            <!--                  在庫管理システム開発</p>-->
            <!--                <img src="--><?php //bloginfo('template_url'); ?><!--/assets/img/slide01.jpg" alt="">-->
            <!--                <p>在庫を管理することで、商品・資材を自動的に発注することに対応。マスタ管理、入出庫・棚卸管理、商品使用、申請の管理をサポートするシステムを開発。<br>-->
            <!--                  利用技術：Google Firebase/SocketIO<br>-->
            <!--                  開発言語：PHP/JavaScript/HTML</p>-->
            <!--              </a>-->
            <!--            </div>-->
            <!--            <div class="case-carousel-item">-->
            <!--              <a href="">-->
            <!--                <p>アプリ開発・Webシステム開発<br>-->
            <!--                  在庫管理システム開発</p>-->
            <!--                <img src="--><?php //bloginfo('template_url'); ?><!--/assets/img/slide01.jpg" alt="">-->
            <!--                <p>在庫を管理することで、商品・資材を自動的に発注することに対応。マスタ管理、入出庫・棚卸管理、商品使用、申請の管理をサポートするシステムを開発。<br>-->
            <!--                  利用技術：Google Firebase/SocketIO<br>-->
            <!--                  開発言語：PHP/JavaScript/HTML</p>-->
            <!--              </a>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
      <div class="labo">
        <div class="container p-md-0">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-7 labo-img">
              <img src="<?php bloginfo('template_url'); ?>/assets/img/pic01.png" alt="">
            </div>
            <div class="col-md-5 labo-text">
              <p class="title-24">ラボ型開発</p>
              <p>ラボ型開発とは、お客さまが求めるスキルを持つ自社専属のエンジニアチームを社外に体制構築して開発する形態です。<br>
                <br>
                当社では、3ヶ月～期間単位で開発リソースを確保するモデルで、一定量以上の開発作業が恒常的にある企業さま、SierやITサービス事業会社、新規事業立ち上げに向けたリーンスタートアップやアジャイル開発の目的等でご導入いただいております。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="merit">
        <p class="title-24 text-center text-white">ラボ型開発のメリット</p>
        <div class="container">
          <div class="row">
            <div class=" col-md-4 merit-item">
              <span class="number">01</span>
              <img src="<?php bloginfo('template_url'); ?>/assets/img/icon01.png" alt="">
              <p>開発リーダーならびに開発メンバーを<br class="pc">固定することで<br>
                ノウハウが蓄積され、開発効率が<br class="pc">向上します。</p>
            </div>
            <div class=" col-md-4 merit-item">
              <span class="number">02</span>
              <img src="<?php bloginfo('template_url'); ?>/assets/img/icon02.png" alt="">
              <p>仕様変更など、<br class="pc">臨機応変に<br class="sp">柔軟な対応をすることが<br class="pc">できます。</p>
            </div>
            <div class=" col-md-4 merit-item">
              <span class="number">03</span>
              <img src="<?php bloginfo('template_url'); ?>/assets/img/icon03.png" alt="">
              <p>ラボ型開発は御社の開発センターを<br>
                弊社に設置するイメージです。<br>
                これにより、機密性の高い案件も<br>
                対応しやすくなります。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="original">
          <?php
          $args_original = array(
              'order' => 'ASC',
              'post_status' => 'publish',
              'post_type' => 'original'
          );
          $query_original = new WP_Query($args_original);
          ?>
        <div class="container">
          <h3 class="title">オリジナルプロダクト</h3>
            <?php
            while ($query_original->have_posts()):$query_original->the_post();
                $title_original = $post->post_title;
                $content_original = $post->post_content;
                $image_original = get_field('image', $post->ID);
                ?>
              <div class="row mb-4 justify-content-between align-items-center">
                <div class="col-md-3 col-6">
                  <img class="" src="<?php echo $image_original; ?>" alt="">
                </div>
                <div class="col-md-9 col-6 p-0">
                  <h4><a href="#"><?php echo $title_original; ?></a></h4>
                  <p><?php echo $content_original; ?></p>
                </div>
              </div>
            <?php endwhile; ?>
          <!--          <div class="row justify-content-between align-items-center">-->
          <!--            <div class="col-md-3 col-6">-->
          <!--              <img class="" src="-->
            <?php //bloginfo('template_url'); ?><!--/assets/img/logo03.jpg" alt="">-->
          <!--            </div>-->
          <!--            <div class="col-md-9 col-6 p-0">-->
          <!--              <h4><a href="#">報告書DX</a></h4>-->
          <!--              <p>例えば、施工を行う事業者は、報告書を未だに紙で行っているケースがあります。<br>-->
          <!--                作業指示や報告業務がより便利に簡素化できるソリューションを提供しております。</p>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
    <div id="information" class="information">
      <div class="container">
        <div class="box-title">
          <img src="<?php if($logo_title) { echo $logo_title['background-image'] ;}?>" alt="">
          <h2 class="title">INFORMATION</h2>
        </div>
          <?php
          $args_information = array(
              'order' => 'DESC',
              'orderby' => 'date',
              'post_status' => 'publish',
              'posts_per_page' => 5,
              'post_type' => 'information'
          );
          $query_information = new WP_Query($args_information);
          $total = $query->post_count;
          ?>
        <ul class="information__content">
            <?php

            if ($query_information->have_posts()) {
                $i = 0;
                while ($query_information->have_posts()):$query_information->the_post();
                    $info_date = get_the_time('Y/m/d');
                    $info_title = $post->post_title;
                    ?>
                  <li class="info">
                    <a href="">
                      <span class="date"><?php echo $info_date; ?></span>
                        <?php echo $info_title; ?>
                    </a>
                  </li>
                <?php
                endwhile;
            }
            wp_reset_postdata();

            ?>
          <!--                  <li class="info">-->
          <!--                    <a href="">-->
          <!--                      <span class="date">2022/03/14</span>-->
          <!--                      当社はサイボウズ社のオフィシャルパートナーになりました。-->
          <!--                    </a>-->
          <!--                  </li>-->
          <!--                  <li class="info">-->
          <!--                    <a href="">-->
          <!--                      <span class="date">2022/03/14</span>-->
          <!--                      当社はサイボウズ社のオフィシャルパートナーになりました。-->
          <!--                    </a>-->
          <!--                  </li>-->
        </ul>
      </div>
    </div>
    <div id="about" class="about">
        <?php
        $about = ot_get_option('about', array());
        ?>
      <div class="container">
        <div class="box-title">
          <img src="<?php if($logo_title) { echo $logo_title['background-image'] ;}?>" alt="">
          <h2 class="title">ABOUT US</h2>
        </div>
        <div>
            <?php echo $about; ?>
        </div>
        <!--                <table class="table">-->
        <!--                  <tbody>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">会社名</th>-->
        <!--                    <td>株式会社JVX</td>-->
        <!--                  </tr>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">住所</th>-->
        <!--                    <td>〒101-0021<br>-->
        <!--                      東京都千代田区外神田6-15-4-2F Air-Era-->
        <!--                    </td>-->
        <!--                  </tr>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">電話番号</th>-->
        <!--                    <td>03-6820-0486</td>-->
        <!--                  </tr>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">CEO</th>-->
        <!--                    <td>丹沢 智</td>-->
        <!--                  </tr>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">CTO</th>-->
        <!--                    <td>トロング マンダット</td>-->
        <!--                  </tr>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">設立</th>-->
        <!--                    <td>2021年8月</td>-->
        <!--                  </tr>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">資本金</th>-->
        <!--                    <td>1,000万円（資本準備金含む）</td>-->
        <!--                  </tr>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">事業内容</th>-->
        <!--                    <td>・アプリやWebシステムの企画・設計・開発<br>-->
        <!--                      ・オフショア開発（ベトナム）<br>-->
        <!--                      ・クラウドサービスの開発-->
        <!--                    </td>-->
        <!--                  </tr>-->
        <!--                  <tr>-->
        <!--                    <th scope="row">関連会社</th>-->
        <!--                    <td>SCSoft Viet Nam</td>-->
        <!--                  </tr>-->
        <!--                  </tbody>-->
        <!--                </table>-->
      </div>
    </div>
    <div id="contact" class="contact">
      <div class="container">
        <div class="box-title">
          <img src="<?php if($logo_title) { echo $logo_title['background-image'] ;}?>" alt="">
          <h2 class="title">CONTACT</h2>
        </div>
        <p class="sub-title text-center">
          各種開発へのご相談、オリジナルプロダクトに関するお問合せは <a href="">プライバシー</a>に同意のうえ、<br>
          以下よりお気軽にお問合せください。
        </p>
        <form>
          <div class="row">
            <div class="col-md-6 col-12">
              <label for="" class="required">姓</label>
              <input type="text" class="form-control" placeholder="">
              <div class="invalid-feedback">Example invalid feedback text</div>
            </div>
            <div class="col-md-6 col-12">
              <label for="" class="required">名</label>
              <input type="text" class="form-control" placeholder="">
            </div>
            <div class="col-md-6 col-12">
              <label for="" class="required">会社名</label>
              <input type="text" class="form-control" placeholder="">
            </div>
            <div class="col-md-6 col-12">
              <label for="" class="">役職名</label>
              <input type="text" class="form-control" placeholder="">
            </div>
            <div class="col-12 col">
              <label for="" class="required">Eメール</label>
              <input type="text" class="form-control" placeholder="">
            </div>
            <div class="col-12 col">
              <label for="" class="required">お問い合わせ内容</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
          <button class="btn-submit">
            送信する
          </button>
          <div class="sproket">
            このフォームは <a href="">HubSpotの無料ツールによって作られています</a>
          </div>
        </form>
      </div>
    </div>
  </div>

<?php
get_footer();
